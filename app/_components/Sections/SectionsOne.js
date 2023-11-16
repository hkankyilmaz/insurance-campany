"use client"
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image';
import { Link } from 'react-scroll';
import ModalRegister from '../ModalRegister';


function SectionsOne() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const OPTIONS = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 7;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const [text, setText] = React.useState({ textOne: "Trafik Kazaları", textTwo: "Arabam Sigortalı" })
    return (
        <section className='relative bg-black'>
            <Slider slides={SLIDES} options={OPTIONS} text={text} setText={setText} />
            <div className='absolute bottom-24 left-[50%] translate-x-[-50%] max-md:flex max-md:flex-col max-md:item-center max-md:justify-center'>
                <Link
                    className='md:hidden'
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={-35}
                    duration={500}
                >
                    <button className='lg:mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                </Link>
                <button onClick={(e) => document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })} className='max-md:hidden lg:mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                <button onClick={() => setOpen(true)} className='w-[200px]  px-4 py-2 rounded-md hover:bg-white hover:text-black bg-orange-400 text-white transition-all ease-in mt-3' >Aranma Talebi Oluşturun</button>
            </div>
            {/* <div className='max-lg:hidden absolute left-10 top-[50%] translate-y-[-50%]  text-5xl text-white pb-3 border-b-2 border-b-[orange] border-solid '>
                {text.textOne}
            </div> */}
            <div className='max-lg:hidden absolute left-10 top-[50%] translate-y-[40px] max-w-4xl text-3xl text-white text-left'>
                Poliçen varsa, yarının maddi risklerini dert etmene gerek yok!
            </div>
            <div className='lg:hidden absolute top-[120px] text-center max-w-2xl  w-full px-5 right-[50%] translate-x-[50%] '>
                {/* <div className='text-xl text-white pb-1 border-b-2 border-b-[orange] border-solid'>
                    {text.textOne}
                </div> */}
                <div className='text-normal text-white'>
                    Poliçen varsa, yarının maddi risklerini dert etmene gerek yok!
                </div>

            </div>
            <ModalRegister handleClose={handleClose} open={open} />
        </section>
    )
}

export default SectionsOne



import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


import image1 from '../../_assets/arac1 1920*728.jpg'
import image2 from '../../_assets/arac2 1920*728.jpg'
import image3 from '../../_assets/ev 1920*728.jpg'
import image4 from '../../_assets/iş yeri 1920*728.jpg'
import image5 from '../../_assets/saglık 1920*728.jpg'
import image6 from '../../_assets/seyahat1 1920*728.jpg'
import image7 from '../../_assets/seyahat2 1920*728.jpg'

import _image1 from '../../_assets/arac1 320*625.jpg'
import _image2 from '../../_assets/arac2 320*625.jpg'
import _image3 from '../../_assets/ev 320*625.jpg'
import _image4 from '../../_assets/iş yeri 320*625.jpg'
import _image5 from '../../_assets/saglık 320*625.jpg'
import _image6 from '../../_assets/seyahat1 320*625.jpg'
import _image7 from '../../_assets/seyahat2 320*625.jpg'

import "./style.css"





function Slider(props) {

    const imagesDesktop = [image1, image2, image3, image4, image5, image6, image7]
    const imagesMobile = [_image1, _image2, _image3, _image4, _image5, _image6, _image7]

    const [list, setList] = React.useState(imagesMobile)

    const imageByIndex = (index) => list[index % list.length]

    useEffect(() => {

        if (typeof window !== "undefined") {
            if (window.innerWidth < 600) setList(imagesDesktop)
            if (window.innerWidth > 600) setList(imagesMobile)
        }
    }, [])

    if (typeof window !== "undefined") {
        window.addEventListener("resize", (event) => {
            if (window.innerWidth < 600) setList(imagesDesktop)
            if (window.innerWidth > 600) setList(imagesMobile)
        });
    }



    const { slides, options } = props
    const autoplayOptions = {
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

    const onSelect = useCallback((emblaApi, eventName) => {
        if (emblaApi?.selectedScrollSnap() == 0) {
            props.setText({ textOne: "Trafik Kazaları", textTwo: "Arabam Sigortalı" })
        } else if (emblaApi?.selectedScrollSnap() == 1) {
            props.setText({ textOne: "Trafik Kazaları", textTwo: "Arabam Sigortalı" })
        } else if (emblaApi?.selectedScrollSnap() == 2) {
            props.setText({ textOne: "Ev Yangını", textTwo: "Evim Sigortalı" })
        } else if (emblaApi?.selectedScrollSnap() == 3) {
            props.setText({ textOne: "İş Yeri Yangını", textTwo: "İşyerim Sigortalı" })
        } else if (emblaApi?.selectedScrollSnap() == 4) {
            props.setText({ textOne: "Sağlık", textTwo: "Sağlığım Sigortalı" })
        }
        else if (emblaApi?.selectedScrollSnap() == 5) {
            props.setText({ textOne: "Seyahatler", textTwo: "Seyahatim Sigortalı" })
        }
        else if (emblaApi?.selectedScrollSnap() == 6) {
            props.setText({ textOne: "Seyahatler", textTwo: "Seyahatim Sigortalı" })
        }
        else if (emblaApi?.selectedScrollSnap() == 7) {
            props.setText({ textOne: "Seyahatler", textTwo: "Seyahatim Sigortalı" })
        }
    }, [])

    useEffect(() => {
        if (emblaApi) emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])



    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <Image
                                priority
                                width={1920}
                                height={728}
                                className="embla__slide__img"
                                src={imageByIndex(index)}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}