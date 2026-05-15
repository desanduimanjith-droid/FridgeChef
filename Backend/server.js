const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const ING_FILE = path.join(DATA_DIR, 'ingredients.json');
const REC_FILE = path.join(DATA_DIR, 'recipes.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(ING_FILE)) fs.writeFileSync(ING_FILE, JSON.stringify([]));
  if (!fs.existsSync(REC_FILE)) fs.writeFileSync(REC_FILE, JSON.stringify([]));
}

function readJson(file) {
  ensureDataDir();
  try {
    const text = fs.readFileSync(file, 'utf8');
    return JSON.parse(text || '[]');
  } catch (err) {
    return [];
  }
}

function writeJson(file, data) {
  ensureDataDir();
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Ingredients
app.get('/api/ingredients', (req, res) => {
  const items = readJson(ING_FILE);
  res.json(items);
});

app.post('/api/ingredients', (req, res) => {
  const items = readJson(ING_FILE);
  const item = req.body || {};
  if (!item.name) return res.status(400).json({ error: 'name is required' });
  item.id = Date.now().toString(36);
  items.push(item);
  writeJson(ING_FILE, items);
  res.status(201).json(item);
});

// Recipes
app.get('/api/recipes', (req, res) => {
  const items = readJson(REC_FILE);
  res.json(items);
});
app.post('/api/recipes', (req, res) => {
  const items = readJson(REC_FILE);
  const recipe = req.body || {};
  if (!recipe.title || !Array.isArray(recipe.requiredIngredients)) {
    return res.status(400).json({ error: 'title and requiredIngredients[] required' });
  }
  recipe.id = Date.now().toString(36);
  items.push(recipe);
  writeJson(REC_FILE, items);
  res.status(201).json(recipe);
});

// Match recipes by provided ingredients
// POST /api/match { ingredients: ['egg','milk'] }
app.post('/api/match', (req, res) => {
  const provided = (req.body && req.body.ingredients) || [];
  if (!Array.isArray(provided)) return res.status(400).json({ error: 'ingredients must be an array' });
  const normalized = provided.map((s) => String(s).toLowerCase().trim());
  const recipes = readJson(REC_FILE);
  const matches = recipes.filter((r) => {
    const required = (r.requiredIngredients || []).map((s) => String(s).toLowerCase().trim());
    return required.every((ing) => normalized.includes(ing));
  });
  res.json({ matches, count: matches.length });
});

const PORT = process.env.PORT || 4000;
ensureDataDir();
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const ING_FILE = path.join(DATA_DIR, 'ingredients.json');
const REC_FILE = path.join(DATA_DIR, 'recipes.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(ING_FILE)) fs.writeFileSync(ING_FILE, JSON.stringify([]));
  if (!fs.existsSync(REC_FILE)) fs.writeFileSync(REC_FILE, JSON.stringify([]));
}

function readJson(file) {
  ensureDataDir();
  return JSON.parse(fs.readFileSync(file, 'utf8') || '[]');
}

function writeJson(file, data) {
  ensureDataDir();
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Ingredients
app.get('/api/ingredients', (req, res) => {
  const items = readJson(ING_FILE);
  res.json(items);
});

app.post('/api/ingredients', (req, res) => {
  const items = readJson(ING_FILE);
  const item = req.body;
  item.id = Date.now().toString(36);
  items.push(item);
  writeJson(ING_FILE, items);
  res.status(201).json(item);
});

// Recipes
app.get('/api/recipes', (req, res) => {
  const items = readJson(REC_FILE);
  res.json(items);
});

app.post('/api/recipes', (req, res) => {
  const items = readJson(REC_FILE);
  const recipe = req.body;
  recipe.id = Date.now().toString(36);
  items.push(recipe);
  writeJson(REC_FILE, items);
  res.status(201).json(recipe);
});

const PORT = process.env.PORT || 4000;
ensureDataDir();
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
