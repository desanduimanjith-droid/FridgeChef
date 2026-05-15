# FridgeChef Backend

Simple Express backend for development.

Endpoints:
- GET /api/ingredients
- POST /api/ingredients
- GET /api/recipes
- POST /api/recipes

Additional endpoints:
- GET /api/health — checks server status
- POST /api/match — find recipes that match provided ingredients

Example `POST /api/match` body:

```json
{ "ingredients": ["eggs","butter","salt"] }
```

Response:

```json
{ "matches": [ /* matched recipes */ ], "count": 1 }
```

Run:

```bash
cd Backend
npm install
npm run start
```
