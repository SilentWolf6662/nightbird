// `app/page.js` is the UI for the `/` URL
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import slider_dot from '../../public/img/banner-slidr-dot.png';
import slider_dot_active from '../../public/img/banner-slider-dot-active.png';
import aboutImg from '../../public/img/about.jpg';
import about1Img from '../../public/img/about1.jpg';
import title_decor from '../../public/img/title_decor.png';

const sliderTimer = (5000 * 1.5);

export default function Home() {
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
			<main className='bg-background text-primary '>
				<article className="flex flex-col justify-center items-center">
					<sect className='relative w-full h-screen'>
						<figure className='opacity-40 w-full h-full object-cover object-center'>
							<Image sizes='100vw' fill alt="Image" src={`/img/banner${page}.jpg`} />
						</figure>
						<figure className='absolute bottom-8 py-3 left-1/2 flex items-baseline -translate-x-[50%]'>
							<Image src={page === 1 ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
							<Image src={page === 2 ? slider_dot_active : slider_dot} alt="banner bar" className="mx-2" />
							<Image src={page === 3 ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
						</figure>
						<div className='absolute top-1/3 left-1/2 transform -translate-x-[50%] text-center'>
							<div className='flex gap-3 font-greatVibes text-7xl justify-center'>
								<h1 className=''>Night</h1> <h1 className='text-accent'>Bird</h1>
							</div>
							<p className='my-5'>
								Anyone can join our club. Just come to our office and fill in a form for membership. 1 year membership is totally free for everyone. So, don’t get late.
								Hurry up and come to the office for joining our club or join now using the join now button
							</p>
							<button className='bg-accent text-primary px-11 py-2 uppercase font-dosis font-bold text-lg'>Join now</button>
						</div>
					</sect>
				</article>
				<article className='h-auto w-full'>
					<section className='container h-vh my-32 flex'>
						<figure className=''>
							<Image src={aboutImg} height={600} alt="about photo" className='' />
						</figure>
						<div className='h-full flex flex-col justify-start items-center'>
							<h2 className='text-3xl font-greatVibes text-center'>About Night Bird</h2>
							<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
								<Image src={title_decor} height={20} alt='Title Decor' />
							</figure>
							<p className='text-center mt-5 mb-5 w-[80%]'>
								The Night Bird is a celebrity nightclub. It is open twenty for seven. So, everyone can join our night club. Just come to our office and in a form for membership. I year membership is totally free for everyone. So don’t get late. Hurry up and come to our office for joining our club. Or you can join our club on the website.
							</p>
							<button className='bg-accent text-primary px-9 py-2 uppercase font-dosis font-bold text-lg'>Read More</button>
						</div>
						<figure className=''>
							<Image src={about1Img} height={600} alt="about photo" className='' />
						</figure>
					</section>
				</article>
			</main>
		</>
	);
}