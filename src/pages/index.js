import React from 'react';
import Link from "../components/Link"
import {
  HeroSection,
  BrandSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  IntegrationSection,
  PricingSection,
  FooterSection,
  TestimonialSection
} from "../sections/software"

import PageWrapper from '../components/PageWrapper'



const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header",
  containerFluid:true
}

const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns  ms-auto d-none d-xs-inline-flex">
      <Link className="btn log-in-btn focus-reset" to="#">
        Login
      </Link>
      <Link className="btn sign-in-btn focus-reset" to="#">
        Sign In
      </Link>
    </div>
  )
}
const HomePage = () =>{
    return (
      <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
        <HeroSection/>
        <BrandSection/>
        <FeatureSection/>
        <ContentSectionOne/>
        <ContentSectionTwo />
        <ContentSectionThree />
        <TestimonialSection />
        <IntegrationSection />
         <PricingSection/>
         <FooterSection/>
      </PageWrapper>
    )
}

export default HomePage;






