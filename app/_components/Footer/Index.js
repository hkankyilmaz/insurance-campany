"use client"

import React from 'react'
import Image from 'next/image'

import logo from "../../_assets/AKDAĞCI SİGORTA LOGO 750x350-100.jpg"
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';


function Footer() {
    return (
        <section className='text-white bg-slate-800 py-[40px] md:py-[100px] max-xl+:px-[25px] px-[25px] md:px-[150px] footer'>
            {/* <div className='mb-[50px]'>
                <Image className='w-[300px]' src={logo} />

            </div> */}

            <div className='flex justify-between' >

                <div className='grid sm:grid-cols-2 max-sm:gap-5 gap-2 [&>p]:text-4xl w-[85%] max-lg:w-[100%] xl:grid-cols-4 grid-cols-1' >
                    <div>

                        <ul>

                            <li>Ayhan Akdağcı Sigorta Aracılık Hizmetleri</li>
                            <br />
                            <li>Muammer Sencer Cd. No:60E</li>
                            <li> Hendek Sakarya 54300</li>
                            <br />
                            <li> bilgi@akdagcisigorta.com</li>
                            <br />
                        </ul>
                    </div>
                    <div>

                        <p>BİLGİ MERKEZİ</p>
                        <ul>
                            <Link href={"/gizlilik-ve-cerez-politikasi"} ><li> Gizlilik ve Çerez Politikası</li></Link>
                            <Link href={"/kisisel-veri-koruma-kanunu"} > <li>Kişisel Verileri Koruma Kanunu</li></Link>
                            <Link target='_blank' href="http://wa.me/905331555516" ><li>Hasar Yardım Merkezi</li></Link>
                            <Link href={"/kullanici-sozlesmesi"} > <li>Kullanıcı Sözleşmesi</li></Link>
                            <Link target='_blank' href={"https://www.tmtb.org.tr/Forms/ktt.pdf"} > <li>Kaza Tespit Tutanağı</li></Link>
                        </ul>
                    </div>
                    <div>

                        <p>BİZİ TANIYIN</p>
                        <ul>
                            <Link href={"/hakkimizda"}><li> Hakkımızda</li></Link>
                            <Link href={"/iletisim"}> <li>İletişim</li></Link>
                        </ul>
                    </div>
                    <div>
                        <p>ÜRÜNLERİMİZ</p>
                        <ul>
                            <Link href={"/arac"} > <li>Arabam Sigortalı</li></Link>
                            <Link href={"/ev"} > <li>Evim Sigortalı</li></Link>
                            <Link href={"/isyeri"} ><li>İşyerim Sigortalı</li></Link>
                            <Link href={"/seyahat"} ><li>Seyahatim Sigortalı</li></Link>
                            <Link href={"/saglik"} > <li>Sağlığım Sigortalı</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='max-w-[200px] flex flex-col justify-center items-center self-start max-lg:hidden'>
                    <p className='!text-lg text-center flex' >
                        <AiFillFacebook className='text-4xl' />
                        <AiFillInstagram className='text-4xl' />
                        <AiFillLinkedin className='text-4xl' />
                        <AiFillYoutube className='text-4xl' />
                    </p>

                    <p className='!text-md text-center' >Bizi Takip Edin</p>
                </div>
            </div>
        </section >
    )
}

export default Footer