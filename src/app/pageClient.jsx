'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import banner1 from './../../public/img/banner1.jpg'
import banner2 from './../../public/img/banner2.jpg'
import banner3 from './../../public/img/banner3.jpg'
import slider_dot_active from './../../public/img/banner-slider-dot-active.png'
import slider_dot from './../../public/img/banner-slidr-dot.png'
const banner = [banner1, banner2, banner3]
const sliderTimer = 5000 * 1.5

let executed = false
export function JoinBtn() {
	const router = useRouter()
	return (
		<button
			className='w-full bg-accent text-primary font-semibold py-2 px-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 uppercase font-dosis text-lg'
			onClick={() => {
				router.push('/members')
				router.refresh()
			}}>
			Join now
		</button>
	)
}
export function ReadMoreBtn() {
	const router = useRouter()
	return (
		<button
			className='w-full bg-accent text-primary font-semibold py-2 px-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 uppercase font-dosis text-lg'
			onClick={() => {
				router.push('/about')
				router.refresh()
			}}>
			Read More
		</button>
	)
}
export default function Slider() {
	/* The line `const [page, setPage] = useState(1);` is using the `useState` hook from React to declare
	a state variable called `page` and a function called `setPage` to update its value. */
	const [page, setPage] = useState(1)

	/* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
	used to set up a timer that changes the value of the `page` state variable every `sliderTimer`
	milliseconds. */
	useEffect(() => {
		const sliderInterval = setInterval(() => {
			setPage(prev => (prev + 1 >= 4 ? 1 : prev + 1))
			//console.log(page)
		}, sliderTimer)

		if (executed)
			return () => {
				clearInterval(sliderInterval)
			}

		executed = true

		return () => {
			clearInterval(sliderInterval)
		}
	}, [])
	return (
		<>
			<figure className='opacity-40 w-full h-full object-cover object-center hidden lg:block'>
				<Image
					sizes='100vw'
					alt='Banner Image'
					src={banner[page - 1]}
					className='h-full w-auto unselectable'
				/>
			</figure>
			<figure className='absolute bottom-8 py-3 left-1/2 hidden lg:flex items-baseline -translate-x-1/2 translate-y-0'>
				{banner.map((_, index) => (
					<button
						key={`banner-dot-${index + 1}`}
						onClick={() => setPage(index + 1)}
						className='mx-1'>
						<Image
							src={
								page === index + 1
									? slider_dot_active
									: slider_dot
							}
							alt='Banner Bar'
							className='h-full w-auto unselectable'
						/>
					</button>
				))}
			</figure>
		</>
	)
}
