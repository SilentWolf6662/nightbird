// `app/register/page.jsx` is the UI for the `/register` URL
/* prettier-ignore */
import Image from 'next/image'
import CustomHeader from '@/components/CustomHeader'
import title_decor from './../../../../../public/img/title_decor.png'
import MembershipCard from '@/components/MembershipCard'
export default async function Register() {
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
						<div class='container px-5 mx-auto flex flex-wrap'>
							<div class='lg:w-1/4 mt-48 hidden lg:block'>
								<div class='mt-px border-t border-gray-300 border-b border-l overflow-hidden'>
									<p class='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Website Member Access
									</p>
									<p class='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start -mt-px'>
										Club Membership
									</p>
									<p class='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Entry fee Less
									</p>
									<p class='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Free tequila
									</p>
									<p class='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Get big Dance Floor
									</p>
									<p class='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Party with international DJ’s
									</p>
									<p class='text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Meetup with Celebraties
									</p>
									<p class='bg-primary/10 text-primary/90 h-12 text-center px-4 flex items-center justify-start'>
										Free every liquor
									</p>
								</div>
							</div>
							<div class='flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300'>
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
						<form className='flex flex-col justify-center items-center'>
							<div className='flex flex-col justify-center items-start w-full'>
								<label for='membership' className='p-2'>
									Membership Type:
								</label>
								<select
									id='membership'
									required
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'>
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
									<label for='first_name' className='p-2'>
										First Name:
									</label>
									<input
										id='first_name'
										type='text'
										placeholder='First Name'
										className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'
									/>
								</div>
								<div className='flex flex-col justify-center items-start w-full pl-2 ml-2'>
									<label for='last_name' className='p-2'>
										Last Name:
									</label>
									<input
										id='last_name'
										type='text'
										placeholder='Last Name'
										className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'
									/>
								</div>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label for='email' className='p-2'>
									Email:
								</label>
								<input
									id='email'
									type='email'
									placeholder='Email'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label
									for='dateOfMembershipStart'
									className='p-2'>
									Date of membership start:
								</label>
								<input
									id='dateOfMembershipStart'
									type='date'
									placeholder='Date'
									min={`${
										new Date().toISOString().split('T')[0]
									}`}
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55 text-primary/60'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label for='username' className='p-2'>
									Username:
								</label>
								<input
									id='username'
									type='text'
									placeholder='Username'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label for='password' className='p-2'>
									Password:
								</label>
								<input
									type='password'
									placeholder='Password'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'
								/>
							</div>
							<div className='flex flex-col justify-center items-start w-full'>
								<label for='passwordConfirm' className='p-2'>
									Confirm Password:
								</label>
								<input
									id='passwordConfirm'
									type='password'
									placeholder='Confirm Password'
									className='w-full p-2 m-2 bg-background border-[1px] border-primary/55'
								/>
							</div>
							<div className='flex flex-row justify-center items-start w-full mt-8 ml-4'>
								<button
									type='button'
									className='bg-accent text-primary p-2 mr-2 w-full'>
									Cancel
								</button>
								<button
									type='submit'
									className='bg-accent text-primary p-2 ml-2 w-full'>
									Register
								</button>
							</div>
						</form>
					</section>
				</article>
			</main>
		</>
	)
}
