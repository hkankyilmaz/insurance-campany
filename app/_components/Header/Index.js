"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import car_ from "../../_assets/Çalışma Yüzeyi 1_8.png"
import car from "../../_assets/Çalışma Yüzeyi 1_9.png"
import home_ from "../../_assets/Çalışma Yüzeyi 1_2.png"
import home from "../../_assets/Çalışma Yüzeyi 1_3.png"
import company_ from "../../_assets/Çalışma Yüzeyi 1_4.png"
import company from "../../_assets/Çalışma Yüzeyi 1_5.png"
import trip_ from "../../_assets/Çalışma Yüzeyi 1.png"
import trip from "../../_assets/Çalışma Yüzeyi 1_1.png"
import heart_ from "../../_assets/Çalışma Yüzeyi 1_8.png"
import heart from "../../_assets/Çalışma Yüzeyi 1_7.png"

export default function Header() {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <header style={{}} className='py-2 fixed left-0 top-0 right-0 z-10 max-md:bottom-0 max-md:flex max-md:flex-col max-md-justify-center max-md:items-start max-md:pl-20 max-md:[&>a]:mb-5 max-md:pt-20'>
            <Link href={"/"} >  <div className='absolute top-[20px] left-10 text-black z-10'></div></Link>
            <div style={{ visibility: pathname == "/oturumac" ? "hidden" : "" }} className='flcenter max-md:flex max-md:flex-col max-md-justify-start max-md:items-start max-md:[&>a]:mb-5' >
                <Link className='flex flcenter m-link' href={"/arac"} > <Image className='max-w-[50px]' src={pathname == "/arac" ? car : car_} /> <div className='menu-item' >Araç</div></Link>
                <Link className='flex flcenter m-link' href={"/ev"} ><Image className='max-w-[50px]' src={pathname == "/ev" ? home : home_} /><div className='menu-item' >Ev</div></Link>
                <Link className='flex flcenter m-link' href={"/isyeri"}><Image className='max-w-[50px]' src={pathname == "/isyeri" ? company : company_} /><div className='menu-item'>İşyeri</div></Link>
                <Link className='flex flcenter m-link' href={"/seyahat"}><Image className='max-w-[50px]' src={pathname == "/seyahat" ? trip : trip_} /><div className='menu-item' >Seyahat</div></Link>
                <Link className='flex flcenter m-link' href={"/saglik"} ><Image className='max-w-[50px]' src={pathname == "/saglik" ? heart : heart_} /><div className='menu-item' >Sağlık</div></Link>
            </div>
        </header>
    )
}
