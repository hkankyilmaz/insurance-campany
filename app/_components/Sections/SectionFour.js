"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from "framer-motion"

function SectionFour() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const [count, setCount] = useState({ first: 0, second: 0, third: 0, fourth: 0 })


    useEffect(() => {

    }, [isInView])

    return (
        <section className='md:min-h-[900px] flex flex-col justify-start items-center md:h-[100vh] w-[100vw] pt-[50px] md:pt-[150px] relative' >


            <div ref={ref} className='max-md:px-5 max-lg:gap-y-2 max-lg:grid grid-cols-2 lg:flex lg:justify-center lg:items-center mb-10 md:mb-20 ' >


                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='_increament-item'
                >
                    <p>10.000+</p>
                    <p>Müşteri</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='_increament-item'
                >
                    <p>30+</p>
                    <p>Yıllık Sektör Deneyimi</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='_increament-item'
                >
                    <p>25</p>
                    <p>Marka İşbirliği</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='_increament-item'
                >
                    <p>60.000+</p>
                    <p>Kesilen Poliçe</p>
                </motion.div>



            </div>
            <h2 className='max-md:text-lg font-bold text-2xl text-center mb-3'>Aracılık Ettiğimiz Kurumlar</h2>
            <p className='text-center text-lg max-md:text-xs max-w-[1000px] md:mb-20'>
                Sigorta, gelecekte mülk ya da bireylerin maddi hasar alması halinde en başta teminat altına alınan tutarın sigorta şirketi tarafından sigortalı bireye/şirkete ödenmesidir.
                Ayhan Akdağcı Sigorta 25'ten fazla marka ile etkin çalışarak sizin için en iyi teklifi hızla hazırlar.
            </p>
            <TickerContainer />
        </section>
    )
}

export default SectionFour



import brand1 from "../../_assets/Çalışma Yüzeyi 1-100.jpg"
import brand2 from "../../_assets/Çalışma Yüzeyi 1_1-100.jpg"
import brand3 from "../../_assets/Çalışma Yüzeyi 1_2-100.jpg"
import brand4 from "../../_assets/Çalışma Yüzeyi 1_3-100.jpg"
import brand5 from "../../_assets/Çalışma Yüzeyi 1_4-100.jpg"
import brand6 from "../../_assets/Çalışma Yüzeyi 1_5-100.jpg"
import brand7 from "../../_assets/Çalışma Yüzeyi 1_6-100.jpg"
import brand8 from "../../_assets/Çalışma Yüzeyi 1_7-100.jpg"
import brand9 from "../../_assets/Çalışma Yüzeyi 1_8-100.jpg"
import brand10 from "../../_assets/Çalışma Yüzeyi 1_9-100.jpg"
import brand11 from "../../_assets/Çalışma Yüzeyi 1_10-100.jpg"
import brand12 from "../../_assets/Çalışma Yüzeyi 1_11-100.jpg"
import brand13 from "../../_assets/Çalışma Yüzeyi 1_12-100.jpg"
import brand14 from "../../_assets/Çalışma Yüzeyi 1_13-100.jpg"
import brand15 from "../../_assets/Çalışma Yüzeyi 1_14-100.jpg"
import brand16 from "../../_assets/Çalışma Yüzeyi 1_15-100.jpg"
import brand17 from "../../_assets/Çalışma Yüzeyi 1_16-100.jpg"
import brand18 from "../../_assets/Çalışma Yüzeyi 1_17-100.jpg"
import brand19 from "../../_assets/Çalışma Yüzeyi 1_18-100.jpg"
import brand20 from "../../_assets/Çalışma Yüzeyi 1_19-100.jpg"
import brand21 from "../../_assets/Çalışma Yüzeyi 1_20-100.jpg"
import brand22 from "../../_assets/Çalışma Yüzeyi 1_21-100.jpg"
import brand23 from "../../_assets/Çalışma Yüzeyi 1_22-100.jpg"
import brand24 from "../../_assets/Çalışma Yüzeyi 1_23-100.jpg"
import brand25 from "../../_assets/Çalışma Yüzeyi 1_24-100.jpg"
import brand26 from "../../_assets/Çalışma Yüzeyi 1_25-100.jpg"
import brand27 from "../../_assets/Çalışma Yüzeyi 1_26-100.jpg"
import brand28 from "../../_assets/Çalışma Yüzeyi 1_27-100.jpg"
import brand29 from "../../_assets/Çalışma Yüzeyi 1_28-100.jpg"
import brand30 from "../../_assets/Çalışma Yüzeyi 1_29-100.jpg"
import brand31 from "../../_assets/Çalışma Yüzeyi 1_30-100.jpg"


function TickerContainer() {

    const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20, brand21, brand22, brand23, brand24, brand25, brand26, brand27, brand28, brand29, brand30, brand31]

    return (
        <div className='ticker-container'>
            <div className='ticker-viewer overflow-viewer'>
                <div className='ticker-scroll infinite-animation delay-animation flex' >
                    {images.map((item, i) => (
                        <Image alt='Brand-Image' className='max-w-[250px] mr-5' src={item} key={i} />
                    ))}
                </div>
                <div className='ticker-scroll infinite-animation delay-animation flex' >
                    {images.map((item, i) => (
                        <Image alt='Brand-Image' className='max-w-[250px] mr-5' src={item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}