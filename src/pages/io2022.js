import React from "react";
import {
  HeroSection,
  FeatureSection,
  FooterSection,
  TestimonialSection,
} from "../sections/gdg";
import CountDown from "../sections/comingsoon/CountDown"

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

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="coming-soon-content mt-4">
              <h2>
              Ngày hội Công nghệ & Khởi nghiệp Google I/O Extended Mien Trung 2022
              </h2>
              <p>
                Sự kiện sẽ diễn ra tại thành phố Đà Nẵng với sự tham dự của khoảng 500 lập trình viên
                trong khu vực Đà Nẵng và miền Trung với nhiều chủ đề hấp dẫn về các công nghệ mới nhất
                từ sự kiện Google I/O 2022 ở Mỹ.
              </p>

              <CountDown />

            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </PageWrapper>
  );
};

export default gdg;
