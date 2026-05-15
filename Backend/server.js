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
