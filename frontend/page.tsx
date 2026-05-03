"use client";
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, BookOpen, Clock3, Flame, Heart, Leaf, Search, Sparkles, Star, UtensilsCrossed } from 'lucide-react';
import { Footer } from './Footer';
import { BrandLockup } from './BrandLockup';
import { IngredientInput } from './IngredientInput';
import RecipeCard from './RecipeCard';
import { Navbar } from './Navbar';
import {
	categories,
	featuredIngredients,
	featuredRecipe,
	heroIngredients,
	quickSuggestions,
	recipeCards,
	type Category,
} from './siteContent';

export default function Home() {
	const [searchIngredients, setSearchIngredients] = useState<string[]>(heroIngredients);
	const [activeCategory, setActiveCategory] = useState<Category>('All');

	const visibleRecipes = useMemo(() => {
		const terms = searchIngredients.map((item) => item.toLowerCase());

		return recipeCards
			.filter((recipe) => activeCategory === 'All' || recipe.category === activeCategory)
			.map((recipe) => {
				const matchCount = terms.filter((term) =>
					recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(term))
				).length;

				return {
					...recipe,
					match: terms.length ? Math.min(100, recipe.match + matchCount * 2) : recipe.match,
				};
			})
			.sort((a, b) => b.match - a.match);
	}, [activeCategory, searchIngredients]);

	const handleSearch = (ingredients: string[]) => {
		setSearchIngredients(ingredients.length ? ingredients : heroIngredients);
	};

	return (
		<div className="relative min-h-screen overflow-hidden">
			<Navbar />

			<main id="top" className="relative">
				<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] bg-[radial-gradient(circle_at_15%_15%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(16,185,129,0.18),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(134,239,172,0.16),transparent_28%),linear-gradient(180deg,rgba(240,253,244,0.98)_0%,rgba(236,253,245,0.82)_46%,rgba(220,252,231,0.36)_100%)]" />
				<div className="pointer-events-none absolute left-[-6rem] top-40 -z-10 h-72 w-72 rounded-full bg-success-100/50 blur-3xl" />
				<div className="pointer-events-none absolute right-[-4rem] top-[32rem] -z-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

				<section className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
					<div className="grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr]">
						<div className="space-y-8 text-center lg:text-left">
							<BrandLockup className="mx-auto lg:mx-0" />

							<motion.div
								initial={{ y: 18, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600 shadow-sm"
							>
								<Sparkles className="h-4 w-4" />
								AI-powered recipe magic
							</motion.div>

							<div className="space-y-5">
								<motion.h1
									initial={{ y: 18, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.08 }}
									className="max-w-3xl text-5xl font-extrabold tracking-tight text-muted-900 sm:text-6xl lg:text-7xl"
								>
									What&apos;s in <br />
									<span className="font-serif italic text-brand-500">your fridge?</span>
								</motion.h1>

								<motion.p
									initial={{ y: 18, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.16 }}
									className="max-w-2xl text-lg leading-8 text-muted-500"
								>
									Find delicious recipes with the ingredients you already have. No more grocery runs, no more food waste.
								</motion.p>
							</div>

							<motion.div
								initial={{ y: 18, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.22 }}
								className="flex flex-wrap items-center gap-3"
							>
								{[
									{ icon: Search, label: 'Smart Suggestions' },
									{ icon: Heart, label: 'Save Favorites' },
									{ icon: Leaf, label: 'Easy Cooking' },
								].map((item) => (
									<span
										key={item.label}
										className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-muted-500 shadow-sm"
									>
										<item.icon className="h-4 w-4 text-brand-500" />
										{item.label}
									</span>
								))}
							</motion.div>

							<div className="grid gap-3 sm:grid-cols-3">
								{heroIngredients.map((ingredient, index) => (
									<motion.div
										key={ingredient}
										initial={{ y: 12, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.28 + index * 0.05 }}
										className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-center text-sm font-bold text-muted-900 shadow-sm"
									>
										{ingredient}
									</motion.div>
								))}
							</div>

							<motion.div
								initial={{ y: 14, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.34 }}
								className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
							>
								<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
									<div className="space-y-2">
										<p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-500">Need a few extras?</p>
										<h3 className="text-xl font-extrabold tracking-tight text-muted-900">Add these next</h3>
										<p className="max-w-md text-sm leading-6 text-muted-500">
											These ingredients pair well with what&apos;s already in your fridge and help unlock more recipes.
										</p>
									</div>

									<div className="rounded-2xl bg-brand-50 px-4 py-3 text-center sm:min-w-28">
										<p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Matches</p>
										<p className="mt-1 text-2xl font-extrabold text-brand-700">{visibleRecipes.length}</p>
									</div>
								</div>

								<div className="mt-5 flex flex-wrap gap-3">
									{quickSuggestions.map((item) => (
										<span
											key={item}
											className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
										>
											{item}
										</span>
									))}
								</div>
							</motion.div>

							<IngredientInput onSearch={handleSearch} />

							<div className="flex flex-wrap items-center gap-3 text-sm text-muted-500">
								<span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-semibold text-muted-900 shadow-sm">
									<BadgeCheck className="h-4 w-4 text-brand-500" />
									Recipes found {visibleRecipes.length}
								</span>
								<span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-semibold text-muted-900 shadow-sm">
									<Flame className="h-4 w-4 text-brand-500" />
									{visibleRecipes[0]?.match ?? 0}% perfect match
								</span>
							</div>
						</div>

						<motion.div
							initial={{ scale: 0.98, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							transition={{ delay: 0.12 }}
							className="relative self-start overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl"
						>
							<img
								src={featuredRecipe.image}
								alt="Fresh ingredients in a fridge"
								className="h-[34rem] w-full rounded-[1.5rem] object-cover"
							/>

							<div className="absolute left-8 top-8 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-muted-900 shadow-lg backdrop-blur">
								Fresh ingredients detected
							</div>

							<div className="absolute bottom-8 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-[1.5rem] border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur-xl">
								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-500">Recipe found</p>
										<h2 className="mt-1 text-2xl font-bold text-muted-900">{featuredRecipe.name}</h2>
									</div>
									<div className="rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600">
										{featuredRecipe.rating}
									</div>
								</div>

								<div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-500">
									<span className="inline-flex items-center gap-2 rounded-full bg-muted-50 px-3 py-1.5 font-semibold">
										<Clock3 className="h-4 w-4 text-brand-500" />
										{featuredRecipe.time}
									</span>
									<span className="inline-flex items-center gap-2 rounded-full bg-muted-50 px-3 py-1.5 font-semibold">
										<UtensilsCrossed className="h-4 w-4 text-brand-500" />
										{featuredRecipe.servings}
									</span>
									<span className="inline-flex items-center gap-2 rounded-full bg-muted-50 px-3 py-1.5 font-semibold">
										<Star className="h-4 w-4 text-brand-500" />
										{featuredRecipe.difficulty}
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				<section id="recipes" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-2xl space-y-3">
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-500">We found recipes just for you.</p>
							<h2 className="text-4xl font-extrabold tracking-tight text-muted-900">Perfect matches</h2>
							<p className="text-base leading-7 text-muted-500">
								Use the filters below to switch between meal types and discover recipes that match what you already have.
							</p>
						</div>

						<div className="flex flex-wrap gap-3">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
										activeCategory === category
											? 'bg-muted-900 text-white shadow-lg shadow-black/10'
											: 'border border-black/10 bg-white/80 text-muted-500 hover:border-brand-200 hover:text-brand-500'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>

					<div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
						{visibleRecipes.map((recipe, index) => (
							<motion.div
								key={recipe.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.08 }}
							>
								<RecipeCard recipe={recipe} />
							</motion.div>
						))}
					</div>
				</section>

				<section id="about" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
					<div className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl lg:grid-cols-[1fr_1.05fr] lg:p-8">
						<div className="space-y-4">
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-500">Featured recipe</p>
							<h2 className="text-4xl font-extrabold tracking-tight text-muted-900">{featuredRecipe.name}</h2>
							<p className="text-base leading-7 text-muted-500">
								{featuredRecipe.note} Build dinner faster with ingredients you already have and a recipe that feels polished.
							</p>

							<div className="flex flex-wrap gap-3 text-sm text-muted-500">
								{featuredIngredients.map((ingredient) => (
									<span key={ingredient} className="rounded-full bg-brand-50 px-4 py-2 font-semibold text-brand-600">
										{ingredient}
									</span>
								))}
							</div>
						</div>

						<div className="space-y-6">
							<img
								src={featuredRecipe.image}
								alt={featuredRecipe.name}
								className="h-[24rem] w-full rounded-[1.5rem] object-cover lg:h-[30rem]"
							/>

							<div className="rounded-[1.5rem] bg-muted-50 p-5">
								<div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-muted-500">
									<span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
										<Clock3 className="h-4 w-4 text-brand-500" />
										{featuredRecipe.time}
									</span>
									<span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
										<BookOpen className="h-4 w-4 text-brand-500" />
										2 servings
									</span>
									<span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
										<Flame className="h-4 w-4 text-brand-500" />
										Easy level
									</span>
								</div>

								<div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
									<div>
										<h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-900">Steps</h3>
										<ol className="mt-3 space-y-3 text-sm leading-6 text-muted-500">
											{featuredRecipe.steps.map((step, index) => (
												<li key={step} className="flex gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
													<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
														{index + 1}
													</span>
													<span>{step}</span>
												</li>
											))}
										</ol>
									</div>

									<div className="space-y-4 rounded-[1.25rem] border border-brand-100 bg-white p-4 shadow-sm">
										<div>
											<p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Quick note</p>
											<p className="mt-2 text-sm leading-6 text-muted-500">{featuredRecipe.tip}</p>
										</div>

										<div>
											<p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-900">Match</p>
											<div className="mt-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
												{featuredRecipe.rating}
											</div>
										</div>

										<div>
											<p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-900">Best with</p>
											<p className="mt-2 text-sm leading-6 text-muted-500">Garlic, soy sauce, and green onions keep the flavor sharp and balanced.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="favorites" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
					<div className="flex items-end justify-between gap-6">
						<div className="space-y-2">
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-500">My favorites.</p>
							<h2 className="text-4xl font-extrabold tracking-tight text-muted-900">Your saved recipes.</h2>
						</div>
						<span className="hidden rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-muted-500 shadow-sm sm:inline-flex">
							Load more
						</span>
					</div>

					<div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
						{recipeCards.slice(0, 3).map((recipe, index) => (
							<motion.div
								key={recipe.name}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.08 }}
							>
								<RecipeCard recipe={recipe} compact />
							</motion.div>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
