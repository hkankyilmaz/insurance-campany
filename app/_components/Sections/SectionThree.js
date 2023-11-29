"use client"
import React from 'react'
import { BsSendFill } from 'react-icons/bs';
import { GoGitCompare } from 'react-icons/go';
import { AiFillCreditCard } from 'react-icons/ai';
import { motion } from 'framer-motion';

function SectionThree() {
    return (
        <section className='w-[100vw] md:pt-[100px] max-md:py-[0px] px-[25px] lg:px-[200px] xl:px-[300px] flex flex-col justify-start items-center relative' >
            <p className='font-bold text-2xl max-md:text-lg my-4' >Nasıl Çalışır?</p>
            <motion.div
                className='max-md:flex-col  md:flcenter'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <video className='md:hidden w-[300px] max-md:w-[200px] max-md:m-auto' ty src={"https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/hakan%2Fakdag%CC%86c%C4%B1%20sigorta%20kopyas%C4%B1.mp4?alt=media&token=951223ea-6abd-4da9-82c1-3c9f1cb21c3f&_gl=1*1kixezl*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5Njc3MDEwMC43LjEuMTY5Njc3MDIxOC4zNy4wLjA."} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                    <track kind='caption' />
                </video>
                <div className=' md:mr-20 max-md:mt-7'  >
                    <div className='flex items-center  mb-5 md:mb-10'>
                        <div className='mb-2 mr-4 md:mr-6'>  <div className='w-20 h-20 flcenter max-md:w-10 max-md:h-10 border rounded-full' ><BsSendFill className='max-md:text-xl text-4xl' /></div>  </div>
                        <div>
                            <h2 className='mb-2 md:text-xl max-md:text-normal  font-bold' >Teklif Alın </h2>
                            <p className='max-md:text-sm text-md mb-2'>İhtiyacınız olan sigorta poliçesi formunu doldurun ve gönderin. Birkaç dakika içerisinde satış temsilcimiz en iyi tekliflerle gelsin.</p>
                        </div>
                    </div>

                    <div className='flex mb-5 md:mb-10 items-center'>
                        <div className='mb-2 mr-4 md:mr-6'  >  <div className='w-20 h-20 flcenter max-md:w-10 max-md:h-10  border rounded-full' > <GoGitCompare className='max-md:text-xl text-4xl' /> </div>  </div>
                        <div>
                            <h2 className='mb-2 md:text-xl max-md:text-normal font-bold'>Karşılaştırın</h2>
                            <p className='max-md:text-sm text-md mb-2' >Satış temsilcimizin size sunduğu detaylı teklifleri karşılaştırın ve size en uygun poliçeyi seçin. Seçim sürecinde de yanınızdayız.</p>
                        </div>
                    </div>

                    <div className='flex mb-5 md:mb-10items-center'>
                        <div className='mb-2 mr-4 md:mr-6' >  <div className='w-20 h-20 flcenter max-md:w-10 max-md:h-10  border rounded-full' > <AiFillCreditCard className='max-md:text-xl text-4xl' /> </div>  </div>
                        <div>
                            <h2 className='max-md:text-normal mb-2 md:text-xl font-bold' >Güvenle Ödeyin</h2>
                            <p className='max-md:text-sm text-md mb-2' >Seçtiğiniz poliçeyi web sitemizden güvenle ödeyin. Poliçenizi dijital belge veya basılı belge olarak temin edebilirsiniz.</p>
                        </div>
                    </div>
                </div>
                <video className='max-md:hidden w-[300px] max-md:w-[200px] max-md:m-auto' ty src={"https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/hakan%2Fakdag%CC%86c%C4%B1%20sigorta%20kopyas%C4%B1.mp4?alt=media&token=951223ea-6abd-4da9-82c1-3c9f1cb21c3f&_gl=1*1kixezl*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5Njc3MDEwMC43LjEuMTY5Njc3MDIxOC4zNy4wLjA."} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                    <track kind='caption' />
                </video>
            </motion.div>



        </section>
    )
}

export default SectionThree






