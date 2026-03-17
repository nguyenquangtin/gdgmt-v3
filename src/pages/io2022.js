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

const stats = [
  { value: "700+", label: "Attendees" },
];

const topics = [
  "Android", "Flutter", "Google Cloud",
  "Web Technologies", "Firebase", "Startup Tech",
];

const IO2022Page = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <EventHero
        banner={banner}
        title="Ngày hội Công nghệ & Khởi nghiệp Google I/O Extended Mien Trung 2022"
        date="2022 · Đà Nẵng"
        location="Đà Nẵng, Việt Nam"
        description="Sự kiện diễn ra tại Đà Nẵng với sự tham dự của hơn 700 lập trình viên khu vực miền Trung. Nhiều chủ đề hấp dẫn về các công nghệ mới nhất từ Google I/O 2022, bao gồm Android, Flutter, Cloud và Web."
        isPast={true}
        stats={stats}
        topics={topics}
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
