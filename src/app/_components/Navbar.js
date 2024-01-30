'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../../public/img/logo.png';
import menu_active from '../../../public/img/menu_active.png';
const Navbar = () => {
	const pathname = usePathname()
	return (
		<nav className="bg-background h-auto text-primary">
			<div className="container flex justify-between items-center text-center pt-6">
				<Link href="/">
					<Image src={logo} alt="Night Bird logo" className=""></Image>
				</Link>
				<ul className="w-1/2 flex justify-between items-center uppercase">
					<li className="">
						<Link href="/" className={pathname == "/" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							Home
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
					<li className="">
						<Link href="/about" className={pathname == "/about" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							About us
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/about" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
					<li className="">
						<Link href="/gallery" className={pathname == "/gallery" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							Gallery
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/gallery" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
					<li className="">
						<Link href="/events" className={pathname == "/events" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							Events
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/events" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
					<li className="">
						<Link href="/blog" className={pathname == "/blog" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							Blog
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/blog" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
					<li className="">
						<Link href="/members" className={pathname == "/members" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							Members
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/members" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
					<li className="">
						<Link href="/contact" className={pathname == "/contact" ? "flex flex-col justify-center items-center text-accent" : "flex flex-col justify-center items-center"}>
							Contact us
							<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/contact" ? "visible" : "invisible"}></Image>
						</Link>
					</li>
				</ul>
			</div>
			<hr className="border-t-[1px] border-seperator mt-4" />
		</nav>
	)
}

export default Navbar;