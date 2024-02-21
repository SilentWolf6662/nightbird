// Query: { slug: 'slug' }
// Page: src/app/%28content%29/blog/%5Bslug%5D/page.jsx
import Image from 'next/image'
import { FaComments, FaRegThumbsUp, FaUser } from 'react-icons/fa6'
import { FaEye } from 'react-icons/fa'
import CustomHeader from '@/components/CustomHeader'
import title_decor from './../../../../../public/img/title_decor.png'
import CommentCard from '@/components/commentCards'
import {
	getAsset,
	getAuthor,
	getBlogPost,
	getBlogPosts,
	getEntry
} from '@/lib/contentful/client'
import { random, times } from 'lodash'

function formatNumbers(number) {
	if (number >= 1e30) return `${(number / 1e30).toFixed(1)}No`
	else if (number >= 1e27) return `${(number / 1e27).toFixed(1)}Oc`
	else if (number >= 1e24) return `${(number / 1e24).toFixed(1)}Sp`
	else if (number >= 1e21) return `${(number / 1e21).toFixed(1)}Sx`
	else if (number >= 1e18) return `${(number / 1e18).toFixed(1)}Qn`
	else if (number >= 1e15) return `${(number / 1e15).toFixed(1)}Qd`
	else if (number >= 1e12) return `${(number / 1e12).toFixed(1)}T`
	else if (number >= 1e9) return `${(number / 1e9).toFixed(1)}B`
	else if (number >= 1e6) return `${(number / 1e6).toFixed(1)}M`
	else if (number >= 1e3) return `${(number / 1e3).toFixed(1)}k`
	else return `${number.toFixed(0)}`
}

async function fetchAuthorDetails(authorId) {
	const author = await getAuthor(authorId)
	let authorName = `${author.fields.firstName['en-US']} ${author.fields.lastName['en-US']}`
	if (authorName === 'undefined undefined') {
		authorName = 'Anonymous'
	}
	if (authorName === 'Admin Admin') {
		authorName = 'Admin'
	}
	return authorName
}

