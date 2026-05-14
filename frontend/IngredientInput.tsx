"use client";
import { KeyboardEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Sparkles, X } from 'lucide-react';
import { quickSuggestions } from './siteContent';

export function IngredientInput({ onSearch }: { onSearch: (tags: string[]) => void }) {
  const [ingredients, setIngredients] = useState<string[]>(['']);

  const updateIngredient = (index: number, value: string) => {
    setIngredients((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  };

  const addIngredientField = () => {
    setIngredients((current) => [...current, '']);
  };

  const removeIngredientField = (index: number) => {
    setIngredients((current) => {
      if (current.length === 1) return [''];
      return current.filter((_, itemIndex) => itemIndex !== index);
    });
  };

  const commitIngredient = (index: number) => {
    const value = ingredients[index]?.trim();

    if (!value) return;

    setIngredients((current) => {
      const next = current.map((item, itemIndex) => (itemIndex === index ? value : item));

      if (index === next.length - 1) {
        next.push('');
      }

      return next;
    });
  };

  const handleEnter = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      commitIngredient(index);
    }
  };

  const searchIngredients = ingredients.map((item) => item.trim()).filter(Boolean);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="rounded-[2rem] border border-stone-200 bg-white/92 p-4 shadow-[0_24px_80px_rgba(120,113,108,0.12)] backdrop-blur-xl">
        <div className="flex flex-col gap-3">
          <AnimatePresence>
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={`${index}-${ingredient}`}
                initial={{ scale: 0.98, opacity: 0, y: 8 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: -8 }}
                className="flex items-center gap-3 rounded-[1.2rem] border border-amber-100 bg-amber-50/30 px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <input
                  className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-stone-400 md:text-lg"
                  placeholder="Add one ingredient"
                  value={ingredient}
                  onChange={(event) => updateIngredient(index, event.target.value)}
                  onKeyDown={(event) => handleEnter(index, event)}
                />
                {index === ingredients.length - 1 ? (
                  <button
                    type="button"
                    onClick={addIngredientField}
                    aria-label="Add another ingredient"
                    className="shrink-0 rounded-full bg-stone-900 p-2.5 text-white transition-colors hover:bg-stone-800"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => removeIngredientField(index)}
                    aria-label="Remove ingredient"
                    className="shrink-0 rounded-full bg-white/90 p-2.5 text-stone-500 transition-colors hover:text-amber-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <button
          onClick={() => onSearch(searchIngredients)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-[1.1rem] bg-gradient-to-r from-amber-500 to-orange-500 py-4 font-bold text-white transition-transform hover:-translate-y-0.5 hover:from-amber-600 hover:to-orange-600"
        >
          <Search className="h-5 w-5" /> Find Recipes
        </button>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-stone-600 lg:justify-start">
        <span className="flex items-center gap-2 font-medium">
          <Sparkles className="h-4 w-4 text-amber-600" />
          Try:
        </span>
        {quickSuggestions.map((item) => (
          <button
            key={item}
            onClick={() =>
              setIngredients((current) => {
                const emptyIndex = current.findIndex((entry) => !entry.trim());

                if (emptyIndex === -1) {
                  return [...current, item, ''];
                }

                const next = [...current];
                next[emptyIndex] = item;

                return emptyIndex === next.length - 1 ? [...next, ''] : next;
              })
            }
            className="rounded-full border border-stone-200 bg-white/85 px-4 py-1.5 font-medium text-stone-600 transition-colors hover:border-amber-300 hover:text-amber-700"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}