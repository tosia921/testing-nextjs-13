import './global.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<header className="bg-blue-300 h-24 flex justify-center items-center">
					<Link href="/">HomePage</Link>
					<Link href="/list">List Page</Link>
				</header>
				<main className="max-w-6xl mx-auto  min-h-[calc(100vh-12rem)] flex justify-center">{children}</main>
				<footer className="bg-blue-300 h-24 flex justify-center items-center">This is footer</footer>
			</body>
		</html>
	);
}