const BlogDetails = async props => {
	let sortedGroup = 'Popular'

	const blogID = props.params.slug
	const blogs = await getBlogPosts()
	const blog = await getBlogPost(blogID)
	// Fetch the author's username for current blog post
	const entry = await getEntry(blog.sys.id)
	const authorId = entry.fields.author['en-US'].sys.id
	const author = await fetchAuthorDetails(authorId)
	// Assuming that the image field is a link to an Asset
	const imageId = entry.fields.image['en-US'].sys.id
	const image = await getAsset(imageId)
	const imageUrl = image.fields.file['en-US'].url.replace('//', 'https://')
	const imageTitle = image.fields.title['en-US']
	const imageAlt = image.fields.description['en-US']

	const blogsWithAuthors = await Promise.all(
		blogs.map(async blog => {
			const entry = await getEntry(blog.sys.id)
			const authorId = entry.fields.author['en-US'].sys.id
			const author = await fetchAuthorDetails(authorId)
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
				authorUsername: author,
				imageUrl: imageUrl,
				imageTitle: imageTitle,
				imageAlt: imageAlt,
				imageWidth: imageWidth,
				imageHeight: imageHeight
			}
		})
	)

	//console.log('blogsWithAuthors', blogsWithAuthors)

	// sort by likes
	const popularBlogs = blogsWithAuthors.sort((a, b) => {
		const aLikes = a.fields.likes
		const bLikes = b.fields.likes
		if (aLikes > bLikes) return -1
		if (aLikes < bLikes) return 1
		return 0
	})

	// sort by date
	const latestBlogs = blogsWithAuthors.sort((a, b) => {
		const aDate = a.sys.createdAt
		const bDate = b.sys.createdAt
		if (aDate > bDate) return -1
		if (aDate < bDate) return 1
		return 0
	})

	let blogComments = []
	let totalComments = 0

	if (blog.fields.comments) {
		blogComments = blog.fields.comments['en-US']
	}

	if (blogComments && blogComments.length > 0)
		totalComments = blogComments.length

	let comments = await Promise.all(
		blogComments.map(async comment => {
			const commentsID = comment.sys.id
			//console.log('commentsID', commentsID)
			const entryComment = await getEntry(commentsID)
			//console.log('entryComment', entryComment)
			const authorId = entryComment.fields.author['en-US'].sys.id
			const author = await fetchAuthorDetails(authorId)
			//console.log('authorName', authorName)

			return {
				...comment,
				comment: entryComment,
				authorId: authorId,
				author: author
			}
		})
	)

	const markup = { __html: blog.fields.text['en-US'].replace(/\n/g, '<br>') }

	return (
		<>
			<CustomHeader
				title={'Blog'}
				breadcrumb={['Home', 'Blog']}
				breadcrumbActive={'Blog Details View'}
			/>
			<main className='bg-background text-primary'>
				<article className='md:container relative h-fit flex-col justify-center items-center pb-20'>
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
					<section className='justify-start items-start flex flex-col-reverse md:flex-row pt-10'>
						<article className='flex flex-col justify-start items-center mb-6 w-96'>
							<section className='flex gap-4 justify-start items-center mb-6 w-96'>
								<button
									className={`uppercase font-medium w-[76.475px] h-[24px] ${
										sortedGroup == 'Popular'
											? 'text-accent'
											: ''
									}`}
									type='button'
									value={'Popular'}>
									Popular
								</button>
								<button
									className={`uppercase font-medium w-[76.475px] h-[24px] ${
										sortedGroup == 'Latest'
											? 'text-accent'
											: ''
									}`}
									type='button'
									value={'Latest'}>
									Latest
								</button>
							</section>
							<section className='flex flex-col justify-start gap-4 w-96'>
								{popularBlogs &&
								sortedGroup === 'Popular' &&
								popularBlogs.length > 0 ? (
									times(3, i => (
										<article
											className='flex gap-4 justify-start'
											id={`popular-blog-${i + 1}`}
											key={`popular-blog-${i + 1}`}>
											<div className='flex flex-col justify-start my-2 w-32 h-32'>
												<figure
													className={`m-0 p-0 w-fit h-fit`}
													key={`${
														popularBlogs[i]
															.imageTitle
													}-${random(false)}`}>
													<Image
														draggable='false'
														dragstart='false'
														src={
															popularBlogs[i]
																.imageUrl
														}
														alt={`${popularBlogs[i].imageAlt}`}
														className='unselectable'
														width={370}
														height={300}
													/>
												</figure>
											</div>
											<section className='flex flex-col justify-start my-2 gap-3'>
												<h3 className='text-xs font-sans font-semibold capitalize text-left'>
													{
														popularBlogs[i].fields
															.title['en-US']
													}
												</h3>
												<div className='flex justify-between text-xs text-primary/90'>
													<div className='mt-2 mb-6 mr-2 flex items-center'>
														<FaRegThumbsUp className='mr-1' />
														<p className='inline-block font-thin'>
															{`${formatNumbers(
																popularBlogs[i]
																	.fields
																	.likes[
																	'en-US'
																]
															)} likes`}
														</p>
													</div>
													<div className='mt-2 mb-6 ml-2 flex items-center'>
														<FaComments className='mr-1' />
														<p className='inline-block font-thin'>
															{`${formatNumbers(
																popularBlogs[i]
																	.fields
																	.comments
																	? popularBlogs[
																			i
																	  ].fields
																			.comments[
																			'en-US'
																	  ].length
																	: 0
															)} comments`}
														</p>
													</div>
												</div>
											</section>
										</article>
									))
								) : latestBlogs &&
								  sortedGroup === 'Latest' &&
								  latestBlogs.length > 0 ? (
									times(3, i => (
										<article
											className='flex gap-4 justify-start'
											id={`latest-blog-${i + 1}`}
											key={`latest-blog-${i + 1}`}>
											<div className='flex flex-col justify-start my-2 w-32 h-32'>
												<figure
													className={`m-0 p-0 w-fit h-fit`}
													key={`${
														latestBlogs[i]
															.imageTitle
													}-${random(false)}`}>
													<Image
														draggable='false'
														dragstart='false'
														src={
															latestBlogs[i]
																.imageUrl
														}
														alt={`${latestBlogs[i].imageAlt}`}
														className='unselectable'
														width={370}
														height={300}
													/>
												</figure>
											</div>
											<section className='flex flex-col justify-start my-2 gap-3'>
												<h3 className='text-xs font-sans font-semibold capitalize text-left'>
													{
														latestBlogs[i].fields
															.title['en-US']
													}
												</h3>
												<div className='flex justify-between text-xs text-primary/90'>
													<div className='mt-2 mb-6 mr-2 flex items-center'>
														<FaRegThumbsUp className='mr-1' />
														<p className='inline-block font-thin'>
															{`${formatNumbers(
																latestBlogs[i]
																	.fields
																	.likes[
																	'en-US'
																]
															)} likes`}
														</p>
													</div>
													<div className='mt-2 mb-6 ml-2 flex items-center'>
														<FaComments className='mr-1' />
														<p className='inline-block font-thin'>
															{`${formatNumbers(
																latestBlogs[i]
																	.fields
																	.comments
																	? latestBlogs[
																			i
																	  ].fields
																			.comments[
																			'en-US'
																	  ].length
																	: 0
															)} comments`}
														</p>
													</div>
												</div>
											</section>
										</article>
									))
								) : (
									// Optional: Display a message if no blogs are found
									<div
										className='flex flex-row justify-center items-center py-4 mt-4 gap-2 text-primary/80 bg-background border-0 border-t border-primary/10'
										key={0}
										id={0}>
										<div className='flex flex-col ml-5'>
											<p>No blogs</p>
										</div>
									</div>
								)}
							</section>
							<form className='flex gap-4 justify-start items-center mb-6 w-96'>
								<input
									name='search'
									type='text'
									placeholder=''
									className='bg-background border border-primary px-2 py-1 my-1'></input>
								<button
									type='submit'
									className='bg-accent text-primary text-center px-2 py-1 my-1 text-sm uppercase'>
									S u b m i t
								</button>
							</form>
						</article>
						<article
							className='flex flex-col mb-6 ml-10'
							id={blog.sys.id}
							key={blog.sys.id}>
							<figure
								className={`m-0 p-0 w-fit h-fit`}
								key={`${imageTitle}-${random(false)}`}>
								<Image
									draggable='false'
									dragstart='false'
									src={imageUrl}
									alt={`${imageAlt}`}
									className='unselectable'
									width={872}
									height={244}
								/>
							</figure>
							<h3 className='text-2xl capitalize mt-5'>
								{blog.fields.title['en-US']}
							</h3>
							<div className='flex justify-between text-primary/90 text-sm'>
								<div className='mt-2 mb-6 flex items-start md:items-center'>
									<FaUser className='mr-2' />
									<p className='inline-block'>By {author}</p>
								</div>
								<div className='flex gap-4 flex-col md:flex-row'>
									<div className='mt-2 md:mb-6 flex items-center'>
										<FaRegThumbsUp className='mr-1' />
										<p className='inline-block font-thin'>
											{`${formatNumbers(
												blog.fields.likes['en-US']
											)} likes`}
										</p>
									</div>
									<div className='mt-2 md:mb-6 flex items-center'>
										<FaComments className='mr-1' />
										<p className='inline-block font-thin'>
											{`${formatNumbers(
												comments.length
											)} comments`}
										</p>
									</div>
									<div className='mt-2 mb-6 flex items-center'>
										<FaEye className='mr-1' />
										<p className='inline-block font-thin'>
											{`${formatNumbers(
												blog.fields.views['en-US']
											)} views`}
										</p>
									</div>
								</div>
							</div>
							<p
								className='text-start text-primary/90'
								dangerouslySetInnerHTML={markup}></p>
							<div className='text-primary/80 bg-background'>
								<h2 className='text-xl font-greatVibes font-bold text-start uppercase mb-2 mt-20'>
									{`${totalComments} comments`}
								</h2>
								{comments && comments.length > 0 ? (
									comments.map(comment => (
										<CommentCard comment={comment} />
									))
								) : (
									// Optional: Display a message if no comments are found
									<div
										className='flex flex-row justify-center items-center py-4 mt-4 gap-2 text-primary/80 bg-background border-0 border-t border-primary/10'
										key={0}
										id={0}>
										<div className='flex flex-col ml-5'>
											<p>No comments</p>
										</div>
									</div>
								)}
							</div>
							<button className='text-primary font-greatVibes capitalize w-fit h-20 mt-8 text-4xl'>
								Leave a reply
							</button>
						</article>
					</section>
				</article>
			</main>
		</>
	)
}

export default BlogDetails
