import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/io2023.jpg";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const stats = [
  { value: "1.600+", label: "Attendees" },
  { value: "12",     label: "Speakers" },
  { value: "10",     label: "Sessions" },
  { value: "2",      label: "Tracks" },
];

const topics = [
  "Google AI", "Flutter", "Google Cloud",
  "Cybersecurity", "Design Thinking", "Agile",
];

const IO2023Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="io"
      title='Google I/O Extended MienTrung 2023 — "Spin2Win"'
      date="22 tháng 7, 2023 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description='Google I/O Extended MienTrung 2023 với chủ đề "Spin2Win" là sự kiện lớn nhất từ trước đến nay của GDG MienTrung, quy tụ hơn 1.600 lập trình viên và sinh viên. Sự kiện chia làm 2 phòng song song với 10 phiên tech talk từ 12 diễn giả chuyên gia, mang đến những cập nhật mới nhất về AI, Flutter, Cloud từ Google I/O 2023.'
      isPast={true}
      stats={stats}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default IO2023Page;
