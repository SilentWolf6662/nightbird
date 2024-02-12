// `app/about/page.jsx` is the UI for the `/about` URL
import Image from 'next/image';
import CustomHeader from './../../../components/CustomHeader'
import title_decor from './../../../../public/img/title_decor.png';
// region Import gallery photos
import gallery1 from './../../../../public/img/gallary-1.jpg';
import gallery2 from './../../../../public/img/gallary-2.jpg';
import gallery3 from './../../../../public/img/gallary-3.jpg';
import gallery4 from './../../../../public/img/gallary-4.jpg';
// endregion
export default function Gallery() {
    const galleryPhotos = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery3, gallery3]

    return (
        <>
            <CustomHeader title={'Gallery'} breadcrumb={['Home']} breadcrumbActive={'Gallery'} />
            <main className="bg-background text-primary">
                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <section className='justify-center items-center pt-10'>
                        <h2 className='text-4xl font-greatVibes text-center capitalize'>Night Bird’s Gallery</h2>
                        <figure className='flex flex-col justify-center items-center mt-2 mb-2'>
                            <Image draggable="false" dragstart="false" src={title_decor} height={20} alt='Title Decor' className='unselectable ' />
                        </figure>
                    </section>
                    <section className='h-fit pt-10'>

                        <div id='gallery' className='bg-repeat px-4 py-4 md:h-fit'>

                            {galleryPhotos.map((photo, index) => (
                                <figure key={`photo-${index + 1}`} id={`photo-${index + 1}`}>
                                    <Image draggable="false" dragstart="false" src={photo} alt={`Photo ${index + 1}`} className="unselectable "></Image>
                                </figure>
                            ))}
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}