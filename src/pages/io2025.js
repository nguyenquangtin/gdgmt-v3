import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const IO2025Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="io"
      title="Google I/O Extended MienTrung 2025"
      date="12 tháng 7, 2025 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="Google I/O Extended MienTrung 2025 — sự kiện dành cho 500+ lập trình viên với các workshop thực hành, diễn giả chuyên gia, và cơ hội networking. Cập nhật mọi công nghệ mới nhất từ Google I/O 2025."
      registerUrl="https://gdgmientrung-io25.vercel.app/"
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default IO2025Page;
