import { ArrowRight, Clock3, Flame, Sparkles } from 'lucide-react';
import type { RecipeCardData } from '../app/siteContent';

export default function RecipeCard({ recipe, compact = false }: { recipe: RecipeCardData; compact?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)]">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className={compact ? 'h-44 w-full object-cover' : 'h-60 w-full object-cover'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-muted-900 backdrop-blur">
          {recipe.category}
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-brand-500/25">
          {recipe.match}% match
        </div>
      </div>

      <div className={compact ? 'space-y-4 p-4' : 'space-y-4 p-5'}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={compact ? 'text-lg font-bold text-muted-900' : 'text-xl font-bold text-muted-900'}>
              {recipe.name}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-500">{recipe.summary}</p>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Smart
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-brand-500" />
            {recipe.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Flame className="h-4 w-4 text-brand-500" />
            {recipe.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {recipe.ingredients.slice(0, 3).map((ingredient) => (
            <span key={ingredient} className="rounded-full bg-muted-50 px-3 py-1 text-xs font-medium text-muted-500">
              {ingredient}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-transform group-hover:translate-x-0.5">
          View recipe
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}