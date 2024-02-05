// `app/about/page.js` is the UI for the `/about` URL
import Image from 'next/image';
import CustomHeader from '../components/CustomHeader';
import { formatDate, getCurDate } from '../components/Helpers';
import EventTimer from '../components/Timers';
import title_decor from '../../../public/img/title_decor.png';
import { FaCalendarAlt } from "react-icons/fa";
import eventImg1 from '../../../public/img/event1.jpg';
import eventImg2 from '../../../public/img/event2.jpg';
import eventImg3 from '../../../public/img/event3.jpg';
export default function Events() {
    return (
        <>
            <CustomHeader title={'Events'} breadcrumb={['Home']} breadcrumbActive={'Events'} />
            <main className="bg-background text-primary">
                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <section className='justify-center items-center pt-10'>
                        <h2 className='text-4xl font-greatVibes text-center capitalize'>Night Bird’s upcoming Events</h2>
                        <figure className='flex flex-col justify-center items-center mt-2 mb-2'>
                            <Image src={title_decor} height={20} alt='Title Decor' />
                        </figure>
                    </section>
                    <section className='flex flex-row justify-evenly mt-10'>
                        <figure className='w-1/2'>
                            <Image src={eventImg1} height={324} alt="event photo" className='' />
                        </figure>
                        <div className='flex flex-col justify-center items-start ml-10 w-1/2'>
                            <h3 className='uppercase font-bold'>Refresh your mind with Night Bird</h3>
                            <div className='text-primary/80 text-center flex justify-center items-baseline'>
                                <FaCalendarAlt className="mr-1 inline-block" />
                                <p className='inline'>{formatDate(getCurDate("26 Oct 2017"))}</p>
                            </div>
                            <p className='text-primary/80 mb-2 mt-4'>
                                This event will be held on the twenty sixth of October 2017. It starts at 9:00 p.m. We will here give you an evening with your favorite songs. That is if you are in your nostalgic corner. Because we will be listening to some very famous evergreens. You have here great opportunity for experience some of our best artists performing at their best in giving you a great experience. You will as always be able to order a great four-meal course, which you can enjoy while you are listening.
                            </p>
                            <div className='font-greatVibes'>
                                <p className='inline mr-4'>
                                    $ 210
                                </p>
                                <p className='inline'>
                                    Starts at: 09:00 p.m.
                                </p>
                            </div>
                            <EventTimer eventDate={`${getCurDate("26 Oct 2017")} 21:00:00`} />
                        </div>
                    </section>
                    <section className='flex flex-row-reverse justify-evenly mt-10'>
                        <figure className='w-1/2'>
                            <Image src={eventImg2} height={324} alt="event photo" className='' />
                        </figure>
                        <div className='flex flex-col justify-center items-start mr-10 w-1/2'>
                            <h3 className='uppercase font-bold'>Christmas Event With Gloria Westlake</h3>
                            <div className='text-primary/80 text-center flex justify-center items-baseline'>
                                <FaCalendarAlt className="mr-1 inline-block" />
                                <p className='inline'>{formatDate(getCurDate("12 Jan 2017"))}</p>
                            </div>
                            <p className='text-primary/80 mb-2 mt-4'>
                                Here you have the biggest event of the year. We have managed to get the great singer Gloria Westlake, who will be singeing all our lovely Christmas Songs and carols. The event is on the first of December and it starts at 6 p.m. You have a unique chance of starting the evening with a delicious four-meal course with champagne. Here you have the biggest event of the year. We have managed to get the great singer Gloria Westlake, who will be singeing all our lovely Christmas Songs and carols. The event is on the first of December and it starts at 6 p.m. You have a unique chance of starting the evening with a delicious four-meal course with champagne.
                            </p>
                            <div className='font-greatVibes'>
                                <p className='inline mr-4'>
                                    $ 600
                                </p>
                                <p className='inline'>
                                    Starts at: 07:00 p.m.
                                </p>
                            </div>
                            <EventTimer eventDate={`${getCurDate("12 Jan 2017")} 19:00:00`} />
                        </div>
                    </section>
                    <section className='flex flex-row mt-10 justify-evenly'>
                        <figure className='w-1/2'>
                            <Image src={eventImg3} height={324} alt="event photo" className='' />
                        </figure>
                        <div className='flex flex-col justify-start items-start ml-10 w-1/2'>
                            <h3 className='uppercase font-bold'>A night with Gloria McDonnell</h3>
                            <div className='text-primary/80 text-center flex justify-center items-baseline'>
                                <FaCalendarAlt className="mr-1 inline-block" />
                                <p className='inline'>{formatDate(getCurDate("11 April 2017"))}</p>
                            </div>
                            <p className='text-primary/80 mb-2 mt-4'>
                                On the fourth of November at 8:00 p.m., you have a very big chance of seeing the great singer Gloria McDonnell. She will be performing her greatest hits and she will perform some of her latest songs. The Master’s Orchestra will accompany her. On the fourth of November at 8:00 p.m., you have a very big chance of seeing the great singer Gloria McDonnell. She will be performing her greatest hits and she will perform some of her latest songs. The Master’s Orchestra will accompany her. On the fourth of November at 8:00 p.m., you have a very big chance of seeing the great singer Gloria McDonnell. She will be performing her greatest hits and she will perform some of her latest songs. The Master’s Orchestra will accompany her.
                            </p>
                            <div className='font-greatVibes'>
                                <p className='inline mr-4'>
                                    $ 250
                                </p>
                                <p className='inline'>
                                    Starts at: 08:00 p.m.
                                </p>
                            </div>
                            <EventTimer eventDate={`${getCurDate("11 April 2017")} 20:00:00`} />
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}