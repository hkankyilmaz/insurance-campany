"use client"
import React from 'react'
import Image from 'next/image'
import comment from "../../_assets/comment.png"
import Rating from '@mui/material/Rating';
import { motion } from "framer-motion";

function SectionSeven() {
    return (
        <section className='flex flex-col justify-start items-center lg:px-[100px] md:pt-[100px]' >
            <h2 className='text-2xl font-bold md:mb-3 max-md:text-lg' >Bizi Tercih Edenler</h2>
            <div className='max-md:flex-col flex justify-center items-center md:bg-slate-50 md:rounded-xl '>
                <div className='w-full md:w-[50%] flex justify-end'>
                    <Image className='w-[725px]' src={comment} />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -150, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='w-full md:w-[50%] rounded-3xl pb-10 md:py-10'
                >
                    <div className='h-[60vh] mx-10 overflow-y-auto'>
                        <Comment
                            rate={5}
                            name={"Hakan KARAYILMAZ"}
                            comment={"Sint cillum nostrud quis nisi laboris officia ex Lorem non enim. Magna ex fugiat enim velit culpa aliquip non. Aute consectetur laborum anim elit. Consectetur velit consectetur ad cupidatat ut sunt occaecat. Mollit ipsum reprehenderit culpa officia laborum ullamco."}
                        />
                        <Comment
                            rate={5}
                            name={"Hakan KARAYILMAZ"}
                            comment={"Sint cillum nostrud quis nisi laboris officia ex Lorem non enim. Magna ex fugiat enim velit culpa aliquip non. Aute consectetur laborum anim elit. Consectetur velit consectetur ad cupidatat ut sunt occaecat. Mollit ipsum reprehenderit culpa officia laborum ullamco."}
                        />
                        <Comment
                            rate={5}
                            name={"Hakan KARAYILMAZ"}
                            comment={"Sint cillum nostrud quis nisi laboris officia ex Lorem non enim. Magna ex fugiat enim velit culpa aliquip non. Aute consectetur laborum anim elit. Consectetur velit consectetur ad cupidatat ut sunt occaecat. Mollit ipsum reprehenderit culpa officia laborum ullamco."}
                        />
                        <Comment
                            rate={5}
                            name={"Hakan KARAYILMAZ"}
                            comment={"Sint cillum nostrud quis nisi laboris officia ex Lorem non enim. Magna ex fugiat enim velit culpa aliquip non. Aute consectetur laborum anim elit. Consectetur velit consectetur ad cupidatat ut sunt occaecat. Mollit ipsum reprehenderit culpa officia laborum ullamco."}
                        />
                        <Comment
                            rate={5}
                            name={"Hakan KARAYILMAZ"}
                            comment={"Sint cillum nostrud quis nisi laboris officia ex Lorem non enim. Magna ex fugiat enim velit culpa aliquip non. Aute consectetur laborum anim elit. Consectetur velit consectetur ad cupidatat ut sunt occaecat. Mollit ipsum reprehenderit culpa officia laborum ullamco."}
                        />
                    </div>
                </motion.div>

            </div>


        </section>
    )
}

export default SectionSeven

function Comment({ name, rate, comment }) {
    return (
        <div className='w-full bg-orange-50 p-5 max-md:text-sm rounded-lg mb-3'>
            <div> <Rating value={rate} readOnly /> </div>
            <div className='mb-1' > {comment} </div>
            <div className='font-bold' > {name} </div>

        </div>
    )
}