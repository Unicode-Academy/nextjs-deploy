import { Inter } from 'next/font/google';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Blogs',
	description: 'Demo Next.js Blogs',
};

export default function RootLayout({ children }) {
	return (
		<html lang='vi'>
			<body className={font.className}>
				<div class='container'>{children}</div>
			</body>
		</html>
	);
}
