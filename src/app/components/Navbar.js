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
					<figure>
						<Image src={logo} alt="Night Bird logo" className="" />
					</figure>
				</Link>
				<ul className="w-1/2 flex justify-between items-center uppercase">
					<li className="">
						<Link href="/" className={pathname == "/" ? "text-accent" : ""}>
							Home
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
					<li className="">
						<Link href="/about" className={pathname == "/about" ? "text-accent" : ""}>
							About us
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/about" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
					<li className="">
						<Link href="/gallery" className={pathname == "/gallery" ? "text-accent" : ""}>
							Gallery
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/gallery" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
					<li className="">
						<Link href="/events" className={pathname == "/events" ? "text-accent" : ""}>
							Events
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/events" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
					<li className="">
						<Link href="/blog" className={pathname == "/blog" ? "text-accent" : ""}>
							Blog
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/blog" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
					<li className="">
						<Link href="/members" className={pathname == "/members" ? "text-accent" : ""}>
							Members
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/members" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
					<li className="">
						<Link href="/contact" className={pathname == "/contact" ? "text-accent" : ""}>
							Contact us
							<figure className='flex flex-col justify-center items-center'>
								<Image src={menu_active} alt="Active graphic" aria-disabled="true" className={pathname == "/contact" ? "visible" : "invisible"}></Image>
							</figure>
						</Link>
					</li>
				</ul>
			</div>
			<hr className="border-t-[1px] border-seperator mt-4" />
		</nav>
	)
}

export default Navbar;