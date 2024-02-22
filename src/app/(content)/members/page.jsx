// `src/app/(content)/member/page.jsx` is the UI for the `/member` URL
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { database } from '@/db/sql'
import CustomHeader from '@/components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png'
import Link from 'next/link'
import Logout from './logout'
import bcrypt from 'bcrypt'
import MembershipCard from '@/components/MembershipCard'
export default async function Members() {
	const session = await getServerSession()
	const sessionUser = session?.user
	const passwordPlaceholder = '●●●●●●●●'

	const response = await database.query(
		'SELECT * FROM users WHERE email = ?',
		[sessionUser?.email]
	)
	//database.end()

	const user = response[0][0]

	/* console.log({ session })
	console.log({ sessionUser })
	console.log({ response })
	console.log({ user }) */

	return (
		<>
			<CustomHeader
				title={'Members'}
				breadcrumb={['Home']}
				breadcrumbActive={'Members'}
			/>
			<main className='bg-background text-primary'>
				<article className='container relative h-fit flex-col justify-center items-center pb-96'>
					<section className='justify-center items-center pt-10'>
						<h2 className='text-4xl font-greatVibes text-center capitalize'>
							Members
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
						<article className='w-full lg:w-1/2'>
							<section className='text-center flex flex-col'>
								{!!session && <Logout />}
								{!session && (
									<Link
										href='/login'
										className='cursor-pointer text-accent hover:underline'>
										Login
									</Link>
								)}
								{!session && (
									<Link
										href='/register'
										className='cursor-pointer text-accent hover:underline'>
										Register
									</Link>
								)}
							</section>
						</article>
						{!!session && (
							<article className='p-2 md:p-4'>
								<section className='w-full px-6 pb-8 mt-8 md:max-w-xl md:rounded-lg'>
									<h2 className='pl-6 text-2xl font-bold md:text-xl'>
										Member Profile
									</h2>

									<div className='grid max-w-2xl mx-auto mt-8'>
										<div className='flex flex-col items-center space-y-5 md:flex-row md:space-y-0'>
											{/* <ProfilePicture pfp={user.pfp} /> */}

											<div className='flex flex-col space-y-5 md:ml-8'>
												<button
													type='button'
													className='w-full bg-accent text-primary font-semibold py-2 px-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'>
													Change picture
												</button>
												<button
													type='button'
													className='w-full bg-accent text-primary font-semibold py-2 px-4 hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'>
													Delete picture
												</button>
											</div>
										</div>

										<form className='items-center mt-8 md:mt-14'>
											<div className='mb-6'>
												<label
													htmlFor='message'
													className='block mb-2 text-sm font-medium text-primary/90'>
													Member since:
												</label>
												<input
													required
													disabled
													id='date'
													name='date'
													type='date'
													value={user.date}
													placeholder={user.date}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>
											<div className='flex flex-col items-center w-full mb-2 space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 md:mb-6'>
												<div className='w-full'>
													<label
														htmlFor='firstName'
														className='block mb-2 text-sm font-medium text-primary/90'>
														Your first name
													</label>
													<input
														type='text'
														id='firstName'
														className='bg-background border border-accent/30 text-primary/90 text-sm block w-full p-2.5 '
														placeholder={
															user.firstName
														}
														required
													/>
												</div>

												<div className='w-full'>
													<label
														htmlFor='lastName'
														className='block mb-2 text-sm font-medium text-primary/90'>
														Your last name
													</label>
													<input
														type='text'
														id='lastName'
														className='bg-background border border-accent/30 text-primary/90 text-sm block w-full p-2.5 '
														placeholder={
															user.lastName
														}
														required
													/>
												</div>
											</div>

											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='email'
													className='block mb-2 text-sm font-medium text-primary/90'>
													Your email
												</label>
												<input
													type='email'
													id='email'
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
													placeholder={user.email}
													required
												/>
											</div>

											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='membership'
													className='p-2'>
													Membership Type:
												</label>
												<select
													id='membership'
													name='membership'
													required
													value={user.membership}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'>
													<option
														value={user.membership}>
														Select membership
														plan...
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
											</div>
											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='address'
													className='p-2'>
													Address:
												</label>
												<input
													required
													id='address'
													name='address'
													type='text'
													placeholder={user.address}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>
											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='phone'
													className='p-2'>
													Phone Number:
												</label>
												<input
													required
													id='phone'
													name='phone'
													type='tel'
													placeholder={user.phone}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>
											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='username'
													className='p-2'>
													Username:
												</label>
												<input
													required
													id='username'
													name='username'
													type='text'
													placeholder={user.username}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>
											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='passwordOld'
													className='p-2'>
													Old Password:
												</label>
												<input
													required
													id='passwordOld'
													name='passwordOld'
													type='password'
													placeholder={
														passwordPlaceholder
													}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>
											<div className='mb-2 md:mb-6'>
												<label
													htmlFor='passwordNew'
													className='p-2'>
													New Password:
												</label>
												<input
													required
													id='passwordNew'
													name='passwordNew'
													type='password'
													placeholder={
														'New password...'
													}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>
											<div className='mb-6'>
												<label
													htmlFor='passwordConfirm'
													className='p-2'>
													Confirm Password:
												</label>
												<input
													required
													id='passwordConfirm'
													name='passwordConfirm'
													type='password'
													placeholder={
														'Confirm new password...'
													}
													className='bg-background border border-accent/30 text-primary/90 text-sm focus:ring-accent focus:border-accent block w-full p-2.5'
												/>
											</div>

											<div className='flex justify-end'>
												<button
													type='submit'
													className='text-white bg-accent  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-accent/30 font-medium text-sm w-full md:w-auto px-5 py-2.5 text-center'>
													Save
												</button>
											</div>
										</form>
									</div>
								</section>
							</article>
						)}
						{!session && (
							<article className='container relative h-fit flex-col justify-center items-center pb-96'>
								<section>
									<div className='justify-center items-center pt-10'>
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
									</div>
									<div className='flex gap-4 justify-center items-center pt-10'>
										<div className='container px-5 mx-auto flex flex-wrap'>
											<div className='w-full md:w-1/4 md:mt-48 block'>
												<div className='mt-px border-t border-gray-300 border md:border-b md:border-l overflow-hidden'>
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
														Party with international
														DJ’s
													</p>
													<p className='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
														Meetup with Celebraties
													</p>
													<p className='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
														Free every liquor
													</p>
												</div>
											</div>
											<div className='flex md:w-3/4 md:mb-8 w-full flex-col md:flex-row md:flex-wrap md:border border-gray-300'>
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
											<div className='mx-auto flex md:hidden flex-col mt-2'>
												<Link
													href='/login'
													className='cursor-pointer text-accent hover:underline'>
													Login
												</Link>

												<Link
													href='/register'
													className='cursor-pointer text-accent hover:underline -ml-3'>
													Register
												</Link>
											</div>
										</div>
									</div>
								</section>
							</article>
						)}
					</section>
				</article>
			</main>
		</>
	)
}
