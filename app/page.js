

import SectionsOne from './_components/Sections/SectionsOne'
import SectionTwo from './_components/Sections/SectionTwo'
import SectionThree from './_components/Sections/SectionThree'
import SectionFour from './_components/Sections/SectionFour'
import SectionFive from './_components/Sections/SectionFive'
import SectionSix from './_components/Sections/SectionSix'
import Footer from './_components/Footer/Index'
import Header from './_components/Header/Index'

export default function Home() {
  return (
    <main >
      <SectionTwo />
      <SectionFour />
      <SectionThree />
      <SectionsOne />
      <SectionSix />
      <SectionFive />
      <Footer />
    </main>
  )
}
