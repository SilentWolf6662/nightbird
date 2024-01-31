// `app/blog/detailTemplate/page.js` is the UI for the `/blog/detailTemplate` URL
'use client';
import Image from 'next/image';
import title_decor from '../../../public/img/title_decor.png';
export default function BlogDetail() {
    return (
        <>
            <header className="bg-[url('/img/hm-gallery-bg.jpg')] bg-no-repeat text-primary h-72 flex justify-center">
                <div className="absolute bg-black bg-opacity-60 w-full h-72"></div>
                <div className="flex flex-col justify-center items-center z-10">
                    <h1 className="font-greatVibes text-5xl">Blog</h1>
                    <p className="text-2xl">Home {'>'} Blog {'>'} <span className="text-accent">Blog Details View</span></p>
                </div>
            </header>
            <main className="bg-background text-primary">
                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <section className='justify-center items-center pt-10'>
                        <h2 className='text-4xl font-greatVibes text-center capitalize'>Night Bird’s Blog</h2>
                        <figure className='flex flex-col justify-center items-center mt-2 mb-2'>
                            <Image src={title_decor} height={20} alt='Title Decor' />
                        </figure>
                    </section>
                </article>
            </main>
        </>
    )
}