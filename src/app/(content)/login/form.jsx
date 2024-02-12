'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import CustomHeader from '@/components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png'
export default function Form() {
	const handleSubmit = async event => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
		console.log({ response })
	}
	return (
		<>
			<CustomHeader
				title={'Login'}
				breadcrumb={['Home', 'Members']}
				breadcrumbActive={'Login'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Login
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
					<section className='flex flex-col justify-center items-center mt-10'>
						<div className='w-full lg:w-1/2'>
							<form
								onSubmit={handleSubmit}
								className='flex flex-col justify-center items-center'>
								<div className='w-full mb-4'>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-primary/70'>
										Email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										required
										className='w-full border-2 bg-background border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
									/>
								</div>
								<div className='w-full mb-4'>
									<label
										htmlFor='password'
										className='block text-sm font-medium text-primary/70'>
										Password
									</label>
									<input
										type='password'
										name='password'
										id='password'
										autoComplete='current-password'
										required
										className='w-full bg-background border-2 border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
									/>
								</div>
								<div className='w-full mb-4'>
									<button
										type='submit'
										className='w-full bg-accent text-primary font-semibold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'>
										Login
									</button>
								</div>
							</form>
						</div>
					</section>
				</article>
			</main>
		</>
	)
}
