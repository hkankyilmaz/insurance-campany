"use client"

import React from 'react'
import Form from '../Forms/Index'
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import feed from "../../_assets/feed.png"

function SectionSix({ param, hidden }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <section id='form' className='md:pt-[100px] max-md:mb-4 mb-10  form md:w-[100vw] md:px-[50px] lg:px[200px] 2xl:px-[250px] max-md:pb-[30px] max-md:pt-[40px] flex flex-col justify-start items-center form_' >
            <h2 className='text-2xl max-md:max-w-[80vw] max-md:text-lg font-bold text-center mb-5' >Hemen teklif almak için formu doldurun:</h2>


            <Form setOpen={setOpen} param={param} hidden={hidden} />
            <Modal
                className='flex justify-center items-center'
                open={open}
                onClose={handleClose}
            >
                <Image className='m-auto  w-[90vw] md:max-w-[600px] h-auto' src={feed} alt='faa' />
            </Modal>

        </section>
    )
}

export default SectionSix





