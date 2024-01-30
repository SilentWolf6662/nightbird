import { Arial } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata = {
	title: "NightBird",
	description: "NightBird is a nightclub.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='font-arial'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
