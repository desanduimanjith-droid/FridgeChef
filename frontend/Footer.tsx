import { ArrowUpRight, ChefHat } from 'lucide-react';
import { footerColumns, navLinks } from './siteContent';

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/60 bg-white/55 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-muted-900">
              <ChefHat className="h-8 w-8 text-brand-500" />
              Fridge<span className="text-brand-500">Chef</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-500">
              Cooking made simple - turn what you have into something delicious.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-500">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-brand-500">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-900">
                  {column.title}
                </h3>
                <div className="space-y-3 text-sm text-muted-500">
                  {column.links.map((link) => (
                    <a key={link} href="#" className="flex items-center gap-2 transition-colors hover:text-brand-500">
                      <ArrowUpRight className="h-4 w-4" />
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-sm text-muted-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FridgeChef. All rights reserved.</p>
          <p>Made with 🥬 for home cooks.</p>
        </div>
      </div>
    </footer>
  );
}
