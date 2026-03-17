import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const IO2024Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="io"
      title="Google I/O Extended MienTrung 2024"
      date="6–7 tháng 7, 2024 · Đà Nẵng"
      location="Swinburne Vietnam University, Đà Nẵng"
      description="Google I/O Extended MienTrung 2024 — lần đầu tiên tổ chức 2 ngày liên tiếp với hơn 800 người tham dự. Ba chủ đề chính: Build with AI (phát triển ứng dụng AI), Grow with Android và What's new in Tech 2024."
      registerUrl="https://gdg.community.dev/events/details/google-gdg-mientrung-presents-google-io-extended-mientrung-2024/"
      isPast={true}
    />
    <FooterSection />
  </PageWrapper>
);

export default IO2024Page;
