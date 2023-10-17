import React from 'react'


import { AiOutlineCheck } from 'react-icons/ai';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BsFillBuildingFill } from 'react-icons/bs';
import { LuNewspaper } from 'react-icons/lu';
import Footer from '../_components/Footer/Index';
import SectionFour from '../_components/Sections/SectionFour';



function AboutUs() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>

                <div className='h-[400px] w-full bg-cover bg-top bg-orange-300 flex justify-center items-start pt-[120px]'  >
                    <h1 className='text-white text-4xl' >Hakkımızda</h1>
                </div>
                <div className='[&>p]:mb-3 max-w-[1200px] max-md:[&>p]:text-xs  flex flex-col justify-start items-start z-[5] shadow-2xl shadow-slate-600 px-5 py-12 rounded-2xl translate-y-[-200px] bg-white' >
                    <p> <strong>Ayhan Akdağcı Sigortam</strong> dileğiniz zaman evden, ofisten veya dünyanın herhangi bir yerinden sigorta ihtiyaçlarınıza zahmetsizce, en uygun fiyatlarla ve şeffaf bir şekilde ulaşabilmeniz için kuruldu. </p>
                    <p>Türkiye’nin en iyi sigorta şirketlerine ait en güncel fiyat ve ürünleri karşılaştırarak bütçenize ve ihtiyacınıza en uygun ürünü bulur ve sigorta satın aldığınızda kalite ve kazanç keyfini aynı anda yaşayabilirsiniz.</p>
                    <p>21 kişilik eğitimli uzman kadromuz ile hizmet sunmaktayız.</p>
                    <p>Müşterilerimize sunduğumuz teklifler tamamen canlı sistemler üzerinden üretilmektedir.</p>
                    <p>  <strong>Ayhan Akdağcı Sigortam</strong> binlerce müşteriye en iyi fiyat ve en iyi teminatlarla kaliteli sigortacılık hizmeti sunmayı sürdürmektedir. </p>
                    <p>Sunduğumuz kesintisiz hizmet sayesinde müşterilerimiz ne zaman ve nerede ihtiyaç duyarsa bize ulaşabilirler.</p>
                    <p>  <strong>Ayhan Akdağcı Sigortam</strong> da ‘’sadece müşterinin temsilcisi olmak” şirket kültürünün bir parçasıdır. Bu nedenle müşterilerimizin ihtiyaçlarını anında çözüme ulaştırmak bizim en büyük hedefimizdir.</p>
                    <p>Sigorta uzmanlarımıza telefon, e-posta ya da sosyal medya hesaplarımızdan ulaşarak tüm sorularınızın yanıtlarını bulabilirsiniz.</p>
                    <p>Poliçelerinizi satın aldıktan sonra da sigorta uzmanlarımızdan ve herhangi bir kaza anında hasar uzmanlarımızdan kesintisiz hizmet ve destek almaya devam edebilirsiniz.</p>
                    <p>Yenileme dönemi geldiğinde de en iyi fiyatı yine bizden alabileceğinizden emin olabilirsiniz.</p>
                    <br />

                    <div className='w-full flex flex-col justify-center items-center'>
                        <p className='text-xl md:text-3xl font-bold text-slate-800'>Neden</p>
                        <p className='text-xl md:text-3xl mb-3 font-bold text-slate-800' >Ayhan Akdağcı Sigortam?</p>
                        <p className='md:text-lg max-md:text-center'>Sigorta sektöründe 25 yıllık tecrübemiz ve alt yapımız ile</p>
                        <p className='md:text-lg max-md:text-center'>siz değerli müşterilerimizin sigorta gereksinimlerini online olarak karşılamaktayız.</p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-4 [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center pt-5 gap-x-2 gap-y-2 [&>p]:text-slate-600' >
                            <div className='bg-slate-100 py-10'>
                                <BsFillBuildingFill className='text-6xl' />
                                <p>20'den Fazla Sigorta Şirketi</p>
                            </div>
                            <div className='bg-slate-100 py-10'>
                                <LuNewspaper className='text-6xl' />
                                <p>Hızlı Tekliflendirme</p>
                            </div>
                            <div className='bg-slate-100 py-10'>
                                <AiOutlineCheck className='text-6xl' />
                                <p>En İyi Fiyat Garantisi </p>
                            </div>
                            <div className='bg-slate-100 py-10'>
                                <RiSecurePaymentLine className='text-6xl' />
                                <p> Güvenli Ödeme</p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )
}

export default AboutUs