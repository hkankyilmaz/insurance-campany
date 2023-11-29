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
    const [text, setText] = React.useState({ textOne: "Yarının Riskine Bir Poliçe Yeter", textTwo: "Evinizi ve işyerinizi yangın gibi afetlerin olumsuz sonuçlarından koruyun." })
    return (
        <section className='secTwo relative h-[100vh] w-[100vw] bg-black'>
            <Slider slides={SLIDES} options={OPTIONS} setText={setText} text={text} />
            <div className='absolute bottom-24 left-[50%] translate-x-[-50%] max-md:flex max-md:flex-col max-md:item-center max-md:justify-center'>
                <Link
                    className='md:hidden'
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={-35}
                    duration={500}
                >
                    <button className='lg:mr-6 w-[220px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Hemen Teklif Alın</button>
                </Link>
                <button onClick={(e) => document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })} className='max-md:hidden lg:mr-6 w-[220px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Alın</button>
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


const image1 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/ev%20320*675.mp4?alt=media&token=b7e382c3-7a13-484a-823f-6c428349427f'
const image2 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/seyahat%20320*675.mp4?alt=media&token=c8519909-be31-4b2f-ab2f-ed355e0f67f6'
const image3 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/sagl%C4%B1k%20320*675.mp4?alt=media&token=39d9fce6-df18-49d9-9368-df1409b280fa'
const image4 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/arac%CC%A7%20320*675.mp4?alt=media&token=4aac2d50-9e62-4c29-9cb9-16dfda3c0a48'

const _image1 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/ev%201920*960.mp4?alt=media&token=eab27df9-f97e-428d-845b-d8e066388723'
const _image2 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/seyahat%201920*960.mp4?alt=media&token=58ada133-0dab-4255-9611-2c6f1bbea771'
const _image3 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/sagl%C4%B1k%201920*960.mp4?alt=media&token=8c6812fb-0d04-44da-a20f-586af6563ad2'
const _image4 = 'https://firebasestorage.googleapis.com/v0/b/akdagcisigorta-ff7ec.appspot.com/o/arac%CC%A7%201920*960.mp4?alt=media&token=25db68cb-c372-485b-bac9-1dc062a85196'


import "./style.css"




function Slider(props) {
    const imagesDesktop = [image1, image2, image3, image4]
    const imagesMobile = [_image1, _image2, _image3, _image4]

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
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
        stopOnInteraction: false
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

    const onSelect = useCallback((emblaApi, eventName) => {
        if (emblaApi?.selectedScrollSnap() == 0) {
            props.setText({ ...props.text, textTwo: "Evinizi ve işyerinizi yangın gibi afetlerin olumsuz sonuçlarından koruyun." })
        } else if (emblaApi?.selectedScrollSnap() == 2) {
            props.setText({ ...props.text, textTwo: "Hastalandığınızda tek amacınız yeniden iyileşmek olsun. Gerisiyle sigortanız ilgilenir." })
        } else if (emblaApi?.selectedScrollSnap() == 3) {
            props.setText({ ...props.text, textTwo: "Kaza anında sigortan varsa dert yok." })
        } else if (emblaApi?.selectedScrollSnap() == 1) {
            props.setText({ ...props.text, textTwo: "Yolculuklar yeni maceralara açıktır. Maceralara güvenle açılın." })
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