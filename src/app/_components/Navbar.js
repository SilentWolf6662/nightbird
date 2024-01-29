'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
	const pathname = usePathname()
	return (
		<nav className="bg-background h-28 text-primary">
			<div className="container flex justify-between items-center text-center">
				<img src="img/logo.png" alt="Night Bird logo" className=""></img>
				<ul className="w-1/2 flex justify-between items-center">
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/" ? "text-accent" : ""}>
							Home
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></img>
						</Link>
					</li>
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/about" ? "text-accent" : ""}>
							About us
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/about" ? "visible" : "invisible"}></img>
						</Link>
					</li>
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/gallery" ? "text-accent" : ""}>
							Gallery
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/gallery" ? "visible" : "invisible"}></img>
						</Link>
					</li>
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/" ? "text-accent" : ""}>
							Events
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></img>
						</Link>
					</li>
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/" ? "text-accent" : ""}>
							Blog
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></img>
						</Link>
					</li>
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/" ? "text-accent" : ""}>
							Members
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></img>
						</Link>
					</li>
					<li className="flex flex-col justify-center items-center">
						<Link href="/" className={pathname == "/" ? "text-accent" : ""}>
							Contact us
							<img src="/img/menu_active.png" alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></img>
						</Link>
					</li>
				</ul>
			</div>
			<hr className="bg-seperator border-none h-1p" />
		</nav>
	)
}

export default Navbar;