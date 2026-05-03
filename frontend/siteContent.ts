export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Recipes", href: "#recipes" },
  { label: "About", href: "#about" },
  { label: "Favorites", href: "#favorites" },
];

export const heroIngredients = ["Egg", "Chicken", "Rice"];

export const featuredIngredients = ["Egg", "Chicken", "Rice"];

export const quickSuggestions = ["Tomato", "Cheese", "Pasta", "Onion"];

export const categories = ["All", "Breakfast", "Lunch", "Dinner"] as const;

export type Category = (typeof categories)[number];

export type RecipeCardData = {
  name: string;
  time: string;
  difficulty: string;
  match: number;
  image: string;
  category: Exclude<Category, "All">;
  summary: string;
  ingredients: string[];
};

export const recipeCards: RecipeCardData[] = [
  {
    name: "Chicken Fried Rice",
    time: "20 min",
    difficulty: "Easy",
    match: 100,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
    category: "Lunch",
    summary: "A fast skillet meal with soy, garlic, and leftover rice.",
    ingredients: ["Chicken", "Rice", "Egg", "Garlic", "Soy sauce"],
  },
  {
    name: "Fluffy Omelette",
    time: "10 min",
    difficulty: "Easy",
    match: 95,
    image: "https://images.unsplash.com/photo-1510693206972-10e3f9ef6d0a?q=80&w=1200&auto=format&fit=crop",
    category: "Breakfast",
    summary: "Soft, folded eggs with a creamy center and fresh herbs.",
    ingredients: ["Egg", "Cheese", "Butter", "Chives"],
  },
  {
    name: "Creamy Pasta",
    time: "15 min",
    difficulty: "Medium",
    match: 90,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    category: "Dinner",
    summary: "A silky sauce that turns pantry ingredients into comfort food.",
    ingredients: ["Pasta", "Cheese", "Garlic", "Cream"],
  },
  {
    name: "Egg Fried Rice",
    time: "15 min",
    difficulty: "Easy",
    match: 100,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop",
    category: "Lunch",
    summary: "Crispy rice with eggs, spring onions, and a savory finish.",
    ingredients: ["Rice", "Egg", "Onion", "Soy sauce"],
  },
  {
    name: "Chicken Curry",
    time: "35 min",
    difficulty: "Medium",
    match: 90,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop",
    category: "Dinner",
    summary: "Warm spice, tender chicken, and a rich sauce in one pan.",
    ingredients: ["Chicken", "Onion", "Garlic", "Tomato", "Curry powder"],
  },
  {
    name: "Chicken Soup",
    time: "30 min",
    difficulty: "Easy",
    match: 95,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    category: "Dinner",
    summary: "A soothing bowl with broth, vegetables, and shredded chicken.",
    ingredients: ["Chicken", "Carrot", "Celery", "Onion", "Herbs"],

    
  },
];

export const featuredRecipe = {
  name: "Chicken Fried Rice",
  image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1400&auto=format&fit=crop",
  time: "20 min",
  servings: "2 servings",
  difficulty: "Easy level",
  rating: "100% match",
  note: "You have all 8 ingredients!",
  ingredients: [
    "Cooked rice (200g)",
    "Chicken breast (150g)",
    "Eggs (2)",
    "Garlic (3 cloves)",
    "Soy sauce (2 tbsp)",
    "Green onions",
    "Sesame oil",
    "Salt to taste",
  ],
  steps: [
    "Heat oil in a pan over medium-high heat.",
    "Add minced garlic and cook until fragrant, about 30 seconds.",
    "Add diced chicken and cook until golden brown.",
    "Push chicken to the side, scramble the eggs in the empty space.",
    "Add cooked rice and soy sauce, mix everything together.",
    "Cook for 2-3 minutes, garnish with green onions and serve hot.",
  ],
  tip: "Use day-old rice for the best texture.",
};

export const footerColumns = [
  {
    title: "Product",
    links: ["Recipes", "Favorites", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Blog"],
  },
  {
    title: "Stay inspired",
    links: ["Join the newsletter", "Cooking tips", "Weekly ideas"],
  },
];
