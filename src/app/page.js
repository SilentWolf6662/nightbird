// `app/page.js` is the UI for the `/` URL
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import slider_dot from '../../public/img/banner-slidr-dot.png';
import slider_dot_active from '../../public/img/banner-slider-dot-active.png';

const sliderTimer = 5000 * 1.5;

export default function Page() {
	const [page, setPage] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
		}, sliderTimer);
		return () => clearInterval(interval);
	}, [])

	return (
		<>
			<main className="bg-background text-primary relative h-screen flex-col justify-center items-center">
				<div className='absolute w-full h-full'>
					<Image className="opacity-40 w-full h-full object-cover object-center" sizes='100vw' fill alt="Image" src={`/img/banner${page}.jpg`} />
					<div className='absolute bottom-8 py-3 left-1/2 flex items-baseline'>
						<Image src={page === 1 ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
						<Image src={page === 2 ? slider_dot_active : slider_dot} alt="banner bar" className="mx-2" />
						<Image src={page === 3 ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
					</div>
					<div className='absolute top-1/3 left-1/2 transform -translate-x-[40%] text-center'>
						<div className='flex gap-3'>
							<h1 className='text-5xl font-bold'>Night</h1> <h1 className='text-5xl font-bold text-accent'>Bird</h1>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}