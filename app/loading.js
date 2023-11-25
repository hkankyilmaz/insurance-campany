import React from 'react'
import logo from "./_assets/AKDAĞCI SİGORTA LOGO 750x350-100.jpg"
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Image from 'next/image';

function Loading() {
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center' >
            <Image width={250} height={50} src={logo} alt='logo' className='mb-3' />
            <Stack sx={{ width: '125px', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="warning" />
            </Stack>

        </div>
    )
}

export default Loading