import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const DevFest2021Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="devfest"
      title="GDG DevFest MienTrung 2021"
      date="2021 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="GDG DevFest MienTrung 2021 — hackathon quy mô lớn với 50 đội thi đấu trong 7 ngày, hơn 50 mentor và chuyên gia đồng hành. 10 đội xuất sắc nhất bước vào vòng chung kết để trình bày dự án trước ban giám khảo."
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default DevFest2021Page;
