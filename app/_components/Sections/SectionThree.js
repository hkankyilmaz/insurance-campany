import React from 'react'
import Image from 'next/image'

function SectionThree() {
    return (
        <section className='h-[100vh] w-[100vw] bg-slate-100 pt-[100px] flex flex-col justify-start items-center relative' >
            <p className='text-2xl my-4' >Teklif almak için lütfen aşağıdaki formu doldurun.</p>
            <div className='flcenter'>
                <Form />
                <video className='rounded-xl' ty src={"https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/ProductImages%2Fakdag%CC%86c%C4%B1%20sigorta%202.mp4?alt=media&token=90b6ea97-02ab-4dcb-9552-ab4975e23eb3&_gl=1*52merc*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjM3MDk3OS40LjEuMTY5NjM3MTM2Ni42MC4wLjA."} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                    <track kind='caption' />
                </video>
            </div>

            <TickerContainer />

        </section>
    )
}

export default SectionThree




function Form() {
    return (

        <div className='flex flex-col justify-center items-center mr-10'>

            <input placeholder='Adınız ve Soyadınız...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />
            <input placeholder='Telefon Numaranız...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />
            <input placeholder='E-mail Adresiniz...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />
            <select className='px-3 py-2 mb-6 w-[450px] rounded-md'>
                <option>Lütfen Seçim Yapın</option>
                <option>Araç</option>
                <option>Ev</option>
                <option>İşyeri</option>
                <option>Seyahat</option>
                <option>Sağlık</option>
            </select>
            <textarea rows={10} placeholder='Durumunuzu Açıklayın...' className='px-3 py-2 mb-6 w-[450px] rounded-md' />

        </div>
    )
}


function TickerContainer() {
    return (
        <div className='ticker-container'>
            <div className='ticker-viewer'>
                <div className='ticker-scroll infinite-animation delay-animation flex' >
                    {Array(20).fill("").map((item, i) => (
                        <span key={i} className='ticker-item' >NIKE</span>
                    ))}
                </div>
            </div>
        </div>
    )
}