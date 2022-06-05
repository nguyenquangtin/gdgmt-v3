import React from "react";
import {
  HeroSection,
  FeatureSection,
  FooterSection,
  TestimonialSection,
} from "../sections/gdg";

import { BannerSection } from "../sections/gdg/Gallery";
import HomeSponsorBody from "../sections/gdg/Gallery/GalleryBody/home_sponsors";
import Data from "../data/Sponsors";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};
const gdg = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <BannerSection
        title="Our Current & Former Sponsors"
        text="Our precious partners and sponsors has contributed to many successful events."
      />
      <HomeSponsorBody images={Data.Sponsors1} isViewAll={true} />
      <FooterSection />
    </PageWrapper>
  );
};

export default gdg;
