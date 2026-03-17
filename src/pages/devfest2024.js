import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const stats = [
  { value: "200+", label: "Attendees" },
];

const topics = [
  "AI Trends", "Chatbot Development", "Tech Integration",
  "Google Cloud", "Flutter", "Firebase",
];

const DevFest2024Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="devfest"
      title='GDG DevFest MienTrung 2024 — "Catch Me If You Can"'
      date="14 tháng 12, 2024 · Đà Nẵng"
      location="Grand Tourane Hotel, Đà Nẵng"
      description='GDG DevFest MienTrung 2024 với chủ đề "Catch Me If You Can" — sự kiện thường niên lớn nhất cuối năm của cộng đồng developer miền Trung, tổ chức tại Grand Tourane Hotel. Hơn 200 lập trình viên tham gia các track thực hành chuyên sâu về AI trends, xây dựng chatbot và tích hợp công nghệ mới nhất của Google.'
      isPast={true}
      stats={stats}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default DevFest2024Page;
