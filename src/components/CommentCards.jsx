import Image from 'next/image'
import ContentfulLoader from '../loaders/ContentfulLoader'
import { FaReplyAll } from 'react-icons/fa6'
export default function CommentCard({ comment }) {
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

	const id = comment.sys.id
	const image = comment.fields.author.fields.profilePicture.fields
	const author = comment.fields.author.fields.username
	const postDate = comment.sys.createdAt
	const formattedPostDate = formatDate(postDate)
	const context = comment.fields.comment
	//console.log(image.file.details.image)
	return (
		<div
			className='flex flex-row justify-center items-center pt-4 mt-4 gap-2 text-primary/80 bg-background border-0 border-t border-primary/10'
			key={id}
			id={id}>
			<ContentfulLoader
				image={image}
				width={0}
				height={0}
				multiplier={3}
			/>

			<div className='flex flex-col ml-5'>
				<div className='flex justify-between mb-2'>
					<h4 className='font-bold uppercase'>{`${author}`}</h4>
					<h5 className='uppercase'>{`Posted on: ${formattedPostDate}`}</h5>
				</div>
				<p>{context}</p>
				<button className='mt-2 mb-6 flex items-center justify-start'>
					<FaReplyAll className='mr-1' />
					<p className='font-thin'>{`Reply`}</p>
				</button>
			</div>
		</div>
	)
}
