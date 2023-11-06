"use client"

import React from 'react'
import Form from '../Forms/Index'

function SectionSix() {
    return (
        <section id='form' className='md:min-h-[900px] form md:w-[100vw] md:h-[100vh] md:px-[50px] lg:px[200px] 2xl:px-[250px] max-md:py-[50px] md:pt-[100px] flex flex-col justify-start items-center max-md:bg-slate-50 form_' >
            <h2 className='text-2xl max-md:text-lg font-bold text-center ' >Teklif Alın</h2>
            <p className='text-center max-md:text-xs max-w-[1000px] mb-10'>
                İhtiyacınız olan sigorta poliçesi formunu doldurun ve gönderin. Birkaç dakika içerisinde satış temsilcimiz en iyi tekliflerle gelsin.
            </p>

            <Form />

        </section>
    )
}

export default SectionSix





