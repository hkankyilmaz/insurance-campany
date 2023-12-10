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
import { useSession } from "next-auth/react"

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPerson } from 'react-icons/go';
import { PiSignInFill } from 'react-icons/pi';
import { signOut } from 'next-auth/react'
import { IoHomeOutline } from "react-icons/io5";


import logo from "../../_assets/AKDAĞCI SİGORTA LOGO 750x350-100.jpg"
import gsap from "gsap"

export default function Header() {
    const { data: session, status } = useSession()
    console.log(session)
    const [menu, setMenu] = React.useState(true)

    const pathname = usePathname()
    const ref = React.useRef()
    const ref_ = React.useRef()

    const onEnter = () => window.innerWidth > 768 && gsap.to(ref.current, { height: "105px", duration: 0.1 })
    const onLeave = () => window.innerWidth > 768 && gsap.to(ref.current, { height: "74px", duration: 0.1 })
    const handleClickOpen = () => {
        if (window.innerWidth < 768) {
            setMenu(prev => !prev)
            gsap.to(ref.current, { height: "100vh", duration: 0.1 })
            gsap.to(ref_.current, { display: "flex", duration: 0.1, delay: 0.2 })
        }

    }
    const handleClickClose = () => {
        if (window.innerWidth < 768) {
            setMenu(prev => !prev)
            gsap.to(ref.current, { height: "70px", duration: 0.1 })
            gsap.to(ref_.current, { display: "none", duration: 0.1 })
        }

    }



    return (
        <header onMouseEnter={onEnter} onMouseLeave={onLeave} ref={ref} className={`${styles.container} shadow-lg py-2 fixed left-0 top-0 right-0  max-md:h-[70px] overflow-hidden max-md:bg-white max-md:bottom-0 max-md:flex max-md:flex-col max-md-justify-center max-md:items-start z-[111]`}>
            <a className='flcenter' href={"/"} >  <div className='absolute max-md:left-1 top-[20px] left-0 text-black z-10 !flex flcenter'> <Image className='translate-y-[-8px] max-md:translate-x-[-30px] max-md:w-[175px] ' width={200} src={logo} /> </div></a>
            <div ref={ref_} className='max-md:hidden flex justify-center items-start max-md:m-auto max-md:flex-col max-md-justify-start max-md:items-start max-md:[&>a]:mb-3' >
                <Link onClick={() => handleClickClose()} className='flex flex-col  justify-center items-center m-link min-w-[120px]' href={"/"} >
                    <IoHomeOutline className='max-md:max-w-[35px] w-[40px] h-[40px] mt-1 text-[#666666] hover:text-orange-300 max-md:mb-1' />
                    <div className='menu-item md:absolute md:top-[65%]  max-md:text-sm' >
                        <div className='max-md:mr-1' >Ana</div>
                        <div>Sayfa</div>
                    </div>
                </Link>
                <Link onClick={() => handleClickClose()} className='flex flex-col max-md:items-start justify-center items-center m-link min-w-[120px]' href={"/arac"} >
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] ${styles.fimg}`} src={pathname == "/car" ? car : car_} />
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] hidden ${styles.simg}`} src={car} />
                    <div className='menu-item md:absolute md:top-[65%]  max-md:text-sm' >
                        <div className='max-md:mr-1' >Arabam</div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link onClick={() => handleClickClose()} className='flex flex-col max-md:items-start justify-center items-center m-link min-w-[120px]' href={"/ev"} >
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] ${styles.fimg}`} src={pathname == "/ev" ? home : home_} />
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] hidden ${styles.simg}`} src={home} />
                    <div className='menu-item md:absolute md:top-[65%] max-md:text-sm' >
                        <div className='max-md:mr-1'> Evim </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link onClick={() => handleClickClose()} className='flex flex-col max-md:items-start justify-center items-center m-link min-w-[120px]' href={"/isyeri"}>
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] ${styles.fimg}`} src={pathname == "/isyeri" ? company : company_} />
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] hidden ${styles.simg}`} src={company} />
                    <div className='menu-item md:absolute md:top-[65%] max-md:text-sm'>
                        <div className='max-md:mr-1'> İşyerim </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link onClick={() => handleClickClose()} className='flex flex-col max-md:items-start justify-center items-center m-link min-w-[120px]' href={"/seyahat"}>
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] ${styles.fimg}`} src={pathname == "/seyahat" ? trip : trip_} />
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] hidden ${styles.simg}`} src={trip} />
                    <div className='menu-item md:absolute md:top-[65%] max-md:text-sm'>
                        <div className='max-md:mr-1'> Seyahatim </div>
                        <div>Sigortalı</div>
                    </div>
                </Link>
                <Link onClick={() => handleClickClose()} className='flex flex-col max-md:items-start justify-center items-center m-link min-w-[120px]' href={"/saglik"} >
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] ${styles.fimg}`} src={pathname == "/saglik" ? heart : heart_} />
                    <Image className={`m-auto max-md:max-w-[40px] max-w-[50px] hidden ${styles.simg}`} src={heart} />
                    <div className='menu-item md:absolute md:top-[65%] max-md:text-sm'>
                        <div className='max-md:mr-1'> Sağlığım </div>
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
            {session ?
                <button onClick={() => signOut()} className='absolute right-16 top-5 md:top-5 md:right-10' > <PiSignInFill className='text-3xl cursor-pointer' /></button>
                :
                <Link href={"/oturumac"} className='absolute right-16 top-5 md:top-5 md:right-10' > <GoPerson className='text-3xl cursor-pointer' /></Link>
            }


        </header>
    )
}
