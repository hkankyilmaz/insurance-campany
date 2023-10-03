import Image from 'next/image'

import SectionsOne from './_components/Sections/SectionsOne'
import SectionTwo from './_components/Sections/SectionTwo'
import SectionThree from './_components/Sections/SectionThree'

export default function Home() {
  return (
    <main className="">
      <SectionsOne />
      <SectionTwo />
      <SectionThree />
    </main>
  )
}
