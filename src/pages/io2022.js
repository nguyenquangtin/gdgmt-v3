import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import { BannerSection } from "../sections/gdg/Gallery";
import HomeSponsorBody from "../sections/gdg/Gallery/GalleryBody/home_sponsors";
import Data from "../data/Sponsors";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/io2022.png";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const IO2022Page = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <EventHero
        banner={banner}
        title="Ngày hội Công nghệ & Khởi nghiệp Google I/O Extended Mien Trung 2022"
        date="2022 · Đà Nẵng"
        location="Đà Nẵng, Việt Nam"
        description="Sự kiện diễn ra tại thành phố Đà Nẵng với sự tham dự của khoảng 500 lập trình viên
          trong khu vực Đà Nẵng và miền Trung với nhiều chủ đề hấp dẫn về các công nghệ mới nhất
          từ sự kiện Google I/O 2022 ở Mỹ."
        isPast={true}
      />

      <BannerSection
        title="Our Sponsors"
        text="Cảm ơn các đối tác và nhà tài trợ đã đồng hành cùng sự kiện."
      />
      <HomeSponsorBody images={Data.Sponsors1} isViewAll={false} />

      <FooterSection />
    </PageWrapper>
  );
};

export default IO2022Page;
