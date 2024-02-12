// `app/about/page.jsx` is the UI for the `/about` URL
import Image from 'next/image'
import { createClient } from 'contentful'
import { FaUser } from 'react-icons/fa6'
import CustomHeader from './../../../components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png'
import ContentfulLoader from '../../../loaders/ContentfulLoader'
import { getBlogPosts } from '../../../lib/contentful/functions'

export default async function Blogs() {
	// Fetch the blogs from Contentful
	const blogs = await getBlogPosts()
	// Render the blogs
	return (
		<>
			<CustomHeader
				title={'Blog'}
				breadcrumb={['Home', 'Blog']}
				breadcrumbActive={'Blog Grid View'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Night Bird’s Blog
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
					<section className='justify-center items-center grid grid-cols-3 gap-10 pt-10'>
						{blogs && blogs.length > 0 ? (
							blogs.map((blog, _) => (
								<div
									className='flex flex-col justify-around items-center border-2 border-primary/15 shadow-lg h-[600px]'
									id={`${blog.sys.id}`}
									key={`${blog.sys.id}`}>
									<ContentfulLoader
										image={blog.fields.image.fields}
									/>
									<h3 className='text-[1.3rem] capitalize mt-5 mx-5 text-center'>
										{blog.fields.title}
									</h3>
									<div className='mt-2 mb-6 flex items-center text-primary/80'>
										<FaUser className='mr-2' />
										<p className='text-base text-center'>
											{`By ${blog.fields.author.fields.username}`}
										</p>
									</div>
									<p className='text-center line-clamp-3 mx-5 text-primary/80'>
										{blog.fields.text}
									</p>
									<button className='bg-accent text-primary py-2 px-4 uppercase mt-6'>
										<a href={`/blog/${blog.sys.id}`}>
											Read More
										</a>
									</button>
								</div>
							))
						) : (
							// Optional: Display a message if no blogs are found
							<p>No blogs found.</p>
						)}
					</section>
				</article>
			</main>
		</>
	)
}
