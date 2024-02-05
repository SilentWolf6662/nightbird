// `app/page.js` is the UI for the `/` URL
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCalendarAlt } from "react-icons/fa";
import slider_dot from '../../public/img/banner-slidr-dot.png';
import slider_dot_active from '../../public/img/banner-slider-dot-active.png';
import aboutImg from '../../public/img/about.jpg';
import about1Img from '../../public/img/about1.jpg';
import title_decor from '../../public/img/title_decor.png';
import eventImg from '../../public/img/event1.jpg';
import banner1 from '../../public/img/banner1.jpg';
import banner2 from '../../public/img/banner2.jpg';
import banner3 from '../../public/img/banner3.jpg';

const banner = [banner1, banner2, banner3];
const sliderTimer = (5000 * 1.5);

let executed = false;
export default function Home() {
	/* The line `const [page, setPage] = useState(1);` is using the `useState` hook from React to declare
	a state variable called `page` and a function called `setPage` to update its value. */
	const [page, setPage] = useState(1);

	/* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
	used to set up a timer that changes the value of the `page` state variable every `sliderTimer`
	milliseconds. */
	useEffect(() => {
		const sliderInterval = setInterval(() => {
			setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
		}, sliderTimer);

		if (executed) return () => {
			clearInterval(sliderInterval);
		}

		executed = true;

		return () => {
			clearInterval(sliderInterval);
		};
	}, [])

	return (
		<>
			<main className='bg-background text-primary'>
				<article className="flex flex-col justify-center items-center">
					<section className='relative w-full h-full'>
						<figure className='opacity-40 w-full h-full object-cover object-center'>
							<Image sizes='100vw' alt="Banner Image" src={banner[page-1]} className='h-full' />
						</figure>
						<figure className='absolute bottom-8 py-3 left-1/2 flex items-baseline -translate-x-1/2'>
							{banner.map((_, index) => (
								<button key={`banner-dot-${index + 1}`} onClick={() => setPage(index + 1)} className='mx-1'>
									<Image src={page === (index + 1) ? slider_dot_active : slider_dot} alt="banner bar" className="h-full" />
								</button>
							))}
						</figure>
						<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center'>
							<div className='flex gap-3 font-greatVibes text-7xl justify-center'>
								<h1 className=''>Night</h1> <h1 className='text-accent'>Bird</h1>
							</div>
							<p className='my-5'>
								Anyone can join our club. Just come to our office and fill in a form for membership. 1 year membership is totally free for everyone. So, don’t get late.
								Hurry up and come to the office for joining our club or join now using the join now button
							</p>
							<button className='bg-accent text-primary px-11 py-2 uppercase font-dosis font-semibold text-lg'>Join now</button>
						</div>
					</section>
				</article>
				<article className='h-auto w-full'>
					<section className='container h-fit mt-20 flex'>
						<figure className='h-[206px]'>
							<Image src={aboutImg} height={900} alt="about photo" className='' />
						</figure>
						<div className='h-fit flex flex-col justify-start items-center'>
							<h2 className='text-4xl font-greatVibes text-center capitalize'>About Night Bird</h2>
							<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
								<Image src={title_decor} height={20} alt='Title Decor' />
							</figure>
							<p className='text-center mt-5 mb-2 w-11/12'>
								The Night Bird is a celebrity nightclub. It is open twenty for seven. So everyone can join our night club. Just come to our office and in a form for membership. I year membership is totally free for everyone. So don’t get late. Hurry up and come to our office for joining our club. Or you can join our club on the website.
							</p>
							<p className='text-center mt-2 mb-5 w-11/12'>
								We offer a lot of different types of events. Among other, we have famous artist perming in the nightclub. You can listen to great singers and entertainers. You can enjoy a four-meal course served with champagne. And we have some very well-known DJ’s to make sure you get an enjoyfull evening/night.
							</p>
							<button className='bg-accent text-primary px-9 py-2 uppercase font-dosis font-semibold text-lg'>Read More</button>
						</div>
						<figure className='h-[206px]'>
							<Image src={about1Img} height={900} alt="about photo" className='' />
						</figure>
					</section>
					<section className='container h-fit mt-40 flex justify-center items-center pb-20'>
						<div className='h-fit flex flex-col justify-center items-center mb-40'>
							<div className='justify-center items-center'>
								<h2 className='text-4xl font-greatVibes text-center capitalize'>Upcoming Event’s</h2>
								<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
									<Image src={title_decor} height={20} alt='Title Decor' />
								</figure>
							</div>

							<div className='flex flex-row mt-10'>
								<figure className=''>
									<Image src={eventImg} height={350} alt="event photo" className='' />
								</figure>
								<div className='flex flex-col justify-start items-start ml-10 w-1/2'>
									<h3 className='uppercase font-bold'>Refresh your mind with Night Bird</h3>
									<div className='text-primary/80 text-center flex justify-center items-baseline'>
										<FaCalendarAlt className="mr-1 inline-block" />
										<p className='inline'>26. October 2017</p>
									</div>
									<p className='text-primary/80 mb-2 mt-4'>
										This event will be held on the twenty sixth of October 2017. It starts at 9:00 p.m. We will here give you an evening with your favorite songs. That is if you are in your nostalgic corner. Because we will be listening to some very famous evergreens. You have here great opportunity for experience some of our best artists performing at their best in giving you a great experience. You will as always be able to order a great four-meal course, which you can enjoy while you are listening.
									</p>
									<div className='font-greatVibes'>
										<p className='inline mr-4'>
											$ 210
										</p>
										<p className='inline'>
											Starts at: 09:00 p.m.
										</p>
									</div>
									<div className='flex gap-16 mt-5 text-center'>
										<div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
											<p className='font-greatVibes font-semibold' id='event1-cd-days'>
												00
											</p>
											<p className='font-arial'>
												Days
											</p>
										</div>
										<div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
											<p className='font-greatVibes font-semibold' id='event1-cd-hours'>
												00
											</p>
											<p className='font-arial'>
												Hours
											</p>
										</div>
										<div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
											<p className='font-greatVibes font-semibold' id='event1-cd-mins'>
												00
											</p>
											<p className='font-arial'>
												Mins
											</p>
										</div>
										<div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
											<p className='font-greatVibes font-semibold' id='event1-cd-secs'>
												00
											</p>
											<p className='font-arial'>
												Secs
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</article>
			</main>
		</>
	);
}