// src/app/%28content%29/register/form.jsx
'use client'
import Image from 'next/image'
import CustomHeader from '@/components/CustomHeader'
import MembershipCard from '@/components/MembershipCard'
import title_decor from './../../../../public/img/title_decor.png'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
let tempBase64 = null
// Function to convert a file to base64
function fileToBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onloadend = () => {
			const base64String = reader.result
			tempBase64 = base64String
			resolve(base64String)
		}
		reader.onerror = error => reject(error)
	})
}

// Function to convert base64 to a file
export default function Form() {
	const router = useRouter()
	const [uploading, setUploading] = useState(false)
	const [selectedFile, setSelectedFile] = useState()
	const [base64, setBase64] = useState('')
	const [fileType, setFileType] = useState('')
	const [file, setFile] = useState()

	const handlePfp = async file => {
		if (!file) {
			//console.log('No file selected')
			return
		}
		const result = await fileToBase64(file)
		setBase64(result)
		//console.log(`async base64: ${base64.length}`)
		return result
	}
	const handleUpload = async file => {
		setUploading(true)
		try {
			if (!base64) return
			handlePfp(file)
		} catch (error) {
			//console.log(error.message)
		}
		setUploading(false)
	}
	const handleImageChange = target => {
		if (!target.files)
			return alert('No file selected. Please select a file.')
		const file = target.files[0]
		if (!file) return alert('No file selected. Please select a file.')
		//console.log(file)
		if (file.size > 1000000) {
			return alert(
				'File size is too big. Please select a file less than 1MB.'
			)
		}
		/* if (
			file.type !== 'image/png' ||
			file.type !== 'image/jpeg' ||
			file.type !== 'image/jpg'
		) {
			return alert(
				'File type is not supported. Please select a PNG, JPG or JPEG file.'
			)
		} */
		let imageBlob = new Blob([file], { type: 'image/png' })
		//console.log(imageBlob)
		setSelectedFile(file)
		//console.log(selectedFile)

		handlePfp(file)
	}
	const handleSubmit = async event => {
		event.preventDefault()
		/* handleUpload() */
		const formData = new FormData(event.currentTarget)
		const response = await fetch('/api/auth/register', {
			method: 'POST',
			body: formData // Send formData instead of JSON
			// Do not set the Content-Type header manually
			// as FormData will automatically set it to multipart/form-data
		})
		const pfpUrl = URL.createObjectURL(selectedFile)

		//console.log({ response })

		// Same every time
		//console.log({ selectedFile })

		// Changing every time
		//console.log({ pfpUrl })

		/* if (response.ok) {
			router.push('/members')
		} */
	}
	useEffect(() => {
		//console.log(`observer/useEffect selectedFile:`, selectedFile)
	}, [selectedFile]) // This effect will run whenever `selectedFile` changes
	useEffect(() => {
		//console.log(`observer/useEffect base64: ${base64.length}`)
	}, [base64]) // This effect will run whenever `base64` changes
	return (
		<>
			<CustomHeader
				title={'Register'}
				breadcrumb={['Home', 'Members']}
				breadcrumbActive={'Register'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Member Types
						</h2>
						<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
							<Image
								draggable='false'
								dragstart='false'
								src={title_decor}
								height={20}
								alt='Title Decor'
								className='unselectable '
							/>
						</figure>
					</section>
					<section className='flex gap-4 justify-center items-center pt-10'>
						<div className='container px-5 mx-auto flex flex-wrap'>
							<div className='lg:w-1/4 mt-48 hidden lg:block'>
								<div className='mt-px border-t border-gray-300 border-b border-l overflow-hidden'>
									<p className='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Website Member Access
									</p>
									<p className='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start -mt-px'>
										Club Membership
									</p>
									<p className='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Entry fee Less
									</p>
									<p className='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Free tequila
									</p>
									<p className='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Get big Dance Floor
									</p>
									<p className='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Party with international DJ’s
									</p>
									<p className='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Meetup with Celebraties
									</p>
									<p className='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Free every liquor
									</p>
								</div>
							</div>
							<div className='flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300'>
								<MembershipCard
									title={`Freebie`}
									price={0}
									features={[
										true,
										false,
										false,
										false,
										false,
										false,
										false,
										false
									]}
									popular={false}
									stripe={true}
								/>
								<MembershipCard
									title={`Generel`}
									price={79}
									features={[
										true,
										true,
										true,
										true,
										true,
										true,
										false,
										false
									]}
									popular={false}
									stripe={false}
								/>
								<MembershipCard
									title={`Premium`}
									price={89}
									features={[
										true,
										true,
										true,
										true,
										true,
										true,
										true,
										false
									]}
									popular={true}
									stripe={false}
								/>
								<MembershipCard
									title={`Diamond`}
									price={99}
									features={[
										true,
										true,
										true,
										true,
										true,
										true,
										true,
										true
									]}
									popular={false}
									stripe={false}
								/>
							</div>
						</div>
					</section>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Register
						</h2>
						<figure className='flex flex-col justify-center items-center mt-2 mb-2'>
							<Image
								draggable='false'
								dragstart='false'
								src={title_decor}
								height={20}
								alt='Title Decor'
								className='unselectable '
							/>
						</figure>
					</section>
					<section className='justify-center items-center pt-10'>
						<form
							onSubmit={handleSubmit}
							className='flex flex-col justify-center items-center'>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='membership' className='p-2'>
									Membership Type:
								</label>
								<select
									id='membership'
									name='membership'
									required
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'>
									<option value=''>
										Select membership plan...
									</option>
									<option value='Freebie'>
										{`Freebie ($${0})`}
									</option>
									<option value='Generel'>
										{`Generel ($${79}/mo)`}
									</option>
									<option value='Premium'>
										{`Premium ($${89}/mo)`}
									</option>
									<option value='Diamond'>
										{`Diamond ($${99}/mo)`}
									</option>
								</select>
								<span className='w-full pl-2 pb-2 text-primary/60 text-sm'>
									{`To see the features of each membership, please check above. If you are not sure, please select the Freebie membership and upgrade later on. You can cancel anytime.`}
								</span>
							</div>
							<div className='flex flex-row justify-center items-center w-full'>
								<div className='flex flex-col justify-center items-start w-full pr-2 mr-2'>
									<label htmlFor='firstName' className='p-2'>
										First Name:
									</label>
									<input
										required
										id='firstName'
										name='firstName'
										type='text'
										placeholder='First Name'
										className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
									/>
								</div>
								<div className='flex flex-col justify-center items-start w-full pl-2 ml-2'>
									<label htmlFor='lastName' className='p-2'>
										Last Name:
									</label>
									<input
										required
										id='lastName'
										name='lastName'
										type='text'
										placeholder='Last Name'
										className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
									/>
								</div>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='email' className='p-2'>
									Email:
								</label>
								<input
									required
									id='email'
									name='email'
									type='email'
									placeholder='Email'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='date' className='p-2'>
									Date of membership start:
								</label>
								<input
									required
									id='date'
									name='date'
									type='date'
									placeholder='Date'
									min={`${
										new Date().toISOString().split('T')[0]
									}`}
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 text-primary/60 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='address' className='p-2'>
									Address:
								</label>
								<input
									required
									id='address'
									name='address'
									type='text'
									placeholder='Address'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='phone' className='p-2'>
									Phone Number:
								</label>
								<input
									required
									id='phone'
									name='phone'
									type='tel'
									placeholder='Phone Number'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='pfp' className='p-2'>
									Profile Picture:
								</label>
								<label htmlFor='pfp'>
									<input
										id='pfp'
										name='pfp'
										type='file'
										hidden
										onChange={({ target }) => {
											handleImageChange(target)
										}}
									/>
									<div className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
										{base64 && selectedFile ? (
											<Image
												src={URL.createObjectURL(
													selectedFile
												)}
												alt=''
												width={160}
												height={160}
											/>
										) : (
											<span>Select Image</span>
										)}
									</div>
								</label>
								{/* <input
									required
									id='pfp'
									name='pfp'
									type='image'
									placeholder='Profile Picture'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/> */}
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='username' className='p-2'>
									Username:
								</label>
								<input
									required
									id='username'
									name='username'
									type='text'
									placeholder='Username'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label htmlFor='password' className='p-2'>
									Password:
								</label>
								<input
									required
									autoComplete='off'
									id='password'
									name='password'
									type='password'
									placeholder='Password'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label
									htmlFor='passwordConfirm'
									className='p-2'>
									Confirm Password:
								</label>
								<input
									required
									autoComplete='off'
									id='passwordConfirm'
									name='passwordConfirm'
									type='password'
									placeholder='Confirm Password'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 focus:ring-2 focus:ring-accent focus:ring-offset-2'
								/>
							</div>
							<div className='flex flex-row justify-center items-start w-full mt-8 ml-4'>
								<button
									disabled={uploading}
									type='button'
									onClick={() => {
										router.push('/')
									}}
									className={`w-full bg-accent text-primary font-semibold py-2 px-4 mr-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
										uploading ? `opacity-50` : `opacity-100`
									}`}>
									{uploading
										? 'Registrating Member...'
										: 'Cancel'}
								</button>
								<button
									disabled={uploading}
									type='submit'
									className={`w-full bg-accent text-primary font-semibold py-2 px-4 ml-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
										uploading ? `opacity-50` : `opacity-100`
									}`}>
									{uploading
										? 'Registrating Member...'
										: 'Register'}
								</button>
							</div>
							<div className='flex flex-row w-full mt-8 ml-4'>
								<span className='text-primary/60 mr-1'>
									Already a member?
								</span>
								<a
									href='/login'
									className='text-accent hover:underline'>
									Login
								</a>
							</div>
						</form>
					</section>
				</article>
			</main>
		</>
	)
}
