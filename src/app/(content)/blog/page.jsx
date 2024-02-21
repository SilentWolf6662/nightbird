// `app/about/page.jsx` is the UI for the `/about` URL
import Image from 'next/image'
import { FaUser } from 'react-icons/fa6'
import CustomHeader from '@/components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png'
import {
	getAsset,
	getAuthor,
	getBlogPosts,
	getEntry
} from '@/lib/contentful/client'
import { random } from 'lodash'
export default async function Blogs() {
	// Fetch the blogs from Contentful
	const blogs = await getBlogPosts()

	// Fetch the author's username for each blog post
	const blogsWithAuthors = await Promise.all(
		blogs.map(async blog => {
			const entry = await getEntry(blog.sys.id)
			const authorId = entry.fields.author['en-US'].sys.id
			const author = await getAuthor(authorId)
			let authorName = `${author.fields.firstName['en-US']} ${author.fields.lastName['en-US']}` // Access the 'en-US' locale directly
			if (authorName === 'undefined undefined') {
				authorName = 'Anonymous'
			}
			if (authorName === 'Admin Admin') {
				authorName = 'Admin'
			}
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
			return {
				...blog,
				authorUsername: authorName,
				imageUrl: imageUrl,
				imageTitle: imageTitle,
				imageAlt: imageAlt,
				imageWidth: imageWidth,
				imageHeight: imageHeight
			}
		})
	)

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
					<section className='justify-center items-center grid grid-cols-1 md:grid-cols-3 gap-10 pt-10'>
						{blogsWithAuthors && blogsWithAuthors.length > 0 ? (
							blogsWithAuthors.map((blog, _index) => (
								<div
									className='flex flex-col justify-around items-center border-2 border-primary/15 shadow-lg h-[600px]'
									id={`${blog.sys.id}`}
									key={`${blog.sys.id}`}>
									<figure
										className={`m-0 p-0 w-fit h-fit`}
										key={`${blog.imageTitle}-${random(
											false
										)}`}>
										<Image
											draggable='false'
											dragstart='false'
											src={blog.imageUrl}
											alt={`${blog.imageAlt}`}
											className='unselectable'
											width={370}
											height={300}
										/>
									</figure>
									<h3 className='text-[1.3rem] capitalize mt-5 mx-5 text-center'>
										{blog.fields.title['en-US']}
									</h3>
									<div className='mt-2 mb-6 flex items-center text-primary/80'>
										<FaUser className='mr-2' />
										<p className='text-base text-center'>
											By {blog.authorUsername}
										</p>
									</div>
									<p className='text-center line-clamp-3 mx-5 text-primary/80'>
										{blog.fields.text['en-US']}
									</p>
									<button className='w-full bg-accent text-primary font-semibold py-2 px-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 uppercase mt-6'>
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
