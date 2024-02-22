'use client'
import Image from 'next/image'

export default function ProfilePicture({ pfp }) {
	//console.log(pfp)
	const image = '/img/img1.png'
    const tempPfp = new Blob([image], { type: 'image/png' })
    const url = URL.createObjectURL(tempPfp)
    //console.log(url, tempPfp)
	const onPfpChange = ({ target }) => {
		//console.log('Pfp changed to:', target.value)
	}
	return (
		<figure>
			<Image
				onChange={onPfpChange}
				className='object-cover w-40 h-40 p-1 rounded-full ring-2 ring-accent/30'
				src={url}
				alt='Bordered avatar'
				width={160}
				height={160}
			/>
		</figure>
	)
}
