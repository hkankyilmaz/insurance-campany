import React from 'react'
import Image from 'next/image';


function SectionFive() {
    return (
        <section className='w-[100vw] h-[100vh] pt-[100px] flex flex-col justify-start items-center' >


            <div className='max-w-[1500px]'>
                <h1 className='text-2xl text-center mb-10 border-b border-b-[orange] pb-1' >Blog Yazilarimiz</h1>
                <div className='grid grid-cols-3 gap-x-10 gap-y-10' >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

        </section>
    )
}

export default SectionFive





import { CgCalendarDates } from 'react-icons/cg';
import { GrDocumentText } from 'react-icons/gr';
import image from "../../_assets/fff.jpeg"


function Card() {
    return (
        <div className='w-[350px] border shadow-xl rounded-t-md bg-white'>
            <Image className='w-full rounded-t-md' src={image} />
            <div className='flex justify-between border-l-[30px] px-2 border-l-orange-400 pb-4' >
                <div className=''>
                    <p className='mb-1 font-bold'>Genel Sigorta</p>
                    <p className='flex justify-start items-center' > <GrDocumentText /> <span className='ml-1' > Sigorta Yaptirmanin Onemi</span></p>
                </div>
                <div>
                    <p className='flex items-center'> <CgCalendarDates /> <span className='ml-1' >04-10-2023</span> </p>
                </div>
            </div>
        </div>
    )
}