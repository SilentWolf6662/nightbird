// `app/contact/page.jsx` is the UI for the `/contact` URL
'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaPhoneAlt, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa6'
import CustomHeader from '@/components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png'
export default function Contact() {
	const router = useRouter()
	const handleSubmit = async event => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const response = await fetch('/api/contact', {
			method: 'POST',
			body: formData // Send formData instead of JSON
			// Do not set the Content-Type header manually
			// as FormData will automatically set it to multipart/form-data
		})

		const message = response.json().then(res => {
			//console.log('res', res)
			alert(res.message)
			if (
				res.message ===
				"We got your message. We'll get back to you as soon as possible"
			) {
				event.target.reset()
				router.push('/contact')
				router.refresh()
			}
		})
	}
	return (
		<>
			<CustomHeader
				title={'Contact'}
				breadcrumb={['Home']}
				breadcrumbActive={'Contact Us'}
			/>
			<main className='bg-background text-primary overflow-hidden'>
				<article className='container relative flex-col justify-center items-center mb-96 h-96 md:h-2'>
					<div className='text-center flex justify-center items-center'>
						<iframe
							className='absolute border-0 top-0 left-0 w-screen h-full lg:h-96 opacity-10 lg:-translate-x-28 unselectable pointer-events-none'
							allowFullScreen
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.819645462865!2d-73.98660063145172!3d40.74399390288372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7947677c7%3A0x6ca582940796d1d0!2s420%20Park%20Ave%20S%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sda!2sus!4v1707173206846!5m2!1sda!2sus'></iframe>
						<ul className='lg:my-20 flex flex-col lg:flex-row absolute top-8 text-primary/70 overflow-auto lg:overscroll-none justify-center items-center text-center'>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaMapMarkerAlt className='text-accent' />
								</div>
								<div className='m-2'>
									<p className='my-2 text-center'>
										420, Park Syreet Road. Newyork City
										<br /> America
									</p>
									<p className='my-2 text-center'>
										840, Oranjestid, St. Francisco, Aruba
										<br /> North America
									</p>
								</div>
							</li>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaPhoneAlt className='text-accent' />
								</div>
								<div className='m-2 mx-4 grid grid-cols-1 lg:grid-cols-2 gap-2'>
									<p className='my-2'>
										(+880) 1223 5678
										<span className='hidden md:inline-block'>
											,
										</span>
									</p>
									<p className='my-2'>(+880) 8765 4321</p>
									<p className='my-2'>
										(+880) 2589 7852
										<span className='hidden md:inline-block'>
											,
										</span>
									</p>
									<p className='my-2'>(+880) 7852 9852</p>
								</div>
							</li>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaRegEnvelope className='text-accent' />
								</div>
								<div className='m-2 mx-4 grid grid-cols-1 lg:grid-cols-2 gap-2'>
									<p className='my-2'>
										nightbird@admin.com
										<span className='hidden md:inline-block'>
											,
										</span>
									</p>
									<p className='my-2'>user@admin.com</p>
									<p className='my-2'>
										admin@nightbird.com
										<span className='hidden md:inline-block'>
											,
										</span>
									</p>
									<p className='my-2'>admin@user.com</p>
								</div>
							</li>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaGlobeAmericas className='text-accent' />
								</div>
								<div className='m-2 mx-4 grid grid-cols-1 lg:grid-cols-2 gap-2'>
									<p className='my-2'>
										www.nightbird.com
										<span className='hidden md:inline-block'>
											,
										</span>
									</p>
									<p className='my-2'>www.admin.com</p>
									<p className='my-2'>
										www.nightbirdbd.com
										<span className='hidden md:inline-block'>
											,
										</span>
									</p>
									<p className='my-2'>www.use.com</p>
								</div>
							</li>
						</ul>
					</div>
				</article>

				<article className='container relative h-fit flex-col justify-center items-center pb-96 pt-60'>
					<section className='justify-center items-center pt-20'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Leave a comment
						</h2>
						<figure className='flex flex-col justify-center items-center mt-2 mb-10'>
							<Image
								draggable='false'
								dragstart='false'
								src={title_decor}
								height={20}
								alt='Title Decor'
								className='unselectable '
							/>
						</figure>
						<form
							id='form-comments'
							name='formComments'
							onSubmit={handleSubmit}
							className='flex flex-col justify-center items-center'>
							<div className='grid grid-cols-2 gap-8 w-full mb-4'>
								<div
									className={`w-full h-8 bg-background border-[1px]`}>
									<input
										className={`w-full h-8 bg-background border-[1px] pl-2`}
										type='text'
										placeholder='Name'
										name='name'
									/>
								</div>
								<div
									className={`w-full h-8 bg-background border-[1px]`}>
									<input
										className={`w-full h-8 bg-background border-[1px] pl-2`}
										type='email'
										placeholder='E-mail'
										name='email'
									/>
								</div>
							</div>
							<div
								className={`w-full h-48 bg-background border-[1px]`}>
								<textarea
									className={`w-full h-48 bg-background border-[1px] border-primary/55 p-4 resize-none`}
									type='text'
									placeholder='Message'
									name='message'
								/>
							</div>
							<button
								className='w-full h-8 bg-accent text-primary mt-4 uppercase font-bold cursor-pointer'
								type='submit'
								value={`S u b m i t`}>{`S u b m i t`}</button>
						</form>
					</section>
				</article>
			</main>
		</>
	)
}
