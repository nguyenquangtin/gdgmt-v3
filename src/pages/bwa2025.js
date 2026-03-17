import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const BWA2025Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="bwa"
      title="Build With AI 2025 — Exploring the Future with Gemini 2.0 & Generative AI"
      date="19 tháng 4, 2025 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="Build With AI 2025 — chuỗi workshop chuyên sâu về các công nghệ AI mới nhất của Google, bao gồm Gemini 2.0 và Generative AI. Sự kiện được tổ chức bởi GDG MienTrung và GDG on Campus, mang đến trải nghiệm thực hành cho cộng đồng lập trình viên miền Trung."
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default BWA2025Page;
