// `app/about/page.js` is the UI for the `/about` URL
import Image from 'next/image';
import CustomHeader from '../components/CustomHeader';
import title_decor from '../../../public/img/title_decor.png';
export default function Members() {
    return (
        <>
            <CustomHeader title={'Members'} breadcrumb={['Home']} breadcrumbActive={'Members'} />
            <main className="bg-background text-primary">
                <article className="container relative h-fit flex-col justify-center items-center pb-96">
                    <section className='justify-center items-center pt-10'>
                        <h2 className='text-4xl font-greatVibes text-center capitalize'>Members</h2>
                        <figure className='flex flex-col justify-center items-center mt-2 mb-2'>
                            <Image src={title_decor} height={20} alt='Title Decor' />
                        </figure>
                    </section>
                </article>
            </main>
        </>
    )
}