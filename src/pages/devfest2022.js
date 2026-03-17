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

const stats = [
  { value: "400+", label: "Attendees" },
  { value: "10",   label: "Speakers" },
  { value: "8",    label: "Sessions" },
  { value: "2",    label: "Tracks" },
];

const topics = [
  "Google Cloud", "AI / Machine Learning", "Flutter", "Firebase",
  "Web Development", "Agile / Scrum",
];

const DevFest2022Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="devfest"
      title="GDG DevFest MienTrung 2022 — Dive In Tech, Shake Yourself"
      date="3 tháng 12, 2022 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="GDG DevFest MienTrung 2022 quy tụ hơn 400 lập trình viên với 8 phiên tech talk chuyên sâu chia thành 2 phòng song song. 10 diễn giả uy tín chia sẻ về Cloud, AI/ML, Flutter, Firebase và Agile — chuỗi sự kiện thường niên lớn nhất trong năm của cộng đồng developer miền Trung."
      isPast={true}
      stats={stats}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default DevFest2022Page;
