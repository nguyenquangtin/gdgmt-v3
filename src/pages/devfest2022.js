import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/d1.png";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const DevFest2022Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="devfest"
      title="GDG DevFest MienTrung 2022 — Dive In Tech, Shake Yourself"
      date="2022 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="GDG DevFest MienTrung 2022 quy tụ hơn 400 lập trình viên giàu kinh nghiệm với loạt tech talk chuyên sâu về AI, Firebase, Web và Google Cloud từ 10 diễn giả uy tín. Dive In Tech, Shake Yourself!"
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default DevFest2022Page;
