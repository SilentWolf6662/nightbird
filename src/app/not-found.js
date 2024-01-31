// `app/not-found.js` is the UI for the `404` URL
'use client';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import record from '../../public/img/record_not_found.png';
export default function NotFound() {
    const router = useRouter()
    return (
        <>
            <header className="bg-[url('/img/hm-gallery-bg.jpg')] bg-no-repeat text-primary h-72 flex justify-center">
                <div className="absolute bg-black bg-opacity-60 w-full h-72"></div>
                <div className="flex flex-col justify-center items-center z-10">
                    <h4 className="font-greatVibes text-5xl">404</h4>
                    <p className="text-2xl">Home {'>'} <span className="text-accent">404</span></p>
                </div>
            </header>
            <main className="bg-background text-primary">
                <section className="relative h-full flex-col justify-center items-center">
                    <div className='flex justify-center items-center pt-20'>
                        <h2 className="font-greatVibes text-[10rem]">4</h2>
                        <h2 className="font-greatVibes text-[10rem]">0</h2>
                        <Image src={record} className='w-32 h-32 hidden' />
                        <h2 className="font-greatVibes text-[10rem]">4</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center pt-10'>
                        <h2 className='text-6xl font-greatVibes text-center capitalize'>Opps!</h2>
                        <p className='text-2xl text-center'>Sorry, The page you are looking for is not found or doesn't</p>
                        <p className='text-2xl text-center'>exist or established.</p>
                        <button className='bg-accent text-primary px-11 py-2 uppercase font-dosis font-semibold text-lg mt-10' onClick={() => router.push('/')}>Go Back Home</button>
                    </div>
                </section>
                <section className="relative h-full flex-col justify-center items-center">
                </section>
            </main>
        </>
    )
}