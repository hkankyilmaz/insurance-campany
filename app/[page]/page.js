"use client"
import React from 'react'

import Footer from '../_components/Footer/Index'
import SectionThree from '../_components/Sections/SectionThree'
import SectionFour from '../_components/Sections/SectionFour'
import SectionSix from '../_components/Sections/SectionSix'
import { Link } from 'react-scroll'

function Index(props) {
    const param = props.params.page

    return (
        <main>

            <SectionOne param={param} />
            <SectionThree />
            <SectionFour />
            <SectionSix />
            <Footer />

        </main>

    )
}

export default Index




const aracphoto = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Farac2%20320*625.jpg?alt=media&token=294c5640-7356-45e3-9dde-96360c50e42b&_gl=1*m43m8j*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5Njc0NDk2NC42LjEuMTY5Njc0NTA0OC41MC4wLjA.";
const aracphotoMobile = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Farac2%201920*728.jpg?alt=media&token=653f5019-5e18-4017-b8f5-b96ed3988e87&_gl=1*1iilwkh*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5Njc0NDk2NC42LjEuMTY5Njc0NTA4NS4xMy4wLjA.";

const evphoto = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fev%20320*625.jpg?alt=media&token=663c0f1b-5885-4e8d-8533-a84029fa39db&_gl=1*qcx9ie*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDk0My4zNC4wLjA.";
const evphotoMobile = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fev%201920*728.jpg?alt=media&token=281b3d6b-c9bb-4f87-98de-2e6e9e87b431&_gl=1*lt1zo0*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDk2OC45LjAuMA..";

const isyeriphoto = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fis%CC%A7%20yeri%20320*625.jpg?alt=media&token=e00f6901-e158-4f52-8f54-96facfb0b55c&_gl=1*8l857i*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjMzOTcwNy4zMy4wLjA.";
const isyeriphotoMobile = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fis%CC%A7%20yeri%201920*728.jpg?alt=media&token=e4647f20-50f4-4324-bdac-36d14bf4b69e&_gl=1*knxn9m*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDI5Ny41My4wLjA.";

const saglikphoto = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fsagl%C4%B1k%20320*625.jpg?alt=media&token=2c43c87d-4113-4774-a9f1-0b3b9f960043&_gl=1*1tfvzid*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDcxNC4zNC4wLjA.";
const saglikphotoMobile = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fseyahat1%201920*728.jpg?alt=media&token=0ff83045-4c26-4284-bf41-f75e6196c87a&_gl=1*pk4p62*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDc2MC42MC4wLjA.";

const seyahatphoto = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fseyahat1%20320*625.jpg?alt=media&token=c5909cb6-fc8b-4a01-9e7a-e73704f5c034&_gl=1*jml8ra*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDU4Ny41OC4wLjA.";
const seyahatphotoMobile = "https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-video%2Fseyahat1%201920*728.jpg?alt=media&token=0ff83045-4c26-4284-bf41-f75e6196c87a&_gl=1*117bydd*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzOTY4MC4zLjEuMTY5NjM0MDYzMS4xNC4wLjA.";

function SectionOne({ param }) {

    let image, mobileImage;

    if (param == "arac") {
        image = aracphoto;
        mobileImage = aracphotoMobile;
    } else if (param == "ev") {
        image = evphoto;
        mobileImage = evphotoMobile;
    } else if (param == "isyeri") {
        image = isyeriphoto;
        mobileImage = isyeriphotoMobile;
    } else if (param == "saglik") {
        image = saglikphoto;
        mobileImage = saglikphotoMobile;
    } else if (param == "seyahat") {
        image = seyahatphoto;
        mobileImage = seyahatphotoMobile;
    }
    return (
        <section className='h-[100vh] w-[100vw] relative'>
            <main className='max-md:hidden h-[100vh] w-[100vw]' style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url(${image})` }}  >
                <div className='absolute bottom-24 left-[50%] translate-x-[-50%] max-md:flex max-md:flex-col max-md:item-center max-md:justify-center'>
                    <Link
                        className='md:hidden'
                        to="form"
                        spy={true}
                        smooth={true}
                        offset={-35}
                        duration={500}
                    >
                        <button className='mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                    </Link>
                    <button onClick={(e) => document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })} className='max-md:hidden mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                    <button className='w-[200px]  px-4 py-2 rounded-md hover:bg-white hover:text-black bg-orange-400 text-white transition-all ease-in mt-3' >Bana Ulaşın</button>
                </div>
            </main>
            <main className='md:hidden h-[100vh] w-[100vw]' style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url(${mobileImage})` }}  >
            </main>
        </section>
    )

}