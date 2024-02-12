// loaders/contentful-loader.js
import { random } from 'lodash'
import Image from 'next/image'
export default async function ContentfulLoader({
	image,
	width,
	height,
	multiplier
}) {
	;('use server')

	// If the image is not available, return null
	if (!image) return null

	let altText = image.description

	if (altText === undefined || altText === null || altText === '')
		altText = image.title

	let imageWidth = width,
		imageHeight = height
	if (!imageWidth || imageWidth == 0)
		imageWidth = image.file.details.image.width
	if (!imageHeight || imageHeight == 0)
		imageHeight = image.file.details.image.height
	if (!multiplier || multiplier == 0)
		multiplier = 1
	imageHeight = imageHeight * multiplier
	imageWidth = imageWidth * multiplier
	imageHeight = Math.round(imageHeight)
	imageWidth = Math.round(imageWidth)
	//console.log(imageWidth, imageHeight)
	return (
		<figure
			className={`m-0 p-0 w-fit h-fit`}
			key={`${image.title}-${random(false)}`}>
			<Image
				draggable='false'
				dragstart='false'
				src={image.file.url.replace('//', 'https://')}
				alt={`${altText}`}
				className='unselectable'
				width={imageWidth}
				height={imageHeight}
			/>
		</figure>
	)
}
