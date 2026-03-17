import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";
import banner from "../assets/image/banners/devfest2021.png";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const stats = [
  { value: "50+",  label: "Teams" },
  { value: "50+",  label: "Mentors" },
  { value: "7",    label: "Days" },
  { value: "10",   label: "Finalists" },
];

const topics = [
  "Google Cloud", "Mobile Development", "Web Development",
  "AI / Machine Learning", "Firebase", "Hackathon",
];

const DevFest2021Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      banner={banner}
      type="devfest"
      title="GDG DevFest MienTrung 2021"
      date="2021 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="GDG DevFest MienTrung 2021 — hackathon quy mô lớn diễn ra trong 7 ngày với hơn 50 đội tham gia và sự đồng hành của hơn 50 mentor, chuyên gia công nghệ. 10 đội xuất sắc nhất bước vào vòng chung kết để trình bày sản phẩm trước ban giám khảo gồm các kỹ sư Google và chuyên gia trong ngành."
      isPast={true}
      stats={stats}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default DevFest2021Page;
