import React from 'react'
import Image from 'next/image';


function SectionFive() {
    return (
        <section className='w-[100vw] max-md:pb-[25px] md:mb-10 flex flex-col justify-start items-center md:pt-[100px]' >


            <div className='max-w-[1500px]'>
                <h1 className='text-xl font-bold md:text-2xl text-center mb-5 md:mb-10 ' >Bilgi Köşesi</h1>
                <div className='grid grid-cols-3 gap-x-10 gap-y-10 max-xl:grid-cols-2 max-md:grid-cols-1' >
                    <Card
                        url={'/blog/dask-nedir-daskin-onemi'}
                        variety={'Ev Sigortası'}
                        title={'DASK Nedir? DASK’ın Önemi Nedir ?'}
                        date={'03.01.2024'}


                    />
                    <Card
                        url={'/blog/konut-sigortasi-nelerden-korur'}
                        variety={'Ev Sigortası'}
                        title={'Konut Sigortası Nelerden Korur ?'}
                        date={'05.01.2021'}
                    />
                    <Card
                        url={'/blog/kasko-yaparken-nelere-dikkat-edilmeli'}
                        variety={'Taşıt Sigortası'}
                        title={'Kasko Yaparken Nelere Dikkat Edilmeli ? '}
                        date={'10.01.2021'}
                    />
                    <Card
                        url={'/blog/trafik-sigortasi-nedir'}
                        variety={'Trafik Sigortası'}
                        title={'Trafik Sigortası Nedir ?'}
                        date={'15.01.2021'}
                    />
                    <Card
                        url={'/blog/seyahat-sigortasinin-faydalari'}
                        variety={'Seyahat Sigortası'}
                        title={'Seyahat Sıgortasının Faydaları ?'}
                        date={'18.01.2021'}
                    />
                    {/* <Card />
                    <Card />
                    <Card />
                    <div className='max-xl:hidden' >
                        <Card />
                    </div>
                    <div className='max-xl:hidden' >
                        <Card />
                    </div> */}


                </div>
            </div>

        </section>
    )
}

export default SectionFive





import { CgCalendarDates } from 'react-icons/cg';
import { HiOutlineDocumentText } from 'react-icons/hi';
import image from "../../_assets/fff.jpeg"
import Link from 'next/link';


function Card({ url, variety, title, date }) {
    return (
        <Link href={url} className='max-md:mx-3'>
            <div className='md:w-[400px] border shadow-xl rounded-t-md bg-white hover:scale-[1.03] transition-all duration-[0.5s] cursor-pointer hover:shadow-xl hover:shadow-orange-300 '>
                <Image className='w-full rounded-t-md' src={image} />
                <div className='flex justify-between border-l-[30px] px-2 border-l-orange-400 pb-4 h-[80px]' >
                    <div className=''>
                        <p className='mb-1 font-bold text-sm'> {variety} </p>
                        <p className='flex justify-start item-start text-sm' > <HiOutlineDocumentText color='red' className='text-lg' /> <span className='ml-1' > {title} </span></p>
                    </div>
                    <div>
                        <p className='flex items-center mt-1'> <CgCalendarDates color='red' className='text-lg' /> <span className='ml-1 text-xs' > {date} </span> </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}