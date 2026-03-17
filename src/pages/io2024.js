import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/io2024.jpg";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const stats = [
  { value: "800+", label: "Attendees" },
  { value: "2",    label: "Days" },
  { value: "3",    label: "Tracks" },
];

const topics = [
  "Build with AI", "Gemini API", "Grow with Android",
  "What's new in Tech 2024", "Google Cloud", "Flutter",
];

const IO2024Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="io"
      title="Google I/O Extended MienTrung 2024"
      date="6–7 tháng 7, 2024 · Swinburne Vietnam, Đà Nẵng"
      location="Swinburne Vietnam, Đà Nẵng"
      description="Google I/O Extended MienTrung 2024 là lần đầu tiên sự kiện diễn ra trong 2 ngày liên tiếp, quy tụ hơn 800 lập trình viên. Ba track song song gồm Build with AI, Grow with Android và What's new in Tech 2024 — với sự tham gia của các Google Developer Experts về GCP, ML và Flutter từ khắp Việt Nam."
      registerUrl="https://gdg.community.dev/events/details/google-gdg-mientrung-presents-google-io-extended-mientrung-2024/"
      isPast={true}
      stats={stats}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default IO2024Page;
