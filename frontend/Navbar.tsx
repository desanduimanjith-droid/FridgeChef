import { ChefHat, Heart, UtensilsCrossed } from 'lucide-react';
import { navLinks } from '../app/siteContent';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
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
              className="text-sm font-medium text-muted-500 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#favorites"
            className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-muted-900 transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Heart className="h-4 w-4 text-brand-500" />
            Favorites
          </a>
          <button className="inline-flex items-center gap-2 rounded-full bg-muted-900 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-black">
            <UtensilsCrossed className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}