// `app/about/page.jsx` is the UI for the `/about` URL
'use client';
import Image from 'next/image';
import CustomHeader from './../../../components/CustomHeader'
import StockFootage from './../../../components/StockFootage'
import title_decor from './../../../../public/img/title_decor.png'
import aboutImg from './../../../../public/img/about.jpg'

export default function About() {
    return (
		<>
			<CustomHeader
				title={'About'}
				breadcrumb={['Home']}
				breadcrumbActive={'About us'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex flex-col justify-center items-center mb-64'>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							About Night Bird
						</h2>
						<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
							<Image
								draggable='false'
								dragstart='false'
								src={title_decor}
								height={20}
								alt='Title Decor'
								className='unselectable'
							/>
						</figure>
					</section>
					<section className='flex flex-col lg:flex-row justify-center items-start pt-5'>
						<figure className='object-center object-none h-full w-full lg:w-1/4 mr-4'>
							<Image
								draggable='false'
								dragstart='false'
								src={aboutImg}
								height={450}
								alt='About Image'
								className='unselectable'
							/>
						</figure>
						<div className='lg:w-1/2 w-full'>
							<p className='mb-4'>
								The Night Bird is a celebraty nightclub. It is
								open twenty for seven. So everyone can join our
								night club. Just come to our office and in a
								form for membership. I year membership is
								totally free for everyone. So don’t get late.
								Hurry up and come to our office for joining our
								club. Or you can join our club on the website.
								We offer a lot of different types of events.
								Among other, we have famous artist perming in
								the nightclub. You can listen to great singers
								and entertainers. You can enjoy a four-meal
								course served with champagne. And we have some
								very well-known JD’s to make sure you get an
								enjoyfull evening/night.
							</p>
							<p className='my-4'>
								Night Bird is a nightclub. It is open twenty for
								seven. So everyone can join our night club. Just
								come to our office and in a form for membership.
								I year membership is totally free for everyone.
								So don’t get late. Hurry up and come to our
								office for joining our club. Or you can join our
								club on the website. We offer a lot of different
								types of events. Among other, we have famous
								artist perming in the nightclub. You can listen
								to great singers and entertainers. You can enjoy
								a four-meal course served with champagne. And we
								have some very well-known JD’s to make sure you
								get an enjoyfull evening/night.
							</p>
							<p className='my-4'>
								The Night Bird nightclub has started up in New
								York. But we hope very much that we will be able
								to expand to other great cities, so even more
								people get a chance to visit this exceptional
								club.
							</p>
						</div>
					</section>
				</article>
				<article className="container relative h-fit flex flex-col lg:flex-row justify-center items-center pb-96">
                    <section className='justify-center items-center'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Our Videos
						</h2>
						<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
							<Image
								draggable='false'
								dragstart='false'
								src={title_decor}
								height={20}
								alt='Title Decor'
								className='unselectable'
							/>
						</figure>
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
							<StockFootage />
							<StockFootage />
							<StockFootage />
						</div>
					</section>
				</article>
			</main>
		</>
	)
}