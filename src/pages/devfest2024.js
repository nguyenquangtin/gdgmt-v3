import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const DevFest2024Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="devfest"
      title="GDG DevFest MienTrung 2024"
      date="14 tháng 12, 2024 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="GDG DevFest MienTrung 2024 — sự kiện công nghệ thường niên lớn nhất trong năm của cộng đồng lập trình viên miền Trung, quy tụ các chuyên gia và kỹ sư Google để chia sẻ những xu hướng công nghệ mới nhất."
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default DevFest2024Page;
