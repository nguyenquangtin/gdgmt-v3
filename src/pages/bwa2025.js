import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/bwa2025.png";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const topics = [
  "Gemini 2.0", "Generative AI", "Google AI Studio",
  "Vertex AI", "Hands-on Codelabs", "Prompt Engineering",
];

const BWA2025Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="bwa"
      title="Build With AI 2025 — Exploring the Future with Gemini 2.0 & Generative AI"
      date="19 tháng 4, 2025 · Đà Nẵng"
      location="Da Nang Software Park #2, Hải Châu, Đà Nẵng"
      description="Build With AI 2025 — workshop chuyên sâu về Gemini 2.0 và Generative AI, được tổ chức bởi GDG MienTrung phối hợp cùng GDG on Campus. Học viên được thực hành trực tiếp với Google AI Studio, Vertex AI và các công cụ AI tiên tiến nhất của Google."
      isPast={true}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default BWA2025Page;
