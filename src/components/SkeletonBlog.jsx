import { random } from 'lodash'
import { FaUser } from 'react-icons/fa6'

export default function SkeletonBlog(index) {
	return (
		<div
			className='relative flex flex-col justify-around items-center border-2 border-primary/15 shadow-lg h-[600px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite] overflow-hidden'
			id={`${'skeleton-blog'}-${index}`}
			key={`${'skeleton-blog'}-${index}`}>
			<figure
				className={`m-0 p-0 w-fit h-fit`}
				key={`${`skeleton-blog`}-${index}-${random(false)}`}>
				<div className='w-[370px] h-[300px] bg-neutral-600'></div>
			</figure>
			<h3 className='text-[1.3rem] capitalize mt-5 mx-5 text-center'>
				<div className='h-[31.200px] w-[265.875px] bg-neutral-600 shadow'></div>
			</h3>
			<div className='mt-2 mb-6 flex items-center text-primary/80'>
				<FaUser className='mr-2' />
				<div className='h-[24px] w-[67.600px] bg-neutral-600 shadow'></div>
			</div>
			<div className='text-center line-clamp-3 mx-5 text-primary/80'>
				<div className='h-[24px] w-[340px] bg-neutral-600 shadow'></div>
				<div className='h-[24px] w-[340px] bg-neutral-600 shadow my-1'></div>
				<div className='h-[24px] w-[260px] bg-neutral-600 shadow'></div>
			</div>
			<button className='flex justify-center items-center w-full h-[40px] bg-accent text-primary font-semibold py-2 px-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 uppercase mt-6'></button>
		</div>
	)
}
