"use client"

import React from 'react'
import Image from 'next/image'




function Footer() {
    return (
        <section className='text-white bg-slate-800 py-[100px] max-xl+:px-[25px] px-[150px] footer'>
            <div className='mb-[50px]'>
                <p>LOGO</p>
                <p>@2023 XXXX</p>
            </div>
            <div className='my-10'>
                <button className='max-md:text-xs max-md:px-8 px-12 py-3 bg-white text-black rounded-3xl border my-2' >Teklif Al</button>
            </div>
            <div className='flex justify-between' >

                <div className='grid grid-cols-4 max-sm:gap-5 gap-2 [&>p]:text-4xl w-[85%] max-lg:w-[100%] max-sm:grid-cols-1' >
                    <div>
                        <p  >FIRMA hakkında</p>
                        <ul>
                            <li>Hakkımızda</li>
                            <li>Bize Ulaşın</li>

                        </ul>
                    </div>

                    <div>
                        <p>Firma Bilgileri</p>
                        <ul>
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

                        <p>Kripto satın alın</p>
                        <ul>
                            <li>Trafik Sigortası</li>
                            <li>Kasko Sigortası</li>
                            <li>Özel Sağlık Sigortası</li>
                            <li>Konut Sigortası</li>
                            <li>Seyahat Sigortası</li>
                            <li>DASK Sigortası</li>
                            <li>Tamamlayıcı Sağlık Sigortası</li>
                            <li>XRP Satın Al</li>
                        </ul>
                    </div>
                </div>
                <div className='max-w-[200px] flex flex-col justify-center items-center self-start max-lg:hidden'>
                    <p className='!text-lg text-center' >Sosyal Medya Iconlari</p>
                    <button className='px-12 py-3 bg-white text-black rounded-3xl border my-5' >Kayıt</button>
                    <p className='!text-sm text-center' >Bizi Takip Edin</p>
                </div>
            </div>
        </section>
    )
}

export default Footer