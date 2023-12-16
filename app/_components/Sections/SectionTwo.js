"use client"
import React, { useEffect, useCallback } from 'react'
import Image from 'next/image';
import { Link } from "react-scroll"
import ModalRegister from '../ModalRegister';


function SectionTwo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const OPTIONS = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 4;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const [text, setText] = React.useState({ textOne: "Yarının Riskine Bir Poliçe Yeter", textTwo: "Kaza anında sigortan varsa dert yok." })
    return (
        <section className='secTwo relative h-[100vh] w-[100vw] bg-black'>
            <Slider slides={SLIDES} options={OPTIONS} setText={setText} text={text} />
            <div className='absolute bottom-24 left-[50%] translate-x-[-50%] max-md:flex max-md:flex-col max-md:item-center max-md:justify-center md:min-w-[464px]'>
                <Link
                    className='md:hidden'
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={-35}
                    duration={500}
                >
                    <button className='md:mr-6 w-[220px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Hemen Teklif Alın</button>
                </Link>
                <button onClick={(e) => document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })} className='max-md:hidden md:mr-6 w-[220px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Hemen Teklif Alın</button>
                <button onClick={() => setOpen(true)} className='w-[220px]  px-4 py-2 rounded-md hover:bg-white hover:text-black bg-orange-400 text-white transition-all ease-in mt-3' >Aranma Talebi Oluşturun</button>
            </div>
            <div className='max-lg:hidden absolute left-10 top-[50%] translate-y-[-50%]  text-5xl text-white pb-3 border-b-2 border-b-[orange] border-solid '>
                {text.textOne}
            </div>
            <div className='max-lg:hidden absolute left-10 top-[50%] translate-y-[40px] max-w-4xl text-3xl text-white text-left'>
                {text.textTwo}
            </div>
            <div className='lg:hidden absolute top-[120px] text-center max-w-2xl  w-full px-5 right-[50%] translate-x-[50%] '>
                <div className='text-xl text-white pb-1 border-b-2 border-b-[orange] border-solid'>
                    {text.textOne}
                </div>
                <div className='text-normal text-white'>
                    {text.textTwo}
                </div>

            </div>
            <ModalRegister handleClose={handleClose} open={open} />
        </section>
    )
}

export default SectionTwo



import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


// const image1 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/ev%20320*675.mp4?alt=media&token=b7e382c3-7a13-484a-823f-6c428349427f'
const image1 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/yangin%20mobil.mp4?alt=media&token=89e2a2f6-d01d-4ce3-9be2-196a89ce5fa0'
const image2 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/seyahat%20mobil.mp4?alt=media&token=d45ead3e-ac5f-439c-b2b2-969868612b01'
const image3 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/sagl%C4%B1k%20mobil.mp4?alt=media&token=fcf70c3f-25e3-43e2-bd79-0be8c714832a'
const image4 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/arac%20mobil.mp4?alt=media&token=4589651f-24fe-4a8c-873d-8efc90c0cf5d'


//const _image1 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/ev%201920*960.mp4?alt=media&token=eab27df9-f97e-428d-845b-d8e066388723'
const _image1 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/yangin%20web.mp4?alt=media&token=65e918c1-52a0-4bc3-96a8-6b18b7fa67fd'
const _image2 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/seyahat%20web.mp4?alt=media&token=948ba3df-5970-44f0-9051-52d074ff5816'
const _image3 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/sagl%C4%B1k%20web.mp4?alt=media&token=a11d974a-9e68-4e19-81fe-1b2b064d6c54'
const _image4 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/arac%20web.mp4?alt=media&token=63b3cf27-b525-4537-8072-999e4f54e2c4'




import "./style.css"


//yangin1,seyehat2,saglik3,kaza4

function Slider(props) {
    const imagesDesktop = [image4, image3, image2, image1]
    const imagesMobile = [_image4, _image3, _image2, _image1]

    const [list, setList] = React.useState(imagesMobile)

    const imageByIndex = (index) => list[index % list.length]

    useEffect(() => {

        if (typeof window !== "undefined") {
            if (window.innerWidth < 600) setList(imagesDesktop)
            if (window.innerWidth > 600) setList(imagesMobile)
        }
    }, [])


    const { slides, options } = props
    const autoplayOptions = {
        delay: 5000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
        stopOnInteraction: false
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

    const onSelect = useCallback((emblaApi, eventName) => {
        if (emblaApi?.selectedScrollSnap() == 0) {
            props.setText({ ...props.text, textTwo: "Kaza anında sigortan varsa dert yok." })
        } else if (emblaApi?.selectedScrollSnap() == 2) {
            props.setText({ ...props.text, textTwo: "Yolculuklar yeni maceralara açıktır. Maceralara güvenle açılın." })
        } else if (emblaApi?.selectedScrollSnap() == 3) {
            props.setText({ ...props.text, textTwo: "Evinizi ve işyerinizi yangın gibi afetlerin olumsuz sonuçlarından koruyun." })
        } else if (emblaApi?.selectedScrollSnap() == 1) {
            props.setText({ ...props.text, textTwo: "Hastalandığınızda tek amacınız yeniden iyileşmek olsun. Gerisiyle sigortanız ilgilenir." })
        }
    }, [])

    useEffect(() => {
        if (emblaApi) emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <video className='h-[100vh] w-[100vw] object-cover' preload="none" src={imageByIndex(index)} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                                <track kind='caption' />
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}