import { ArrowUpRight } from 'lucide-react';
import { BrandLockup } from './BrandLockup';
import { footerColumns, navLinks } from './siteContent';

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-stone-200/80 bg-[linear-gradient(180deg,rgba(255,250,245,0.96),rgba(248,241,230,0.98))] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-5">
            <BrandLockup variant="nav" className="md:items-start md:text-left" />
            <p className="max-w-md text-sm leading-6 text-stone-600">
              Cooking made simple - turn what you have into something delicious.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-stone-600">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-amber-700">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-stone-900">
                  {column.title}
                </h3>
                <div className="space-y-3 text-sm text-stone-600">
                  {column.links.map((link) => (
                    <a key={link} href="#" className="flex items-center gap-2 transition-colors hover:text-amber-700">
                      <ArrowUpRight className="h-4 w-4" />
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-stone-200 pt-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FridgeChef. All rights reserved.</p>
          <p>Made with 🥬 for home cooks.</p>
        </div>
      </div>
    </footer>
  );
}
