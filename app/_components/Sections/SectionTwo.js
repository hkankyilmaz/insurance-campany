"use client"
import React from 'react'
import Image from 'next/image';


function SectionTwo() {
    const OPTIONS = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 4;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <section className='relative'>
            <Slider slides={SLIDES} options={OPTIONS} />
            <div className='absolute bottom-20 left-[50%] translate-x-[-50%] max-md:flex max-md:flex-col max-md:item-center max-md:justify-center'>
                <button className='mr-6 w-[200px] px-2 py-1 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                <button className='w-[200px] px-2 py-1 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in mt-3' >Bana Ulaşın</button>
            </div>
        </section>
    )
}

export default SectionTwo



import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const image1 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fseyahat%201920*960.mp4?alt=media&token=3f3dad85-da3a-4b2d-8c27-60a89b30180f&_gl=1*1bc065x*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMjc3NC4yOS4wLjA.'
const image2 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fev%20320*675.mp4?alt=media&token=df7c6772-52e9-4be0-8d3d-3d195bc8ccb8&_gl=1*1mfoet*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMzUyNi40My4wLjA.'
const image3 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fsagl%C4%B1k%20320*675.mp4?alt=media&token=a88cdcbd-5c29-4d19-b87a-15032d284821&_gl=1*1gw0cw3*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMzU0MS4yOC4wLjA.'
const image4 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fseyahat%20320*675.mp4?alt=media&token=c032f10f-c164-4c47-ace0-96a55baca663&_gl=1*1s6mem*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMzU1NC4xNS4wLjA.'

const _image1 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Farac%CC%A7%201920*960.mp4?alt=media&token=4baac0a7-7f6a-4f59-80c9-61986a89a496&_gl=1*3a29c4*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMjcxMy4yNy4wLjA.'
const _image2 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fev%201920*960.mp4?alt=media&token=3396df02-6182-4617-94eb-71995e35a9e8&_gl=1*17x49xl*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMjc0My42MC4wLjA.'
const _image3 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fsagl%C4%B1k%201920*960.mp4?alt=media&token=542c49f6-b488-4c6b-8bae-e234acaafef9&_gl=1*65v5s0*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMjc2MC40My4wLjA.'
const _image4 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmindev-2c130.appspot.com/o/freelance-photo%2Fseyahat%201920*960.mp4?alt=media&token=3f3dad85-da3a-4b2d-8c27-60a89b30180f&_gl=1*13x8iot*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjMzMjYyMC4yLjEuMTY5NjMzMjc3Mi4zMS4wLjA.'


import "./style.css"

const imagesDesktop = [image1, image2, image3, image4]
const imagesMobile = [_image1, _image2, _image3, _image4]

const imageByIndex = (index) => imagesMobile[index % imagesMobile.length]


function Slider(props) {
    const { slides, options } = props
    const autoplayOptions = {
        delay: 10000,
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
                            <video ty src={imageByIndex(index)} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                                <track kind='caption' />
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}