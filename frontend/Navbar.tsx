import { Heart, UtensilsCrossed } from 'lucide-react';
import { BrandLockup } from './BrandLockup';
import { navLinks } from './siteContent';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-amber-200/70 bg-[linear-gradient(180deg,rgba(255,250,245,0.94),rgba(255,247,237,0.84))] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
        <a href="#top" className="shrink-0 transition-transform hover:-translate-y-0.5">
          <BrandLockup variant="nav" className="md:items-start md:text-left" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#favorites"
            className="hidden items-center gap-2 rounded-full border border-amber-200 bg-amber-50/90 px-4 py-2 text-sm font-semibold text-amber-900 shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Heart className="h-4 w-4 text-amber-600" />
            Favorites
          </a>
          <button className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-stone-900/15 transition-transform hover:-translate-y-0.5 hover:bg-stone-800">
            <UtensilsCrossed className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}