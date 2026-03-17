import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/bwa2026.jpg";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const BWA2026Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="bwa"
      title="Build With AI 2026 — Fuel the Future"
      date="11 tháng 4, 2026 · 1:30 PM – 5:00 PM"
      location="Vanda Hotel, Đà Nẵng"
      description="Build With AI 2026: Fuel the Future — sự kiện khám phá AI, Gemini, Vertex AI và các code labs thực hành. Tham gia cùng cộng đồng lập trình viên miền Trung để xây dựng tương lai với trí tuệ nhân tạo."
      registerUrl="https://gdg.community.dev/events/details/google-gdg-mientrung-presents-build-with-ai-2026-fuel-the-future/"
      isPast={false}
    />
    <FooterSection />
  </PageWrapper>
);

export default BWA2026Page;
