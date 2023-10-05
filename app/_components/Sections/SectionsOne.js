"use client"
import React from 'react'
import Image from 'next/image';


function SectionsOne() {
    const OPTIONS = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 7;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <section className='relative'>
            <Slider slides={SLIDES} options={OPTIONS} />
            <div className='absolute bottom-20 left-[50%] translate-x-[-50%] max-md:flex max-md:flex-col max-md:item-center max-md:justify-center'>
                <button className='mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                <button className='w-[200px]  px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in mt-3' >Bana Ulaşın</button>
            </div>
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

const imagesDesktop = [image1, image2, image3, image4, image5, image6, image7]
const imagesMobile = [_image1, _image2, _image3, _image4, _image5, _image6, _image7]

const imageByIndex = (index) => imagesMobile[index % imagesMobile.length]


function Slider(props) {
    const { slides, options } = props
    const autoplayOptions = {
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

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