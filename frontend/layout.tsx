import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	style: 'italic',
});

export const metadata: Metadata = {
	title: 'FridgeChef',
	description: 'Create recipes from your fridge ingredients',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${playfair.variable}`}>
			<body className="antialiased">
				<Navbar />
				<main className="container">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
