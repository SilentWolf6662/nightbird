// `app/about/page.js` is the UI for the `/about` URL
'use client';
import Image from 'next/image';
import title_decor from '../../../public/img/title_decor.png';
// region Import footer photos
import footer_photo_1 from '../../../public/img/footer_photo_1.jpg';
import footer_photo_2 from '../../../public/img/footer_photo_2.jpg';
import footer_photo_3 from '../../../public/img/footer_photo_3.jpg';
import footer_photo_4 from '../../../public/img/footer_photo_4.jpg';
import footer_photo_5 from '../../../public/img/footer_photo_5.jpg';
import footer_photo_6 from '../../../public/img/footer_photo_6.jpg';
import footer_photo_7 from '../../../public/img/footer_photo_7.jpg';
import footer_photo_8 from '../../../public/img/footer_photo_8.jpg';
import footer_photo_9 from '../../../public/img/footer_photo_9.jpg';
// endregion
// region Import gallery photos
import gallery1 from '../../../public/img/gallary-1.jpg';
import gallery2 from '../../../public/img/gallary-2.jpg';
import gallery3 from '../../../public/img/gallary-3.jpg';
import gallery4 from '../../../public/img/gallary-4.jpg';
// endregion
export default function Gallery() {
    const galleryPhotos = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery3, gallery3]

    return (
        <>
            <header className="bg-[url('/img/hm-gallery-bg.jpg')] bg-no-repeat text-primary h-72 flex justify-center">
                <div className="absolute bg-black bg-opacity-60 w-full h-72"></div>
                <div className="flex flex-col justify-center items-center z-10">
                    <h1 className="font-greatVibes text-5xl">Gallery</h1>
                    <p className="text-2xl">Home {'>'} <span className="text-accent">Gallery</span></p>
                </div>
            </header>
            <main className="bg-background text-primary">
                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <section className='justify-center items-center pt-10'>
                        <h2 className='text-4xl font-greatVibes text-center capitalize'>Night Bird’s Gallery</h2>
                        <figure className='flex flex-col justify-center items-center mt-2 mb-2'>
                            <Image src={title_decor} height={20} alt='Title Decor' />
                        </figure>
                    </section>
                    <section className='pt-10'>

                        <div id='gallery' className='bg-repeat px-4 py-4'>

                            {galleryPhotos.map((photo, index) => (
                                <figure>
                                    <Image src={photo} alt={`Photo ${index + 1}`} className="" key={`photo-${index + 1}`} id={`photo-${index + 1}`}></Image>
                                </figure>
                            ))}
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}