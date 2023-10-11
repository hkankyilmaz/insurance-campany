"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'
import car_ from "../../_assets/Çalışma Yüzeyi 1_8.png"
import car from "../../_assets/Çalışma Yüzeyi 1_9.png"
import home_ from "../../_assets/Çalışma Yüzeyi 1_2.png"
import home from "../../_assets/Çalışma Yüzeyi 1_3.png"
import company_ from "../../_assets/Çalışma Yüzeyi 1_4.png"
import company from "../../_assets/Çalışma Yüzeyi 1_5.png"
import trip_ from "../../_assets/Çalışma Yüzeyi 1.png"
import trip from "../../_assets/Çalışma Yüzeyi 1_1.png"
import heart_ from "../../_assets/Çalışma Yüzeyi 1_6.png"
import heart from "../../_assets/Çalışma Yüzeyi 1_7.png"

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPerson } from 'react-icons/go';


import logo from "../../_assets/AKDAĞCI SİGORTA LOGO 750x350-100.jpg"
import gsap from "gsap"

export default function Header() {

    const [menu, setMenu] = React.useState(true)

    const pathname = usePathname()
    const ref = React.useRef()
    const ref_ = React.useRef()

    const onEnter = () => window.innerWidth > 750 && gsap.to(ref.current, { height: "105px", duration: 0.1 })
    const onLeave = () => window.innerWidth > 750 && gsap.to(ref.current, { height: "74px", duration: 0.1 })
    const handleClickOpen = () => {
        setMenu(prev => !prev)
        gsap.to(ref.current, { height: "100vh", duration: 0.1 })
        gsap.to(ref_.current, { display: "flex", duration: 0.1, delay: 0.2 })
    }
    const handleClickClose = () => {
        setMenu(prev => !prev)
        gsap.to(ref.current, { height: "70px", duration: 0.1 })
        gsap.to(ref_.current, { display: "none", duration: 0.1 })
    }



    return (
        <header ref={ref} className={`${styles.container} shadow-lg py-2 fixed left-0 top-0 right-0 z-10 max-md:h-[70px] overflow-hidden max-md:bg-white max-md:bottom-0 max-md:flex max-md:flex-col max-md-justify-center max-md:items-start`}>
            <Link className='flcenter' href={"/"} >  <div className='absolute max-md:left-1 top-[20px] left-0 text-black z-10 !flex flcenter'> <Image className='translate-y-[-8px] max-md:translate-x-[-30px] max-md:w-[175px] ' width={200} src={logo} /> </div></Link>
            <div ref={ref_} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ visibility: pathname == "/oturumac" ? "hidden" : "" }} className='max-md:hidden flex justify-center items-start max-md:m-auto max-md:flex-col max-md-justify-start max-md:items-start max-md:[&>a]:mb-5' >
                <Link className='flex flex-col max-md:items-start justify-center items-center m-link' href={"/arac"} >
                    <Image className={`max-w-[50px] ${styles.fimg}`} src={pathname == "/car" ? car : car_} />
                    <Image className={`max-w-[50px] hidden ${styles.simg}`} src={car} />
                    <div className='menu-item md:absolute md:top-[65%]' >
                        <div>Arabam</div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link className='flex flex-col max-md:items-start justify-center items-center m-link' href={"/ev"} >
                    <Image className={`max-w-[50px] ${styles.fimg}`} src={pathname == "/ev" ? home : home_} />
                    <Image className={`max-w-[50px] hidden ${styles.simg}`} src={home} />
                    <div className='menu-item md:absolute md:top-[65%]' >
                        <div> Evim </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link className='flex flex-col max-md:items-start justify-center items-center m-link' href={"/isyeri"}>
                    <Image className={`max-w-[50px] ${styles.fimg}`} src={pathname == "/isyeri" ? company : company_} />
                    <Image className={`max-w-[50px] hidden ${styles.simg}`} src={company} />
                    <div className='menu-item md:absolute md:top-[65%]'>
                        <div> İşyerim </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link className='flex flex-col max-md:items-start justify-center items-center m-link' href={"/seyahat"}>
                    <Image className={`max-w-[50px] ${styles.fimg}`} src={pathname == "/seyahat" ? trip : trip_} />
                    <Image className={`max-w-[50px] hidden ${styles.simg}`} src={trip} />
                    <div className='menu-item md:absolute md:top-[65%]'>
                        <div> Seyahatim </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link className='flex flex-col max-md:items-start justify-center items-center m-link' href={"/saglik"} >
                    <Image className={`max-w-[50px] ${styles.fimg}`} src={pathname == "/saglik" ? heart : heart_} />
                    <Image className={`max-w-[50px] hidden ${styles.simg}`} src={heart} />
                    <div className='menu-item md:absolute md:top-[65%]'>
                        <div> Sağlığım </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
            </div>
            {
                !menu ? <button onClick={(e) => handleClickClose(e)} className='absolute top-4 right-4' >
                    <AiOutlineCloseCircle className='text-4xl md:hidden' />
                </button>
                    : <button onClick={(e) => handleClickOpen(e)} className='absolute top-4 right-4' >
                        < GiHamburgerMenu className='text-4xl md:hidden' />
                    </button>
            }
            <Link href={"/oturumac"} className='absolute top-5 right-10' > <GoPerson className=' max-md:hidden text-3xl cursor-pointer' /></Link>

        </header>
    )
}
