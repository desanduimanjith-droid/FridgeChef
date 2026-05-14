const http = require('http');
const { URL } = require('url');

const port = Number(process.env.PORT) || 3001;

const recipes = [
  {
    name: 'Chicken Fried Rice',
    ingredients: ['Chicken', 'Rice', 'Egg', 'Garlic', 'Soy sauce'],
    time: '20 min',
    difficulty: 'Easy',
    category: 'Lunch',
    summary: 'A fast skillet meal with soy, garlic, and leftover rice.',
  },
  {
    name: 'Fluffy Omelette',
    ingredients: ['Egg', 'Cheese', 'Butter', 'Chives'],
    time: '10 min',
    difficulty: 'Easy',
    category: 'Breakfast',
    summary: 'Soft, folded eggs with a creamy center and fresh herbs.',
  },
  {
    name: 'Creamy Pasta',
    ingredients: ['Pasta', 'Cheese', 'Garlic', 'Cream'],
    time: '15 min',
    difficulty: 'Medium',
    category: 'Dinner',
    summary: 'A silky sauce that turns pantry ingredients into comfort food.',
  },
  {
    name: 'Chicken Curry',
    ingredients: ['Chicken', 'Onion', 'Garlic', 'Tomato', 'Curry powder'],
    time: '35 min',
    difficulty: 'Medium',
    category: 'Dinner',
    summary: 'Warm spice, tender chicken, and a rich sauce in one pan.',
  },
];

function normalizeIngredients(input) {
  if (!Array.isArray(input)) return [];

  return input
    .map((item) => String(item).trim())
    .filter(Boolean);
}

function scoreRecipe(recipe, providedIngredients) {
  if (!providedIngredients.length) {
    return { ...recipe, match: 0, missing: recipe.ingredients };
  }

  const matches = recipe.ingredients.filter((ingredient) =>
    providedIngredients.some((value) => ingredient.toLowerCase().includes(value.toLowerCase()))
  );
  const missing = recipe.ingredients.filter((ingredient) => !matches.includes(ingredient));
  const match = Math.round((matches.length / recipe.ingredients.length) * 100);

  return {
    ...recipe,
    match,
    missing,
  };
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload, null, 2));
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && requestUrl.pathname === '/health') {
    sendJson(res, 200, {
      ok: true,
      service: 'FridgeChef backend',
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (req.method === 'GET' && requestUrl.pathname === '/api/recipes') {
    const ingredients = normalizeIngredients(requestUrl.searchParams.getAll('ingredient'));
    const results = recipes
      .map((recipe) => scoreRecipe(recipe, ingredients))
      .sort((a, b) => b.match - a.match);

    sendJson(res, 200, {
      query: ingredients,
      count: results.length,
      recipes: results,
    });
    return;
  }

  if (req.method === 'POST' && requestUrl.pathname === '/api/recipes') {
    let rawBody = '';

    req.on('data', (chunk) => {
      rawBody += chunk;

      if (rawBody.length > 1_000_000) {
        req.destroy();
      }
    });

    req.on('end', () => {
      try {
        const body = rawBody ? JSON.parse(rawBody) : {};
        const ingredients = normalizeIngredients(body.ingredients);
        const results = recipes
          .map((recipe) => scoreRecipe(recipe, ingredients))
          .sort((a, b) => b.match - a.match);

        sendJson(res, 200, {
          query: ingredients,
          count: results.length,
          recipes: results,
        });
      } catch (error) {
        sendJson(res, 400, {
          ok: false,
          error: 'Invalid JSON payload.',
        });
      }
    });

    return;
  }

  sendJson(res, 404, {
    ok: false,
    error: 'Route not found.',
  });
});

server.listen(port, () => {
  console.log(`FridgeChef backend running on http://localhost:${port}`);
});
