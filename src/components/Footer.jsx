import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa6'
import { FaGlobeAmericas } from "react-icons/fa";
import { subscribeNews } from './Forms';
import logo from './../../public/img/logo.png';
// region Import footer photos
import footer_photo_1 from './../../public/img/footer_photo_1.jpg';
import footer_photo_2 from './../../public/img/footer_photo_2.jpg';
import footer_photo_3 from './../../public/img/footer_photo_3.jpg';
import footer_photo_4 from './../../public/img/footer_photo_4.jpg';
import footer_photo_5 from './../../public/img/footer_photo_5.jpg';
import footer_photo_6 from './../../public/img/footer_photo_6.jpg';
import footer_photo_7 from './../../public/img/footer_photo_7.jpg';
import footer_photo_8 from './../../public/img/footer_photo_8.jpg';
import footer_photo_9 from './../../public/img/footer_photo_9.jpg';
import FooterClientForm from './FooterClient';
// endregion
const Footer = () => {
	const year = new Date().getFullYear()
	const footerPhotos = [footer_photo_1, footer_photo_2, footer_photo_3, footer_photo_4, footer_photo_5, footer_photo_6, footer_photo_7, footer_photo_8, footer_photo_9]
	return (
		<>
			<footer className='bg-background h-auto text-primary'>
				<div className='container flex flex-col lg:flex-row justify-center items-center lg:items-start pt-6'>
					<div className='w-full lg:w-1/4 text-left'>
						<Image
							draggable='false'
							dragstart='false'
							src={logo}
							alt='Night Bird logo'
							className=' unselectable'></Image>
						<p className=''>
							It’s a night club. Anyone can join our club. If you
							are interested in joining our club.
						</p>
						<ul className='my-5'>
							<li className='flex items-center'>
								<div className='bg-accent rounded-full flex justify-center items-center w-10 h-10'>
									<FaPhone className='' />
								</div>
								<div className='mx-2'>
									<p>+880 1223 5678</p>
									<p>+880 8765 4321</p>
								</div>
							</li>
							<li className='flex items-center my-5'>
								<div className='bg-accent rounded-full flex justify-center items-center w-10 h-10'>
									<FaEnvelope className='' />
								</div>
								<div className='mx-2'>
									<p>nightbird@admin.com</p>
									<p>admin@nightbird.com</p>
								</div>
							</li>
							<li className='flex items-center'>
								<div className='bg-accent rounded-full flex justify-center items-center w-10 h-10'>
									<FaGlobeAmericas className='' />
								</div>
								<div className='mx-2'>
									<p>www.nightbird.com</p>
									<p>www.nightbirdbd.com</p>
								</div>
							</li>
						</ul>
					</div>
					<div className='w-full lg:w-1/4 text-left mx-5'>
						<h6 className='font-bold capitalize my-4'>
							Twitter feed
						</h6>

						<div className='text-primary/80'>
							<FaTwitter className='mr-2 inline-block' />
							<p className='inline'>
								This is a very exclusive nightclub, that is
								known as NIGHT BIRD. I am really proud to be
								part of the Night Bird.
							</p>
							<p className='font-semibold text-primary'>
								9. November 2017.
							</p>
						</div>
						<div className='my-5 text-primary/80'>
							<FaTwitter className='mr-2 inline-block' />
							<p className='inline'>
								Night Bird presents some very famous artists and
								has special serving of food and drinks.
							</p>
							<p className='font-semibold text-primary'>
								12. November 2017.
							</p>
						</div>
					</div>
					<div className='w-full lg:w-[21%]'>
						<h6 className='font-bold capitalize my-4'>
							Instagram photos
						</h6>
						<div className='grid grid-cols-3 gap-4 h-60 w-60'>
							{footerPhotos.map((photo, index) => (
								<Image
									draggable='false'
									dragstart='false'
									src={photo}
									alt={`Photo ${index + 1}`}
									className=' unselectable'
									key={index}></Image>
							))}
						</div>
					</div>
					<div className='w-full lg:w-1/4'>
						<FooterClientForm />
						<h6 className='font-bold text-center lg:text-left capitalize mb-4 mt-8'>
							Get social
						</h6>
						<div className='flex justify-center lg:justify-start'>
							<Link href={'#'}>
								<div className='bg-transparent border border-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaFacebookF />
								</div>
							</Link>
							<Link href={'#'} className='mx-2'>
								<div className='bg-transparent border border-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaTwitter />
								</div>
							</Link>
							<Link href={'#'}>
								<div className='bg-transparent border border-primary rounded-full flex justify-center items-center w-10 h-10'>
									<FaLinkedinIn />
								</div>
							</Link>
						</div>
					</div>
				</div>
				<hr className='border-t-[1px] border-primary mt-4' />
				<p className='flex justify-center items-center m-auto py-5'>
					Copyright © {year}. All right reserved by
					<Link href='/' className='text-accent pl-1'>
						NIGHT BIRD
					</Link>
				</p>
			</footer>
		</>
	)
}

export default Footer
