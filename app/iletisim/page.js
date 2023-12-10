import React from 'react'


import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import Footer from '../_components/Footer/Index';




function Contact() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>

                <div className='h-[400px] w-[100vw] bg-cover bg-top bg-orange-300 flex justify-center items-start pt-[120px]'  >
                    <h1 className='text-white text-4xl' >İletişim</h1>
                </div>
                <div className=' md:h-[70vh] xl:w-[1200px] flex space-x-10 justify-center items-start pt-20 z-[5] shadow-2xl shadow-slate-600 px-5 py-12 rounded-2xl translate-y-[-200px] bg-white' >

                    <div className='flex max-lg:flex-col max-lg:space-y-12 justify-center items-center lg:space-x-16 text-slate-600'>
                        <div >
                            <h3 className='text-xs italic mb-1 text-black font-light' >Her Konu Hakkında Bize Ulaşın...</h3>
                            <h2 className='text-3xl md:text-4xl mb-2 ' >İletişim Bilgileri</h2>
                            <div className='flex items-center space-x-2' >
                                <AiFillPhone className='text-3xl text-black' />
                                <div className='text-normal'>0212 655 69 55</div>
                            </div>
                            <div className='flex items-center space-x-2' >
                                <AiOutlineMail className='text-3xl text-black' />
                                <div className='text-normal' >akdagcisigorta@gmail.com</div>
                            </div>
                            <div className='flex  items-center space-x-2' >
                                <MdLocationOn className='text-3xl text-black' />
                                <div className='text-normal' >Muammer Sencer Cd. No:60E Hendek Sakarya 54300</div>

                            </div>

                        </div>
                        <div>
                            {/* <iframe
                                className='w-[85vw] md:w-[500px] h-[300px] md:h-[400px]'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.9865670843938!2d28.82660829781906!3d41.03819579598244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa51d20943d5b%3A0x1a73116138602dcf!2zR8O8bmXFn2xpLCBPdmEgU2suLCAzNDIxMiBCYcSfY8SxbGFyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1682841921659!5m2!1str!2str"
                                allowfullscreen
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                frameBorder="0"
                            ></iframe> */}
                            <iframe
                                className='w-[85vw] md:w-[500px] h-[300px] md:h-[400px]'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41899.17674664557!2d30.417979767322045!3d40.714779801037736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb3a0b41d763f%3A0xf568e1b106e6d5c5!2sAyhan%20Akdagci%20S%C4%B1gorta!5e0!3m2!1str!2str!4v1702227268710!5m2!1str!2str"
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )
}

export default Contact