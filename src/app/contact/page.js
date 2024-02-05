// `app/contact/page.js` is the UI for the `/contact` URL
import Image from 'next/image';
import CustomHeader from '../components/CustomHeader';
import title_decor from '../../../public/img/title_decor.png';
import { FaPhone, FaEnvelope, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';
export default function Contact() {
    return (
        <>
            <CustomHeader title={'Contact'} breadcrumb={['Home']} breadcrumbActive={'Contact Us'} />
            <main className="bg-background text-primary/70">
                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <div className='text-center'>
                        <iframe className='border-0 w-screen h-96 opacity-20 -translate-x-28' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.819645462865!2d-73.98660063145172!3d40.74399390288372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7947677c7%3A0x6ca582940796d1d0!2s420%20Park%20Ave%20S%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sda!2sus!4v1707173206846!5m2!1sda!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <ul className='py-20 flex flex-row absolute top-8'>
                            <li className="flex flex-col items-center">
                                <div className="bg-primary rounded-full flex justify-center items-center w-10 h-10">
                                    <FaMapMarkerAlt className="text-accent" />
                                </div>
                                <div className='m-2'>
                                    <p className='m-2'>420, Park Syreet Road. Newyork City <br /> America</p>
                                    <p className='m-2'>840, Oranjestid, St. Francisco, Aruba <br /> North America</p>
                                </div>
                            </li>
                            <li className="flex flex-col items-center">
                                <div className="bg-primary rounded-full flex justify-center items-center w-10 h-10">
                                    <FaPhone className="text-accent" />
                                </div>
                                <div className='grid grid-cols-2 m-2'>
                                    <p className='m-2'>+880 1223 5678,</p>
                                    <p className='m-2'>+880 8765 4321</p>
                                    <p className='m-2'>+880 2589 7852,</p>
                                    <p className='m-2'>+880 7852 9852</p>
                                </div>
                            </li>
                            <li className="flex flex-col items-center">
                                <div className="bg-primary rounded-full flex justify-center items-center w-10 h-10">
                                    <FaEnvelope className="text-accent" />
                                </div>
                                <div className='grid grid-cols-2 m-2'>
                                    <p className='m-2'>nightbird@admin.com,</p>
                                    <p className='m-2'>user@admin.com</p>
                                    <p className='m-2'>admin@nightbird.com,</p>
                                    <p className='m-2'>admin@user.com</p>
                                </div>
                            </li>
                            <li className="flex flex-col items-center">
                                <div className="bg-primary rounded-full flex justify-center items-center w-10 h-10">
                                    <FaGlobeAmericas className="text-accent" />
                                </div>
                                <div className='grid grid-cols-2 m-2'>
                                    <p className='m-2'>www.nightbird.com,</p>
                                    <p className='m-2'>www.nightbirdbd.com</p>
                                    <p className='m-2'>www.admin.com,</p>
                                    <p className='m-2'>www.use.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <section className='justify-center items-center pt-10'>
                        <h2 className='text-4xl font-greatVibes text-center capitalize'>Leave a comment</h2>
                        <figure className='flex flex-col justify-center items-center mt-2 mb-2'>
                            <Image src={title_decor} height={20} alt='Title Decor' />
                        </figure>
                    </section>
                </article>
            </main>
        </>
    )
}