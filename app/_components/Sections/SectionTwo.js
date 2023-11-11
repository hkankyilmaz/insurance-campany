"use client"
import React, { useEffect, useCallback } from 'react'
import Image from 'next/image';
import { Link } from "react-scroll"


function SectionTwo() {
    const OPTIONS = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 4;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const [text, setText] = React.useState({ textOne: "Yarının Riskine Bir Poliçe Yeter", textTwo: "Evinizi ve işyerinizi yangın gibi afetlerin olumsuz sonuçlarından koruyun." })
    return (
        <section className='relative h-[100vh] w-[100vw] bg-black'>
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
                    <button className='mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Hemen Tekif Alın</button>
                </Link>
                <button onClick={(e) => document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })} className='max-md:hidden mr-6 w-[200px] px-4 py-2 rounded-md bg-white text-black hover:bg-orange-400 hover:text-white transition-all ease-in'>Tekif Al</button>
                <button className='w-[200px]  px-4 py-2 rounded-md hover:bg-white hover:text-black bg-orange-400 text-white transition-all ease-in mt-3' >Aranma Talebi Oluşturun</button>
            </div>
            <div className='max-lg:hidden absolute left-10 top-[50%] translate-y-[-50%] max-w-xl text-4xl text-white'>
                {text.textOne}
            </div>
            <div className='max-lg:hidden absolute right-10 top-[50%] translate-y-[-50%] max-w-xl text-xl text-white text-right'>
                {text.textTwo}
            </div>
            <div className='lg:hidden absolute top-[120px] text-center  w-full px-5 right-[50%] translate-x-[50%]'>
                <div className='text-xl text-white'>
                    {text.textOne}
                </div>
                <div className='text-normal text-white'>
                    {text.textTwo}
                </div>

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

const _image1 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/hakan%2Fev%201920*960.mp4?alt=media&token=31d2a2a6-4725-4317-a769-abbe23aaae7e&_gl=1*6wd4af*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjU0MDczOC41LjEuMTY5NjU0MTEyNy4yOS4wLjA.'
const _image2 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/hakan%2Fseyahat%201920*960.mp4?alt=media&token=09786bcc-6749-4c39-b1b8-dd59f237208a&_gl=1*1xq52s8*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjU0MDczOC41LjEuMTY5NjU0MTAxOC4zNS4wLjA.'
const _image3 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/hakan%2Fsagl%C4%B1k%201920*960.mp4?alt=media&token=16536181-57f1-4ea8-9c57-b291fad05507&_gl=1*15jfkqs*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjU0MDczOC41LjEuMTY5NjU0MTA5Ni42MC4wLjA.'
const _image4 = 'https://firebasestorage.googleapis.com/v0/b/kutezadmin.appspot.com/o/hakan%2Farac%CC%A7%201920*960.mp4?alt=media&token=e91297f8-33cd-4d56-85f0-c9c7acb695be&_gl=1*bue8i8*_ga*MTcyMjMzNjU0MC4xNjk2MzIzNDE3*_ga_CW55HF8NVT*MTY5NjU0MDczOC41LjEuMTY5NjU0MTE2MC42MC4wLjA.'


import "./style.css"

const imagesDesktop = [image1, image2, image3, image4]
const imagesMobile = [_image1, _image2, _image3, _image4]

const imageByIndex = (index) => imagesMobile[index % imagesMobile.length]


function Slider(props) {
    const { slides, options } = props
    const autoplayOptions = {
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
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
                            <video className='h-[100vh] w-[100vw] object-cover' src={imageByIndex(index)} style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline >
                                <track kind='caption' />
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}