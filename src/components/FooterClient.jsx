'use client'
import { usePathname, useRouter } from 'next/navigation'
export default function FooterClientForm() {
	const path = usePathname()
	const router = useRouter()
	const handleSubmit = async event => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const response = await fetch('/api/newsletter', {
			method: 'POST',
			body: formData // Send formData instead of JSON
			// Do not set the Content-Type header manually
			// as FormData will automatically set it to multipart/form-data
		})

		response.json().then(res => {
			alert(res.message)
			if (res.message === 'Subscribed to newsletter') {
				event.target.reset()
				router.push(`/${path}`)
				router.refresh()
			}
		})
	}
	return (
		<>
			<h6 className='font-bold capitalize my-4'>
				Sign up for newsletter
			</h6>
			<form
				id='formNewsletter'
				name='formNewsletter'
				className='flex flex-col'
				onSubmit={handleSubmit}>
				<input
					name='name'
					type='text'
					placeholder='Your Name'
					className='bg-background border border-primary px-2 py-1 my-1'></input>
				<input
					name='email'
					type='email'
					placeholder='Your E-mail'
					className='bg-background border border-primary px-2 py-1 my-1'></input>
				<button
					type='submit'
					className='bg-accent text-primary px-2 py-1 my-1 text-lg uppercase'>
					S u b m i t
				</button>
			</form>
		</>
	)
}
