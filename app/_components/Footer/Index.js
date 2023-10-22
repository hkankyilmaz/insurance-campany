"use client"

import React from 'react'
import Image from 'next/image'

import logo from "../../_assets/AKDAĞCI SİGORTA LOGO 750x350-100.jpg"
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';


function Footer() {
    return (
        <section className='text-white bg-slate-800 py-[100px] max-xl+:px-[25px] px-[25px] md:px-[150px] footer'>
            {/* <div className='mb-[50px]'>
                <Image className='w-[300px]' src={logo} />

            </div> */}
            <div className='my-10'>
                <button
                    onClick={(e) => document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })}
                    className='max-md:text-xs max-md:px-8 px-12 py-3 bg-white text-black rounded-3xl my-2 hover:bg-orange-400 hover:text-white transition-all duration-500' >
                    Teklif Al
                </button>
            </div>
            <div className='flex justify-between' >

                <div className='grid grid-cols-4 max-sm:gap-5 gap-2 [&>p]:text-4xl w-[85%] max-lg:w-[100%] max-sm:grid-cols-1' >
                    <div>

                        <ul>
                            <li>e-sigortam.com</li>
                            <li>bir Arıcıoğlu Sigorta markasıdır.</li>
                            <br />
                            <li>Havaalanı Mah. Mehmet Akif İnan Cad.</li>
                            <li>No:67 Kat:3 Arıcıoğlu Sigorta</li>
                            <li>No:67 Kat:3 Arıcıoğlu Sigorta</li>
                            <li> Esenler / İSTANBUL</li>
                            <br />
                            <li> bilgi@e-sigortam.com</li>
                            <br />
                            <li> Müşteri Hizmetleri</li>
                            <br />
                            <li> Haftaiçi</li>
                            <li> 09:00-18:00</li>
                            <br />
                            <li> Haftaiçi</li>
                            <li> 09:00-18:00</li>


                        </ul>
                    </div>
                    <div>

                        <p>BİLGİ MERKEZİ</p>
                        <ul>
                            <li> Gizlilik ve Çerez Politikası</li>
                            <li>Kişisel Verileri Koruma Kanunu</li>
                            <li>Geçmiş piyasa verileri</li>
                            <li>Hasar Yardım Merkezi</li>
                            <li>Kullanıcı Sözleşmesi</li>
                            <li>Kaza Tespit Tutanağı</li>
                        </ul>
                    </div>
                    <div>

                        <p>BİZİ TANIYIN</p>
                        <ul>
                            <Link href={"hakkimizda"}><li> Hakkımızda</li></Link>
                            <Link href={"iletisim"}> <li>İletişim</li></Link>
                        </ul>
                    </div>
                    <div>
                        <p>Ürünlerimiz</p>
                        <ul>
                            <li>Trafik Sigortası</li>
                            <li>Kasko Sigortası</li>
                            <li>Özel Sağlık Sigortası</li>
                            <li>Konut Sigortası</li>
                            <li>Seyahat Sigortası</li>
                            <li>DASK Sigortası</li>
                            <li>Tamamlayıcı Sağlık Sigortası</li>
                            <li>Ferdi Kaza Sigortası</li>
                            <li>Yabancı Sağlık Sigortası</li>
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