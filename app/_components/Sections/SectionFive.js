import React from 'react'
import Image from 'next/image';


function SectionFive() {
    return (
        <section className='md:min-h-[900px] w-[100vw] max-md:pb-[25px] md:h-[100vh] md:pt-[100px] flex flex-col justify-start items-center' >


            <div className='max-w-[1500px]'>
                <h1 className='text-xl font-bold md:text-2xl text-center mb-5 md:mb-10 ' >Blog</h1>
                <div className='grid grid-cols-3 gap-x-10 gap-y-10 max-xl:grid-cols-2 max-md:grid-cols-1' >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className='max-xl:hidden' >
                        <Card />
                    </div>
                    <div className='max-xl:hidden' >
                        <Card />
                    </div>


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


function Card() {
    return (
        <Link href={"/blog/deneme"} >
            <div className='w-[350px] border shadow-xl rounded-t-md bg-white hover:scale-[1.03] transition-all duration-[0.5s] cursor-pointer hover:shadow-xl hover:shadow-orange-300 '>
                <Image className='w-full rounded-t-md' src={image} />
                <div className='flex justify-between border-l-[30px] px-2 border-l-orange-400 pb-4' >
                    <div className=''>
                        <p className='mb-1 font-bold text-sm'>Genel Sigorta</p>
                        <p className='flex justify-start items-center text-xs' > <HiOutlineDocumentText color='red' className='text-lg' /> <span className='ml-1' > Sigorta Yaptirmanin Onemi</span></p>
                    </div>
                    <div>
                        <p className='flex items-center mt-1'> <CgCalendarDates color='red' className='text-lg' /> <span className='ml-1 text-xs' >04-10-2023</span> </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}