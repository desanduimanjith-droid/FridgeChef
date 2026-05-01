import { ChefHat, Heart, UtensilsCrossed } from 'lucide-react';
import { navLinks } from './siteContent';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,253,245,0.9),rgba(240,253,244,0.72))] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-muted-900">
          <ChefHat className="h-8 w-8 text-brand-500" />
          Fridge<span className="text-brand-500">Chef</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-emerald-900/70 transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#favorites"
            className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Heart className="h-4 w-4 text-emerald-600" />
            Favorites
          </a>
          <button className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5 hover:bg-emerald-800">
            <UtensilsCrossed className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}