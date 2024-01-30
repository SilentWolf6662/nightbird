// `app/page.js` is the UI for the `/` URL
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import slider_dot from '../../public/img/banner-slidr-dot.png';
import slider_dot_active from '../../public/img/banner-slider-dot-active.png';

const sliderTimer = 5000 * 1.5;

export default function Page() {
	/* The line `const [page, setPage] = useState(1);` is using the `useState` hook from React to declare
	a state variable called `page` and a function called `setPage` to update its value. */
	const [page, setPage] = useState(1);

	/* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
	used to set up a timer that changes the value of the `page` state variable every `sliderTimer`
	milliseconds. */
	useEffect(() => {
		const interval = setInterval(() => {
			setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
		}, sliderTimer);
		return () => clearInterval(interval);
	}, [])

	return (
		<>
			<main className="bg-background text-primary relative h-screen flex-col justify-center items-center">
				<article className='absolute w-full h-full'>
					<Image className="opacity-40 w-full h-full object-cover object-center" sizes='100vw' fill alt="Image" src={`/img/banner${page}.jpg`} />
					<div className='absolute bottom-8 py-3 left-1/2 flex items-baseline'>
						<Image src={page === 1 ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
						<Image src={page === 2 ? slider_dot_active : slider_dot} alt="banner bar" className="mx-2" />
						<Image src={page === 3 ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
					</div>
					<section className='absolute top-1/3 left-1/2 transform -translate-x-[50%] text-center'>
						<div className='flex gap-3 font-greatVibes text-7xl justify-center'>
							<h1 className=''>Night</h1> <h1 className='text-accent'>Bird</h1>
						</div>
						<p>
							Anyone can join our club. Just come to our office and fill in a form for membership. 1 year membership is totally free for everyone. So, don’t get late. 
							Hurry up and come to the office for joining our club or join now using the join now button
						</p>
						<button className='bg-accent text-primary px-8 py-3 uppercase'>Join now</button>
					</section>
				</article>
			</main>
		</>
	);
}