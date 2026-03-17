import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const IO2023Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="io"
      title="Google I/O Extended MienTrung 2023 — Spin2Win"
      date="22 tháng 7, 2023 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description='Google I/O Extended MienTrung 2023 với chủ đề "Spin2Win" quy tụ hơn 1.600 lập trình viên và sinh viên. Sự kiện mang đến những cập nhật mới nhất về AI, Flutter, Cloud và Data từ Google I/O 2023.'
      registerUrl="https://gdg.community.dev/events/details/google-gdg-mientrung-presents-google-io-extended-mientrung-2023/"
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default IO2023Page;
