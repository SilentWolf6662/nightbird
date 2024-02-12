// `app/contact/page.jsx` is the UI for the `/contact` URL
'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa6'
import CustomHeader from './../../../components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png'
export default function Contact() {
	const regExPatterns = {
		telephone: /^\d{11}$/,
		username: /^[a-z\d]{5,12}$/i,
		password: /^[\d\w@-]{8,20}$/i,
		slug: /^[a-z\d-]{8,20}$/,
		email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,8})(\.\w{2,8})?$/gi
		//             yourname @ domain   .  com          ( .uk )
	}
	let details = {
		name: '',
		nameError: '',
		nameFocus: false,
		email: '',
		emailError: '',
		emailFocus: false,
		message: '',
		messageError: '',
		messageFocus: false
	}

	const nameErrorField = useRef(null)
	const emailErrorField = useRef(null)
	const messageErrorField = useRef(null)

	const emailRegex = regExPatterns.email

	// This function checks if the email input has received focus, and runs a validation check on it.
	// if the validation checks, its sets emailFocus to true.
	// if input value is valid, the border turns green, else the border turns red.
	const onFocusEmailInput = () => {
		if (emailRegex.test(details.email)) {
			details.emailFocus = true
		}
	}

	const onFocusNameInput = () => {
		if (details.name) {
			details.nameFocus = true
		}
	}

	const onFocusMessageInput = () => {
		if (details.message) {
			details.messageFocus = true
		}
	}

	// This function is used to update the details state if any of input field changes.
	const onInputChange = event => {
		const { name } = event.target
		const { value } = event.target

		if (name === 'name') {
			details.name = value
			details.nameError = ''
			nameErrorField.current.innerHTML = details.messageError
			if (!details.name) {
				details.nameError = 'Name is required. Please type your name!'
				nameErrorField.current.innerHTML = details.nameError
			}
		}

		if (name === 'email') {
			details.email = value
			details.emailError = ''
			emailErrorField.current.innerHTML = details.messageError
			if (!emailRegex.test(details.email)) {
				if (!details.email) {
					details.emailError =
						'Email is required. Please type a valid email address!'
					emailErrorField.current.innerHTML = details.emailError
				}
				if (!details.email.includes('@')) {
					details.emailError =
						'Email does not inlcude a "@" symbol. Please type a valid email address!'
					emailErrorField.current.innerHTML = details.emailError
				}
				if (!details.email.includes('.')) {
					details.emailError =
						'Email does not inlcude a "." symbol. Please type a valid email address!'
					emailErrorField.current.innerHTML = details.emailError
				}
				if (details.email.length < 6) {
					details.emailError =
						'Email is too short to be valid. Please type a valid email address!'
					emailErrorField.current.innerHTML = details.emailError
				}
				details.emailError = 'Please type a valid email address!'
				emailErrorField.current.innerHTML = details.emailError
			} else {
				details.emailFocus = true
			}
		}

		if (name === 'message') {
			details.message = value
			details.messageError = ''
			messageErrorField.current.innerHTML = details.messageError
			if (!details.message) {
				details.messageError =
					'Message is required. Please type your message!'
				messageErrorField.current.innerHTML = details.messageError
			} else {
				details.messageFocus = true
			}
		}
	}

	// This function runs when you click proceed
	// it checks if non of the input fields are empty or returning an error message.
	const onClickSubmit = event => {
		event.preventDefault()
		// console.log(details)
		try {
			if (!details.email) {
				details.emailError =
					'Email is required. Please type a valid email address!'
				messageErrorField.current.innerHTML = details.messageError
			}
			if (!details.email.includes('@')) {
				details.emailError =
					'Email does not inlcude a "@" symbol. Please type a valid email address!'
				messageErrorField.current.innerHTML = details.messageError
			}
			if (!details.email.includes('.')) {
				details.emailError =
					'Email does not inlcude a "." symbol. Please type a valid email address!'
				messageErrorField.current.innerHTML = details.messageError
			}
			if (details.email.length < 6) {
				details.emailError =
					'Email is too short to be valid. Please type a valid email address!'
				messageErrorField.current.innerHTML = details.messageError
			}
			if (!details.name) {
				details.nameError = 'Name is required. Please type your name!'
				messageErrorField.current.innerHTML = details.messageError
			}
		} catch (error) {
			// console.log(error)
		}
		// console.log('Form Submitted')
	}
	return (
		<>
			<CustomHeader
				title={'Contact'}
				breadcrumb={['Home']}
				breadcrumbActive={'Contact Us'}
			/>
			<main className='bg-background text-primary overflow-hidden'>
				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
					<div className='text-center'>
						<iframe
							className='absolute border-0 top-0 left-0 w-screen h-96 opacity-10 -translate-x-28 unselectable pointer-events-none'
							allowFullScreen
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.819645462865!2d-73.98660063145172!3d40.74399390288372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7947677c7%3A0x6ca582940796d1d0!2s420%20Park%20Ave%20S%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sda!2sus!4v1707173206846!5m2!1sda!2sus'></iframe>
						<ul className='py-20 flex flex-row absolute top-8 text-primary/70'>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaMapMarkerAlt className='text-accent' />
								</div>
								<div className='m-2'>
									<p className='my-2'>
										420, Park Syreet Road. Newyork City{' '}
										<br /> America
									</p>
									<p className='my-2'>
										840, Oranjestid, St. Francisco, Aruba{' '}
										<br /> North America
									</p>
								</div>
							</li>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaPhoneAlt className='text-accent' />
								</div>
								<div className='m-2 mx-4 grid grid-cols-2 gap-2'>
									<p className='my-2'>(+880) 1223 5678,</p>
									<p className='my-2'>(+880) 8765 4321</p>
									<p className='my-2'>(+880) 2589 7852,</p>
									<p className='my-2'>(+880) 7852 9852</p>
								</div>
							</li>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaRegEnvelope className='text-accent' />
								</div>
								<div className='m-2 mx-4 grid grid-cols-2 gap-2'>
									<p className='my-2'>nightbird@admin.com,</p>
									<p className='my-2'>user@admin.com</p>
									<p className='my-2'>admin@nightbird.com,</p>
									<p className='my-2'>admin@user.com</p>
								</div>
							</li>
							<li className='flex flex-col items-center'>
								<div className='bg-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaGlobeAmericas className='text-accent' />
								</div>
								<div className='m-2 mx-4 grid grid-cols-2 gap-2'>
									<p className='my-2'>www.nightbird.com,</p>
									<p className='my-2'>www.admin.com</p>
									<p className='my-2'>www.nightbirdbd.com,</p>
									<p className='my-2'>www.use.com</p>
								</div>
							</li>
						</ul>
					</div>
				</article>

				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
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
							onSubmit={onClickSubmit}
							className='flex flex-col justify-center items-center'>
							<div className='grid grid-cols-2 gap-8 w-full mb-4'>
								<div
									className={`w-full h-8 bg-background border-[1px] ${
										details.nameError.length > 0
											? `border-error`
											: details.nameFocus
											? `border-success`
											: 'border-primary/55'
									}`}>
									<input
										className={`w-full h-8 bg-background border-[1px] pl-2 ${
											details.nameError.length > 0
												? `border-error`
												: details.nameFocus
												? `border-success`
												: 'border-primary/55'
										}`}
										type='text'
										placeholder='Name'
										name='name'
										onChange={onInputChange}
										onFocus={onFocusNameInput}
									/>
									<p
										id='formCommentNameErr'
										className={`w-full text-left text-error ${
											details.messageError.length > 0
												? `block`
												: `hidden`
										}`}
										ref={nameErrorField}>
										Error Message
									</p>
								</div>
								<div
									className={`w-full h-8 bg-background border-[1px] ${
										details.emailError.length > 0
											? `border-error`
											: details.emailFocus
											? `border-success`
											: 'border-primary/55'
									}`}>
									<input
										className={`w-full h-8 bg-background border-[1px] pl-2 ${
											details.emailError.length > 0
												? `border-error`
												: details.emailFocus
												? `border-success`
												: 'border-primary/55'
										}`}
										type='email'
										placeholder='E-mail'
										name='email'
										onChange={onInputChange}
										onFocus={onFocusEmailInput}
									/>
									<p
										id='formCommentEmailErr'
										className={`w-full text-left text-error ${
											details.messageError.length > 0
												? `block`
												: `hidden`
										}`}
										ref={emailErrorField}>
										Error Message
									</p>
								</div>
							</div>
							<div
								className={`w-full h-48 bg-background border-[1px] ${
									details.messageError.length > 0
										? `border-error`
										: details.messageFocus
										? `border-success`
										: 'border-primary/55'
								}`}>
								<textarea
									className={`w-full h-48 bg-background border-[1px] border-primary/55 p-4 resize-none ${
										details.messageError.length > 0
											? `border-error`
											: details.messageFocus
											? `border-success`
											: 'border-primary/55'
									}`}
									type='text'
									placeholder='Message'
									name='message'
									onChange={onInputChange}
									onFocus={onFocusMessageInput}
								/>
								<p
									id='formCommentMessageErr'
									className={`w-full text-left text-error ${
										details.messageError.length > 0
											? `block`
											: `hidden`
									}`}
									ref={messageErrorField}>
									Error Message
								</p>
							</div>
							<input
								className='w-full h-8 bg-accent text-primary mt-4 uppercase font-bold cursor-pointer'
								type='submit'
								value={`S u b m i t`}
							/>
						</form>
					</section>
				</article>
			</main>
		</>
	)
}
