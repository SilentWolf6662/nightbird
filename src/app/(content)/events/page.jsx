// `app/events/page.jsx` is the UI for the `/events` URL
import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import CustomHeader from './../../../components/CustomHeader'
import EventTimer from './../../../components/Timers'
import title_decor from './../../../../public/img/title_decor.png'
import { getAsset, getEntry, getEvents } from '@/lib/contentful/client'
import { random } from 'lodash'
import Event from './../../event'
export default async function Events() {
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
	//console.log(events)
	return (
		<>
			<CustomHeader
				title={'Events'}
				breadcrumb={['Home']}
				breadcrumbActive={'Events'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center'>
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
				</article>
				<article className='container relative h-fit flex flex-col justify-center items-center pb-96'>
					{eventsWithData && eventsWithData.length > 0 ? (
						eventsWithData.map((event, index) => (
							<section
								className={`flex flex-col md:flex-row ${
									index % 2
										? 'md:flex-row-reverse'
										: 'md:flex-row'
								} justify-evenly mt-10 w-full`}
								id={`${event.sys.id}`}
								key={`${event.sys.id}`}>
								<div className='w-full md:w-1/2'>
									<figure
										className={`m-0 p-0 w-fit h-fit`}
										key={`${event.imageTitle}-${random(
											false
										)}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={event.imageUrl}
											alt={`${event.imageAlt}`}
											className='unselectable'
											width={628}
											height={372}
										/>
									</figure>
								</div>
								<div
									className={`flex flex-col justify-center items-start ${
										index % 2
											? `mr-0 md:mr-10`
											: `ml-0 md:ml-10`
									} w-full md:w-1/2`}>
									<h3 className='uppercase font-bold'>
										{event.fields.title['en-US']}
									</h3>
									<div className='text-primary/80 text-center flex justify-center items-baseline'>
										<FaCalendarAlt className='mr-1 inline-block' />
										<p className='inline'>
											{`${formatDate(
												event.fields.dateTime['en-US']
											)}`}
										</p>
									</div>
									<Event content={event.description}></Event>
									<div className='font-greatVibes'>
										<p className='inline mr-4'>
											{`$ ${event.fields.price['en-US']}`}
										</p>
										<p className='inline'>
											{`Starts at: ${formatTimeAMPM(
												event.fields.dateTime['en-US']
											)}`}
										</p>
									</div>
									<EventTimer
										eventDate={`${event.fields.dateTime['en-US']}`}
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
