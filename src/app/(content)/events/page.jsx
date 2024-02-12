// `app/events/page.jsx` is the UI for the `/events` URL
import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import CustomHeader from './../../../components/CustomHeader'
import EventTimer from './../../../components/Timers'
import title_decor from './../../../../public/img/title_decor.png'
import eventImg1 from './../../../../public/img/event1.jpg'
import eventImg2 from './../../../../public/img/event2.jpg'
import eventImg3 from './../../../../public/img/event3.jpg'
import { getEvents } from '@/lib/contentful/functions'
import ContentfulLoader from '../../../loaders/ContentfulLoader'
export default async function Events() {
	function getCurDate(date) {
		let yourDate = new Date(date)

		if (isNaN(yourDate.getTime())) {
			return '' // Return an empty string if the date is invalid
		}

		const offset = yourDate.getTimezoneOffset()
		yourDate = new Date(yourDate.getTime() - offset * 60 * 1000)
		return yourDate.toISOString().split('T')[0]
	}
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
		let timeZone = dateToFormat.getTimezoneOffset() / 60
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
	// Fetch the blogs from Contentful
	const events = await getEvents()
	//console.log(events)
	return (
		<>
			<CustomHeader
				title={'Events'}
				breadcrumb={['Home']}
				breadcrumbActive={'Events'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Night Bird’s upcoming Events
						</h2>
						<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
							<Image
								draggable='false'
								dragstart='false'
								src={title_decor}
								height={20}
								alt='Title Decor'
								className='unselectable '
							/>
						</figure>
					</section>
					{events && events.length > 0 ? (
						events.map((event, index) => (
							<section
								className={`flex  ${
									index % 2 ? 'flex-row-reverse' : 'flex-row'
								} justify-evenly mt-10`}
								id={`${event.sys.id}`}
								key={`${event.sys.id}`}>
								<div className='w-1/2'>
									<ContentfulLoader
										image={event.fields.image.fields}
										width={628}
										height={0}
										multiplier={1}
									/>
								</div>
								<div
									className={`flex flex-col justify-center items-start ${
										index % 2 ? `mr-10` : `ml-10`
									} w-1/2`}>
									<h3 className='uppercase font-bold'>
										{`${event.fields.title}`}
									</h3>
									<div className='text-primary/80 text-center flex justify-center items-baseline'>
										<FaCalendarAlt className='mr-1 inline-block' />
										<p className='inline'>
											{`${formatDate(
												event.fields.dateTime
											)}`}
										</p>
									</div>
									<p className='text-primary/80 mb-2 mt-4'>
										{`${event.fields.description}`}
									</p>
									<div className='font-greatVibes'>
										<p className='inline mr-4'>
											{`$ ${event.fields.price}`}
										</p>
										<p className='inline'>
											{`Starts at: ${formatTimeAMPM(
												event.fields.dateTime
											)}`}
										</p>
									</div>
									<EventTimer
										eventDate={`${event.fields.dateTime}`}
									/>
								</div>
							</section>
						))
					) : (
						// Optional: Display a message if no events are found
						<section
							className={`flex flex-row justify-evenly mt-10`}>
							<div className=''>
								<p>No events found.</p>
							</div>
						</section>
					)}
				</article>
			</main>
		</>
	)
}
