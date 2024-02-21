// `app/page.jsx` is the UI for the `/` URL

import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import aboutImg from './../../public/img/about.jpg'
import about1Img from './../../public/img/about1.jpg'
import title_decor from './../../public/img/title_decor.png'

import Slider, { ReadMoreBtn, JoinBtn } from './pageClient'
import Event from './event'
import EventTimer from '@/components/Timers'
import { getAsset, getEntry, getEvents } from '@/lib/contentful/client'
const datesGreaterOrEquels = (d1, d2) => {
	let date1 = new Date(d1).getTime(),
		date2 = new Date(d2).getTime()

	if (date1 < date2) {
		return false
	} else {
		return true
	}
}
export default async function Home() {
	function formatDate(date) {
		let dateToFormat = new Date(date),
			dateString = '',
			month = `${dateToFormat.getMonth() + 1}`,
			day = `${dateToFormat.getDate()}`,
			year = dateToFormat.getFullYear(),
			monthName = dateToFormat.toLocaleString('default', {
				month: 'long'
			})

		if (month.length < 2) month = `0${month}`
		if (day.length < 2) day = `0${day}`

		dateString = `${day}. ${monthName} ${year}`

		return dateString
	}
	function formatTimeAMPM(date) {
		let dateToFormat = new Date(date)
		let time = dateToFormat.toLocaleString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true
		})

		let hours = dateToFormat.getHours() - 1
		let minutes = dateToFormat.getMinutes()
		let ampm = hours >= 12 ? 'pm' : 'am'
		hours = hours % 12
		hours = hours ? hours : 12 // the hour '0' should be '12'
		minutes = minutes < 10 ? `0${minutes}` : minutes
		let strTime = `${hours}:${minutes} ${ampm}`
		strTime = time.replace('PM', 'pm').replace('AM', 'am')
		//console.log(strTime, date, timeZone)
		return strTime
	}

	// Fetch the events from Contentful
	const events = await getEvents()

	// Fetch the data for each event
	const eventsWithData = await Promise.all(
		events.map(async event => {
			const entry = await getEntry(event.sys.id)

			//console.log('entry', entry)

			// Assuming that the image field is a link to an Asset
			const imageId = entry.fields.image['en-US'].sys.id
			const image = await getAsset(imageId)
			const imageUrl = image.fields.file['en-US'].url.replace(
				'//',
				'https://'
			)
			const imageWidth = image.fields.file['en-US'].details.image.width
			const imageHeight = image.fields.file['en-US'].details.image.height
			const imageTitle = image.fields.title['en-US']
			const imageAlt = image.fields.description['en-US']
			const description = entry.fields.description['en-US'].replace(
				/\n/g,
				'<br>'
			)
			return {
				...event,
				imageUrl: imageUrl,
				imageTitle: imageTitle,
				imageAlt: imageAlt,
				imageWidth: imageWidth,
				imageHeight: imageHeight,
				description: description
			}
		})
	)
	// sort by date
	const eventsSortedByDate = eventsWithData.sort(async (a, b) => {
		const aDate = a.fields.dateTime['en-US']
		const bDate = b.fields.dateTime['en-US']
		if (aDate > bDate) return -1
		if (aDate < bDate) return 1
		return 0
	})

	return (
		<>
			<main className='bg-background text-primary'>
				<article className='flex flex-col justify-center items-center'>
					<section className='relative w-full h-full'>
						<Slider />
						<div className='lg:absolute top-1/3 left-1/2 transform lg:-translate-x-1/2 text-center'>
							<div className='flex gap-3 font-greatVibes text-7xl justify-center mt-10 lg:mt-0'>
								<h1 className=''>Night</h1>{' '}
								<h1 className='text-accent'>Bird</h1>
							</div>
							<p className='my-5'>
								Anyone can join our club. Just come to our
								office and fill in a form for membership. 1 year
								membership is totally free for everyone. So,
								don’t get late. Hurry up and come to the office
								for joining our club or join now using the join
								now button
							</p>
							<JoinBtn />
						</div>
					</section>
				</article>
				<article className='h-auto w-full'>
					<section
						className='lg:container h-fit mt-20 flex'
						id='about'>
						<figure className='h-[206px] hidden lg:block'>
							<Image
								src={aboutImg}
								height={900}
								alt='about photo'
								className='unselectable'
							/>
						</figure>
						<div className='h-fit flex flex-col justify-start items-center'>
							<h2 className='text-4xl font-greatVibes text-center capitalize'>
								About Night Bird
							</h2>
							<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
								<Image
									src={title_decor}
									height={20}
									alt='Title Decor'
									className='unselectable'
								/>
							</figure>
							<figure className='h-[206px] block lg:hidden mt-10 mb-32'>
								<Image
									src={aboutImg}
									height={306}
									alt='about photo'
									className='unselectable'
								/>
							</figure>
							<p className='text-left lg:text-center mt-5 mb-2 w-full lg:w-11/12'>
								The Night Bird is a celebrity nightclub. It is
								open twenty for seven. So everyone can join our
								night club. Just come to our office and in a
								form for membership. I year membership is
								totally free for everyone. So don’t get late.
								Hurry up and come to our office for joining our
								club. Or you can join our club on the website.
							</p>
							<p className='text-left lg:text-center mt-2 mb-5 w-full lg:w-11/12'>
								We offer a lot of different types of events.
								Among other, we have famous artist perming in
								the nightclub. You can listen to great singers
								and entertainers. You can enjoy a four-meal
								course served with champagne. And we have some
								very well-known DJ’s to make sure you get an
								enjoyfull evening/night.
							</p>
							<ReadMoreBtn />
						</div>
						<figure className='h-[206px] hidden lg:block'>
							<Image
								src={about1Img}
								height={900}
								alt='about photo'
								className='unselectable'
							/>
						</figure>
					</section>
					<section className='container h-fit mt-40 flex justify-center items-center pb-20'>
						<div className='h-fit flex flex-col justify-center items-center mb-40'>
							<div className='justify-center items-center'>
								<h2 className='text-4xl font-greatVibes text-center capitalize'>
									Upcoming Event’s
								</h2>
								<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
									<Image
										src={title_decor}
										height={20}
										alt='Title Decor'
										className='unselectable'
									/>
								</figure>
							</div>

							{eventsSortedByDate &&
							eventsSortedByDate.length > 0 ? (
								eventsSortedByDate.map((event, index) =>
									event &&
									datesGreaterOrEquels(
										event.fields.dateTime['en-US'],
										new Date()
									) ? (
										<div
											key={`${event.fields.title[
												'en-US'
											].replace(' ', '-')}-${index}`}
											className='flex flex-col lg:flex-row mt-10 justify-center lg:justify-start items-center lg:items-start'>
											<figure className=''>
												<Image
													src={event.imageUrl}
													width={570}
													height={500}
													alt='event photo'
													className='unselectable'
												/>
											</figure>
											<div className='flex flex-col justify-center lg:justify-start items-center lg:items-start ml-10 lg:w-1/2 w-full'>
												<h3 className='uppercase font-bold'>
													{
														event.fields.title[
															'en-US'
														]
													}
												</h3>
												<div className='text-primary/80 text-center flex justify-center items-baseline'>
													<FaCalendarAlt className='mr-1 inline-block' />
													<p className='inline'>
														{`${formatDate(
															event.fields
																.dateTime[
																'en-US'
															]
														)}`}
													</p>
												</div>
												<div className='text-primary/80 mb-2 mt-4'>
													<Event
														content={
															event.description
														}></Event>
												</div>
												<div className='font-greatVibes'>
													<p className='inline mr-4'>
														{`$ ${event.fields.price['en-US']}`}
													</p>
													<p className='inline'>
														{`Starts at: ${formatTimeAMPM(
															event.fields
																.dateTime[
																'en-US'
															]
														)}`}
													</p>
												</div>
												<EventTimer
													eventDate={`${event.fields.dateTime['en-US']}`}
												/>
											</div>
										</div>
									) : (
										<div
											key={`no-${event.fields.title[
												'en-US'
											].replace(
												' ',
												'-'
											)}-${index}`}></div>
									)
								)
							) : (
								// Optional: Display a message if no events are found
								<section
									className={`flex flex-row justify-evenly mt-10`}>
									<div className=''>
										<p>No upcoming event’s found.</p>
									</div>
								</section>
							)}
						</div>
					</section>
				</article>
			</main>
		</>
	)
}
