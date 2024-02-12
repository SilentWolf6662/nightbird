// `app/register/page.jsx` is the UI for the `/register` URL
import Image from 'next/image'
import CustomHeader from './../../../../../components/CustomHeader'
import title_decor from './../../../../../public/img/title_decor.png'
export default async function Login() {
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
				</article>
			</main>
		</>
	)
}
