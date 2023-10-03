import React from 'react'
import photo from "../_assets/arac1 320*625.jpg"
import photo_mobile from "../_assets/arac1 1920*728.jpg"
import Image from 'next/image'

function page() {
    return (
        <main className='h-[100vh] w-[100vw]' >
            <Image alt="faa" className='w-full h-full max-md:hidden' width={1960} height={728} src={photo} />
            <Image alt="faa" className='w-full h-full md:hidden' width={1960} height={728} src={photo_mobile} />
        </main>
    )
}

export default page