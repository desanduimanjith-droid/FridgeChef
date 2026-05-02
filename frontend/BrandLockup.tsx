import { ChefHat, Sprout, UtensilsCrossed } from 'lucide-react';

type BrandLockupProps = {
	variant?: 'hero' | 'nav';
	className?: string;
};

export function BrandLockup({ variant = 'hero', className = '' }: BrandLockupProps) {
	const compact = variant === 'nav';

	if (compact) {
		return (
			<div className={`inline-flex items-center gap-3 ${className}`}>
				<div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
					<div className="absolute inset-0 bg-[linear-gradient(180deg,#eff9ff_0%,#dff1ff_46%,#fef6ec_100%)]" />
					<div className="absolute left-0 top-2 h-8 w-[34%] rounded-r-xl bg-[linear-gradient(180deg,#eef2f7_0%,#c8d5e4_100%)]" />
					<div className="absolute right-0 top-2 h-8 w-[28%] rounded-l-xl bg-[linear-gradient(180deg,#f3fbff_0%,#d5e9f7_100%)]" />
					<div className="relative rounded-full border-2 border-white bg-white p-1.5 shadow-sm">
						<ChefHat className="h-4 w-4 text-[#1f4b6d]" />
					</div>
				</div>

				<div className="space-y-0.5 leading-none">
					<div className="text-2xl font-extrabold tracking-tight text-muted-900">
						<span className="text-[#1f4b6d]">Fridge</span>
						<span className="text-[#ff6b2c]">Chef</span>
					</div>
					<p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-muted-500">
						Recipe finder
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className={`flex flex-col items-center text-center gap-5 md:items-start md:text-left ${className}`}>
			<div
				className={`relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl ${
					'w-full max-w-[20rem] p-4 sm:p-5'
				}`}
			>
				<div className="absolute inset-x-8 top-5 h-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),transparent_70%)]" />
				<div
					className="relative mx-auto flex w-40 aspect-square items-center justify-center overflow-hidden rounded-full border-[6px] border-[#1f4b6d] bg-[linear-gradient(180deg,#eff9ff_0%,#dff1ff_46%,#fef6ec_100%)] sm:w-48"
				>
					<div className="absolute inset-x-6 top-5 rounded-full border border-[#ff6b2c]/25 bg-white/55 px-3 py-2 shadow-sm">
						<div className="flex items-center justify-center gap-3 text-[#1f4b6d]">
							<span className="h-2 w-2 rounded-full bg-[#ff6b2c]" />
							<span className="h-2 w-2 rounded-full bg-[#22c55e]" />
							<span className="h-2 w-2 rounded-full bg-[#ff6b2c]" />
						</div>
					</div>

					<div className="absolute left-0 top-8 h-[75%] w-[34%] rounded-r-[1.2rem] border-r border-[#1f4b6d]/20 bg-[linear-gradient(180deg,#eef2f7_0%,#c8d5e4_100%)] shadow-inner" />
					<div className="absolute right-0 top-8 h-[75%] w-[28%] rounded-l-[1.2rem] border-l border-[#1f4b6d]/20 bg-[linear-gradient(180deg,#f3fbff_0%,#d5e9f7_100%)] shadow-inner" />

					<div className="absolute left-[52%] top-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-white p-3 shadow-lg">
						<ChefHat className="h-10 w-10 text-[#1f4b6d]" />
					</div>

					<div className="absolute bottom-10 left-[18%] h-4 w-4 rounded-full bg-[#ff6b2c] shadow-sm" />
					<div className="absolute bottom-8 right-[18%] h-4 w-4 rounded-full bg-[#22c55e] shadow-sm" />
					<div className="absolute left-[22%] top-[34%] h-8 w-2 rotate-[-18deg] rounded-full bg-[#22c55e]" />
					<div className="absolute right-[23%] top-[38%] h-8 w-2 rotate-[18deg] rounded-full bg-[#ff6b2c]" />

					<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#1f4b6d] shadow-sm">
						<UtensilsCrossed className="h-3 w-3 text-[#ff6b2c]" />
						FridgeChef
					</div>
				</div>

				<div className="relative mt-3 flex flex-wrap items-center justify-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.26em] text-[#1f4b6d]/70 md:justify-start">
					<span className="inline-flex items-center gap-1 rounded-full bg-[#eff9ff] px-3 py-1">
						<Sprout className="h-3 w-3 text-[#22c55e]" />
						Recipe finder
					</span>
					<span className="inline-flex items-center gap-1 rounded-full bg-[#fff4eb] px-3 py-1 text-[#ff6b2c]">
						Chef companion
					</span>
				</div>
			</div>

			<div className="space-y-2">
				<div className={`font-extrabold tracking-tight text-muted-900 ${compact ? 'text-2xl' : 'text-5xl sm:text-6xl'} leading-none`}>
					<span className="text-[#1f4b6d]">Fridge</span>
					<span className="text-[#ff6b2c]">Chef</span>
				</div>
				<p className={`max-w-xl font-semibold text-muted-500 ${compact ? 'text-sm' : 'text-base sm:text-lg'}`}>
					Your Recipe Finder &amp; Kitchen Companion
				</p>
			</div>
		</div>
	);
}