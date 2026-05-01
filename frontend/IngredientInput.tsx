"use client";
import { useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, X } from 'lucide-react';
import { quickSuggestions } from './siteContent';

export function IngredientInput({ onSearch }: { onSearch: (tags: string[]) => void }) {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const commitTag = () => {
    const tag = input.trim();

    if (!tag) return;

    if (!tags.includes(tag)) setTags([...tags, tag]);
    setInput("");
  };

  const addTag = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      commitTag();
    }
  };

  const removeTag = (idx: number) => setTags(tags.filter((_, i) => i !== idx));

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="flex flex-wrap gap-2 p-2">
          <AnimatePresence>
            {tags.map((tag, i) => (
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                key={tag} 
                className="flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-sm font-bold text-brand-600"
              >
                {tag}
                <X className="h-4 w-4 cursor-pointer" onClick={() => removeTag(i)} />
              </motion.span>
            ))}
          </AnimatePresence>
          <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-[1.2rem] border border-emerald-100 bg-emerald-50/35 px-3 py-2.5">
            <input 
              className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-muted-500/70"
              placeholder="Add ingredients..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={addTag}
            />
            <button
              type="button"
              onClick={commitTag}
              className="shrink-0 rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
            >
              Enter
            </button>
          </div>
        </div>
        <button 
          onClick={() => onSearch(tags)}
          className="flex w-full items-center justify-center gap-2 rounded-[1.1rem] bg-brand-500 py-4 font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
        >
          <Search className="h-5 w-5" /> Find Recipes
        </button>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-500">
        <span className="flex items-center gap-2 font-medium">
          <Sparkles className="h-4 w-4 text-brand-500" />
          Try:
        </span>
        {quickSuggestions.map((item) => (
          <button
            key={item}
            onClick={() => !tags.includes(item) && setTags([...tags, item])}
            className="rounded-full border border-black/10 bg-white/80 px-4 py-1.5 font-medium text-muted-500 transition-colors hover:border-brand-200 hover:text-brand-500"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}