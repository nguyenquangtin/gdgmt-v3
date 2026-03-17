import React from "react";
import { FooterSection } from "../sections/gdg";
import EventHero from "../sections/gdg/EventHero";
import PageWrapper from "../components/PageWrapper";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: false,
  darkLogo: true,
};

const topics = [
  "Women in Tech", "Career Development", "Leadership",
  "Networking", "Tech Talks", "Mentorship",
];

const WTM2023Page = () => (
  <PageWrapper headerConfig={Header}>
    <EventHero
      type="wtm"
      title="WomenTechmakers — GDG MienTrung 2023"
      date="25 tháng 3, 2023 · Đà Nẵng"
      location="Đà Nẵng, Việt Nam"
      description="Sự kiện WomenTechmakers 2023 do GDG MienTrung tổ chức nhân Ngày Quốc tế Phụ nữ, kết hợp career fair, networking và các buổi chia sẻ chuyên sâu về phát triển nghề nghiệp trong lĩnh vực công nghệ. Một không gian đặc biệt dành riêng cho phụ nữ đam mê công nghệ ở miền Trung."
      registerUrl="https://gdg.community.dev/events/details/google-gdg-mientrung-presents-womentechmaker-gdg-mientrung-2023/"
      isPast={true}
      topics={topics}
    />
    <FooterSection />
  </PageWrapper>
);

export default WTM2023Page;
