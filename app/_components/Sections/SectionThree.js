import React from 'react'
import Image from 'next/image'



import { BsSendFill } from 'react-icons/bs';
import { GoGitCompare } from 'react-icons/go';
import { AiFillCreditCard } from 'react-icons/ai';

function SectionThree() {
    return (
        <section className='h-[100vh] w-[100vw] pt-[20px] px-[400px]  flex flex-col justify-center items-center relative border-b' >
            <p className='text-2xl my-4 border-b border-b-[orange] pb-1' >Akdağcı Sigortam Nasıl Çalışır...</p>
            <div className='flcenter'>
                <div  >
                    <div className='mb-2'>  <div className='w-20 h-20 flcenter border rounded-full' ><BsSendFill className='text-4xl' /></div>  </div>
                    <h2 className='mb-2 text-xl font-bold' >Teklif Al </h2>
                    <p className='text-md mb-2'>İhtiyacınız olan sigorta poliçesi Formunu doldurun ve gönderin. Birkaç dakika içerisinde 20’den fazla sigorta şirketinin teklifi ekranınıza gelsin.</p>
                    <div className='mb-2'  >  <div className='w-20 h-20 flcenter border rounded-full' > <GoGitCompare className='text-4xl' /> </div>  </div>
                    <h2 className='mb-2 text-xl font-bold'>Karşılaştır</h2>
                    <p className='text-md mb-2' >Teklifleri karşılaştırın ve size en uygun poliçeyi seçin. Dilerseniz e-sigortam.com sigorta eksperlerinden yardım alabilirsiniz.</p>
                    <div className='mb-2' >  <div className='w-20 h-20 flcenter border rounded-full' > <AiFillCreditCard className='text-4xl' /> </div>  </div>
                    <h2 className='mb-2 text-xl font-bold' >Güvenle Öde</h2>
                    <p className='text-md mb-2' >Seçtiğiniz poliçeyi e-sigortam.com’un güçlü ödeme altyapısı ile güvenle ödeyin. Poliçenizi dilerseniz pdf formatında E-posta adresinize dilerseniz de kargo ile basılı olarak kayıtlı adresinize gönderelim.</p>
                </div>
                <video className='rounded-xl' ty src={"https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/ProductImages%2Fakdag%CC%86c%C4%B1%20sigorta%202.mp4?alt=media&token=90b6ea97-02ab-4dcb-9552-ab4975e23eb3&_gl=1*52merc*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjM3MDk3OS40LjEuMTY5NjM3MTM2Ni42MC4wLjA."} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                    <track kind='caption' />
                </video>
            </div>



        </section>
    )
}

export default SectionThree






