import React from "react"
import { BannerSection } from "../sections/portfolio/Gallery"
import SponsorBody from "../sections/gdg/Gallery/GalleryBody/sponsors"
import HomeSponsorBody from "../sections/gdg/Gallery/GalleryBody/home_sponsors"
import FooterSection from "../sections/gdg/Footer"
import Data from '../data/Sponsors'
import PageWrapper from '../components/PageWrapper'

const Partners = () => {
  return <PageWrapper innerPageHeader={true} >
    <BannerSection title="Sponsors" text="Our current & former sponsors have contributed to many successful events."/>
    <HomeSponsorBody images={Data.Sponsors1}/>
    <HomeSponsorBody images={Data.Sponsors2}/>

    <BannerSection title="Media & Community Partners" text=""/>
    <SponsorBody images={Data.Partners}/>

    <FooterSection/>
  </PageWrapper>
}

export default Partners
