import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa6'
import { FaGlobeAmericas } from "react-icons/fa";
import logo from '../../../public/img/logo.png';
import footer_photo_1 from '../../../public/img/footer_photo_1.jpg';
import footer_photo_2 from '../../../public/img/footer_photo_2.jpg';
import footer_photo_3 from '../../../public/img/footer_photo_3.jpg';
import footer_photo_4 from '../../../public/img/footer_photo_4.jpg';
import footer_photo_5 from '../../../public/img/footer_photo_5.jpg';
import footer_photo_6 from '../../../public/img/footer_photo_6.jpg';
import footer_photo_7 from '../../../public/img/footer_photo_7.jpg';
import footer_photo_8 from '../../../public/img/footer_photo_8.jpg';
import footer_photo_9 from '../../../public/img/footer_photo_9.jpg';

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<>
			<footer className="bg-background h-auto text-primary">
				<div className="container flex justify-center pt-6">
					<div className="w-1/4 text-left">
						<Image src={logo} alt="Night Bird logo" className=""></Image>
						<p className="">
							It’s a night club. Anyone can join our club. If you
							are interested in joining our club.
						</p>
						<ul className='my-5'>
							<li className="flex items-center">
								<div className="bg-accent rounded-full flex justify-center items-center w-10 h-10">
									<FaPhone className="" />
								</div>
								<div className='mx-2'>
									<p>+880 1223 5678</p>
									<p>+880 8765 4321</p>
								</div>
							</li>
							<li className="flex items-center my-5">
								<div className="bg-accent rounded-full flex justify-center items-center w-10 h-10">
									<FaEnvelope className="" />
								</div>
								<div className='mx-2'>
									<p>nightbird@admin.com</p>
									<p>admin@nightbird.com</p>
								</div>
							</li>
							<li className="flex items-center">
								<div className="bg-accent rounded-full flex justify-center items-center w-10 h-10">
									<FaGlobeAmericas className="" />
								</div>
								<div className='mx-2'>
									<p>www.nightbird.com</p>
									<p>www.nightbirdbd.com</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="w-1/4 text-left mx-5">
						<h6 className='font-bold capitalize my-4'>Twitter feed</h6>

						<div className=''>
							<FaTwitter className="mr-2 inline-block" />
							<p className='inline'>This is a very exclusive nightclub, that is known as NIGHT BIRD. I am really proud to be part of the Night Bird</p>
							<p className='font-bold'>9. November 2017</p>
						</div>
						<div className='my-5'>
							<FaTwitter className="mr-2 inline-block" />
							<p className='inline'>Night Bird presents some very famous artists and has special serving of food and drinks</p>
							<p className='font-bold'>12. November 2017</p>
						</div>
					</div>
					<div className="w-[21%]">
						<h6 className='font-bold capitalize my-4'>Instagram photos</h6>
						<div className='grid grid-cols-3 gap-4 h-60 w-60'>
							<Image src={footer_photo_1} alt="Photo 1" className=""></Image>
							<Image src={footer_photo_2} alt="Photo 2" className=""></Image>
							<Image src={footer_photo_3} alt="Photo 3" className=""></Image>
							<Image src={footer_photo_4} alt="Photo 4" className=""></Image>
							<Image src={footer_photo_5} alt="Photo 5" className=""></Image>
							<Image src={footer_photo_6} alt="Photo 6" className=""></Image>
							<Image src={footer_photo_7} alt="Photo 7" className=""></Image>
							<Image src={footer_photo_8} alt="Photo 8" className=""></Image>
							<Image src={footer_photo_9} alt="Photo 9" className=""></Image>
						</div>
					</div>
					<div className="w-1/4">
						<h6 className='font-bold capitalize my-4'>Sign up for newsletter</h6>
						<form className='flex flex-col'>
							<input type="text" placeholder='Your Name' className='bg-background border border-primary px-2 py-1 my-1'></input>
							<input type="text" placeholder='Your E-mail' className='bg-background border border-primary px-2 py-1 my-1'></input>
							<button type='submit' className='bg-accent text-primary px-2 py-1 my-1 text-lg'>Submit</button>
						</form>
						<h6 className='font-bold capitalize mb-4 mt-8'>Get social</h6>
						<div className='flex'>
							<Link href={'#'}>
								<div className="bg-transparent border border-primary rounded-full flex justify-center items-center w-10 h-10">
									<FaFacebookF />
								</div>
							</Link>
							<Link href={'#'} className='mx-2'>
								<div className="bg-transparent border border-primary rounded-full flex justify-center items-center w-10 h-10">
									<FaTwitter />
								</div>
							</Link>
							<Link href={'#'}>
								<div className="bg-transparent border border-primary rounded-full flex justify-center items-center w-10 h-10">
									<FaLinkedinIn />
								</div>
							</Link>
						</div>
					</div>
				</div>
				<hr className="border-t-[1px] border-primary mt-4" />
				<p className="flex justify-center items-center m-auto py-5">
					Copyright © {year}. All right reserved by
					<Link href="/" className="text-accent pl-1">
						NIGHT BIRD
					</Link>
				</p>
			</footer>
		</>
	)
}

export default Footer
