import { ArrowRight, Clock3, Flame, Sparkles } from 'lucide-react';
import type { RecipeCardData } from './siteContent';

export default function RecipeCard({ recipe, compact = false }: { recipe: RecipeCardData; compact?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white/92 shadow-[0_18px_50px_rgba(120,113,108,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(120,113,108,0.18)]">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className={compact ? 'h-44 w-full object-cover' : 'h-60 w-full object-cover'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-stone-950/0 to-stone-950/0" />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-stone-900 backdrop-blur">
          {recipe.category}
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-amber-500/25">
          {recipe.match}% match
        </div>
      </div>

      <div className={compact ? 'space-y-4 p-4' : 'space-y-4 p-5'}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={compact ? 'text-lg font-bold text-stone-900' : 'text-xl font-bold text-stone-900'}>
              {recipe.name}
            </h3>
            <p className="mt-1 text-sm leading-6 text-stone-600">{recipe.summary}</p>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Smart
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-600">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-amber-600" />
            {recipe.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Flame className="h-4 w-4 text-amber-600" />
            {recipe.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {recipe.ingredients.slice(0, 3).map((ingredient) => (
            <span key={ingredient} className="rounded-full bg-amber-50/70 px-3 py-1 text-xs font-medium text-amber-800">
              {ingredient}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 transition-transform group-hover:translate-x-0.5">
          View recipe
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}