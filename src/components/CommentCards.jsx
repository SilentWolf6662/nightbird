import { getAsset, getEntry } from '@/lib/contentful/client'
import { random } from 'lodash'
import Image from 'next/image'
import { FaReplyAll } from 'react-icons/fa6'
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
export default async function CommentCard({ comment }) {
	const id = comment.sys.id
	const author = comment.author
	const postDate = comment.comment.sys.createdAt
	//console.log('postDate', postDate)
	//console.log('comment', comment)
	const formattedPostDate = formatDate(postDate)
	const commentText = comment.comment.fields.comment['en-US']
	const authorId = comment.authorId
	const authorImage = await getEntry(authorId)
	const imageId = authorImage.fields.profilePicture['en-US'].sys.id
	const image = await getAsset(imageId)
	//console.log('image', image)
	const imageUrl = image.fields.file['en-US'].url.replace('//', 'https://')
	const imageTitle = image.fields.title['en-US']
	const imageAlt = `${author}'s Profile Picture`
	//console.log('imageUrl', imageUrl)
	//console.log('imageTitle', imageTitle)
	//console.log('imageAlt', imageAlt)
	return (
		<div
			className='flex flex-row justify-center items-center pt-4 mt-4 gap-2 text-primary/80 bg-background border-0 border-t border-primary/10'
			key={id}
			id={id}>
			<figure
				className={`m-0 p-0 w-fit h-fit`}
				key={`${imageTitle}-${random(false)}`}>
				<Image
					draggable='false'
					dragstart='false'
					src={imageUrl}
					alt={`${imageAlt}`}
					className='unselectable'
					width={70}
					height={70}
				/>
			</figure>

			<div className='flex flex-col ml-5'>
				<div className='flex flex-col md:flex-row md:justify-between mb-2'>
					<h4 className='font-bold uppercase'>{`${author}`}</h4>
					<h5 className='uppercase'>{`Posted on: ${formattedPostDate}`}</h5>
				</div>
				<p>{commentText}</p>
				<button className='mt-2 mb-6 flex items-center justify-start'>
					<FaReplyAll className='mr-1' />
					<p className='font-thin'>{`Reply`}</p>
				</button>
			</div>
		</div>
	)
}
