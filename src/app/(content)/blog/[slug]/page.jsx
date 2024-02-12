// Query: slug=2r3ywaTeZ3yLQxNluHbhAv
import {
	getBlogPosts,
	getBlogPost
} from './../../../../lib/contentful/functions'
import Image from 'next/image'
import { FaComments, FaRegThumbsUp, FaUser } from 'react-icons/fa6'
import { FaEye } from 'react-icons/fa'
import { times } from 'lodash'
import CustomHeader from './../../../../components/CustomHeader'
import title_decor from './../../../../../public/img/title_decor.png'
import event1 from './../../../../../public/img/event1.jpg'
import ContentfulLoader from '../../../../loaders/ContentfulLoader'
import CommentCard from './../../../..//components/commentCards'
const BlogDetails = async props => {
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
		else return number.toString()
	}

	let sortedGroup = 'Popular'

	function sortGroup(group) {
		sortedGroup = group
	}

	let blogID = props.params.slug

	// Fetch the blogs from Contentful
	const blog = await getBlogPost(blogID)
	const blogs = await getBlogPosts()

	if (!blog) {
		return null
	}

	const { likes, comments, views } = blog.fields
	let totalComments = 0
	if (comments && comments.length > 0) totalComments = comments.length
	return (
		<>
			<CustomHeader
				title={'Blog'}
				breadcrumb={['Home', 'Blog']}
				breadcrumbActive={'Blog Details View'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center pb-20'>
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
					<section className='justify-start items-center flex flex-row pt-10'>
						<article className='flex flex-col justify-start items-center mb-6 w-96'>
							<section className='flex gap-4 justify-start items-center mb-6 w-96'>
								<button
									className={`uppercase font-medium ${
										sortedGroup == 'Popular'
											? 'text-accent'
											: ''
									}`}
									onClick={sortGroup('Popular')}
									type='button'>
									Popular
								</button>
								<button
									className={`uppercase font-medium ${
										sortedGroup == 'Latest'
											? 'text-accent'
											: ''
									}`}
									onClick={sortGroup('Latest')}
									type='button'>
									Latest
								</button>
							</section>
							<section className='flex flex-col justify-start gap-4 w-96'>
								{times(3, i => (
									<article
										className='flex gap-4 justify-start'
										id={`latest-event-${i + 1}`}>
										<figure className='flex flex-col justify-start my-2 w-32 h-32'>
											<Image
												draggable='false'
												dragstart='false'
												src={event1}
												alt={`Event Photo ${i + 1}`}
												className='unselectable w-full'
											/>
										</figure>
										<section className='flex flex-col justify-start my-2 gap-3'>
											<h3 className='text-xs font-sans font-semibold capitalize text-left'>{`${blogID}`}</h3>
											<div className='flex justify-between text-xs text-primary/90'>
												<div className='mt-2 mb-6 mr-2 flex items-center'>
													<FaRegThumbsUp className='mr-1' />
													<p className='inline-block font-thin'>
														{`${formatNumbers(
															likes
														)} likes`}
													</p>
												</div>
												<div className='mt-2 mb-6 ml-2 flex items-center'>
													<FaComments className='mr-1' />
													<p className='inline-block font-thin'>
														{`${formatNumbers(
															totalComments
														)} comments`}
													</p>
												</div>
											</div>
										</section>
									</article>
								))}
							</section>
						</article>
						<article
							className='flex flex-col mb-6 ml-10'
							id={blog.sys.id}
							key={blog.sys.id}>
							<ContentfulLoader
								image={blog.fields.image.fields}
								width={872}
								height={244}
							/>
							<h3 className='text-2xl capitalize mt-5'>
								{blog.fields.title}
							</h3>
							<div className='flex justify-between text-primary/90 text-sm'>
								<div className='mt-2 mb-6 flex items-center'>
									<FaUser className='mr-2' />
									<p className='inline-block'>
										By {blog.fields.author.fields.username}
									</p>
								</div>
								<div className='flex gap-4'>
									<div className='mt-2 mb-6 flex items-center'>
										<FaRegThumbsUp className='mr-1' />
										<p className='inline-block font-thin'>
											{`${formatNumbers(likes)} likes`}
										</p>
									</div>
									<div className='mt-2 mb-6 flex items-center'>
										<FaComments className='mr-1' />
										<p className='inline-block font-thin'>
											{`${formatNumbers(
												totalComments
											)} comments`}
										</p>
									</div>
									<div className='mt-2 mb-6 flex items-center'>
										<FaEye className='mr-1' />
										<p className='inline-block font-thin'>
											{`${formatNumbers(views)} views`}
										</p>
									</div>
								</div>
							</div>
							<p className='text-start text-primary/90'>
								{blog.fields.text}
							</p>
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
