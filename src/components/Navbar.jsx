'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from './../../public/img/logo.png'
import menu_active from './../../public/img/menu_active.png'
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()
	//Handles the opening and closing of our nav
	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		<nav className='bg-background h-auto text-primary'>
			<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
				<div>
					<div className='flex items-center justify-between py-3 md:py-5 md:block'>
						<Link href='/'>
							<figure>
								<Image
									draggable='false'
									dragstart='false'
									src={logo}
									alt='Night Bird logo'
									className=' unselectable'
								/>
							</figure>
						</Link>
						<div className='md:hidden'>
							<button
								className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
								onClick={() => setIsOpen(!isOpen)}>
								{isOpen ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6 text-white'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6 text-white'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							isOpen ? 'block md:block' : 'hidden md:block'
						}`}>
						<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
							<li className='text-white' key={'link-home'}>
								<Link
									href='/'
									className={
										pathname == '/' ? 'text-accent' : ''
									}>
									Home
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == `/`
													? `visible`
													: `invisible`
											}`}></Image>
									</figure>
								</Link>
							</li>
							<li className='text-white' key={'link-about'}>
								<Link
									href='/about'
									className={
										pathname == '/about'
											? 'text-accent'
											: ''
									}>
									About us
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == '/about'
													? 'visible'
													: 'invisible'
											}`}></Image>
									</figure>
								</Link>
							</li>
							<li className='text-white' key={'link-gallery'}>
								<Link
									href='/gallery'
									className={
										pathname == '/gallery'
											? 'text-accent'
											: ''
									}>
									Gallery
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == '/gallery'
													? 'visible'
													: 'invisible'
											}`}></Image>
									</figure>
								</Link>
							</li>
							<li className='text-white' key={'link-events'}>
								<Link
									href='/events'
									className={
										pathname == '/events'
											? 'text-accent'
											: ''
									}>
									Events
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == '/events'
													? 'visible'
													: 'invisible'
											}`}></Image>
									</figure>
								</Link>
							</li>
							<li className='text-white' key={'link-blog'}>
								<Link
									href='/blog'
									className={
										pathname == '/blog' ? 'text-accent' : ''
									}>
									Blog
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == '/blog'
													? 'visible'
													: 'invisible'
											}`}></Image>
									</figure>
								</Link>
							</li>
							<li className='text-white' key={'link-members'}>
								<Link
									href='/members'
									className={
										pathname == '/members'
											? 'text-accent'
											: ''
									}>
									Members
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == '/members'
													? 'visible'
													: 'invisible'
											}`}></Image>
									</figure>
								</Link>
							</li>
							<li className='text-white' key={'link-contact'}>
								<Link
									href='/contact'
									className={
										pathname == '/contact'
											? 'text-accent'
											: ''
									}>
									Contact us
									<figure
										className={`flex flex-col justify-center items-start ml-1 ${
											isOpen
												? 'block md:block'
												: 'hidden md:block'
										}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={menu_active}
											alt='Active graphic'
											aria-disabled='true'
											className={`unselectable ${
												pathname == '/contact'
													? 'visible'
													: 'invisible'
											}`}></Image>
									</figure>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='border-t-[1px] border-seperator mt-4' />
		</nav>
		/*<nav className='bg-background h-auto text-primary'>
			<div className='container flex justify-between items-center text-center pt-6'>
			</div>
			<hr className='border-t-[1px] border-seperator mt-4' />
		</nav> */
	)
}

export default Navbar
