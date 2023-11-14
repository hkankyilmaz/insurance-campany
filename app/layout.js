import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './_context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayhan Akdağcı Sigorta',
  description: 'Generated by create next app',
}

import Header from './_components/Header/Index'
import Footer from './_components/Footer/Index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import Image from 'next/image'
import wp from "./_assets/wp.png"

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning={true} className={inter.className}>
          <Header />
          {children}
          <ToastContainer
            className="z-50"
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Link target='_blank' className='z-[100] fixed right-[10px] top-[86vh] md:right-[50px] md:top-[calc(88vh-10px)] translate-[-200%]' href="http://wa.me/905331555516" > <Image className='hover:scale-[1.1] transition-all duration-700' width={80} height={80} src={wp} /> </Link>
        </body>

      </AuthProvider>
    </html>
  )
}
