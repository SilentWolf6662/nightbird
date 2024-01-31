// `app/about/page.js` is the UI for the `/about` URL
import Image from 'next/image';
import title_decor from '../../../public/img/title_decor.png';
import { FaCalendarAlt } from "react-icons/fa";
import eventImg1 from '../../../public/img/event1.jpg';
import eventImg2 from '../../../public/img/event2.jpg';
import eventImg3 from '../../../public/img/event3.jpg';
export default function Events() {
    return (
        <>
            <header className="bg-[url('/img/hm-gallery-bg.jpg')] bg-no-repeat text-primary h-72 flex justify-center">
                <div className="absolute bg-black bg-opacity-60 w-full h-72"></div>
                <div className="flex flex-col justify-center items-center z-10">
                    <h1 className="font-greatVibes text-5xl">Events</h1>
                    <p className="text-2xl">Home {'>'} <span className="text-accent">Events</span></p>
                </div>
            </header>
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
                                <p className='inline'>{formatDate(getCurDate("26. October 2017"))}</p>
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
                            <div className='flex gap-16 mt-5 text-center'>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-days'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Days
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-hours'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Hours
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-mins'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Mins
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-secs'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Secs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='flex flex-row-reverse justify-evenly mt-10'>
                        <figure className='w-1/2'>
                            <Image src={eventImg2} height={324} alt="event photo" className='' />
                        </figure>
                        <div className='flex flex-col justify-center items-start mr-10 w-1/2'>
                            <h3 className='uppercase font-bold'>Christmas Event With Gloria Westlake</h3>
                            <div className='text-primary/80 text-center flex justify-center items-baseline'>
                                <FaCalendarAlt className="mr-1 inline-block" />
                                <p className='inline'>{formatDate(getCurDate("01.12.2017"))}</p>
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
                            <div className='flex gap-16 mt-5 text-center'>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-days'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Days
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-hours'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Hours
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-mins'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Mins
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-secs'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Secs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-10 justify-evenly'>
                        <figure className='w-1/2'>
                            <Image src={eventImg3} height={324} alt="event photo" className='' />
                        </figure>
                        <div className='flex flex-col justify-start items-start ml-10 w-1/2'>
                            <h3 className='uppercase font-bold'>A night with Gloria McDonnell</h3>
                            <div className='text-primary/80 text-center flex justify-center items-baseline'>
                                <FaCalendarAlt className="mr-1 inline-block" />
                                <p className='inline'>{formatDate(getCurDate("04.11.2017"))}</p>
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
                            <div className='flex gap-16 mt-5 text-center'>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-days'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Days
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-hours'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Hours
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-mins'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Mins
                                    </p>
                                </div>
                                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                                    <p className='font-greatVibes font-semibold' id='event1-cd-secs'>
                                        00
                                    </p>
                                    <p className='font-arial'>
                                        Secs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

function getCurDate(date) {
    let yourDate = new Date(date)
    yourDate.toISOString().split('T')[0]
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000))
    return yourDate.toISOString().split('T')[0]
}

function formatDate(date) {
    let dateToFormat = new Date(date),
        dateString = "",
        month = `${dateToFormat.getMonth() + 1}`,
        day = `${dateToFormat.getDate()}`,
        year = dateToFormat.getFullYear(),
        monthName = dateToFormat.toLocaleString('default', { month: 'long' });

    if (month.length < 2)
        month = `0${month}`;
    if (day.length < 2)
        day = `0${day}`;

    dateString = `${day}. ${monthName} ${year}`;

    return dateString;
}