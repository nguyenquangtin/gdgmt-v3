import React from "react";
import { BannerData } from "./data";

const HeroSection = () => {
  const featuredEvent = BannerData[0];

  return (
    <section className="gdg-hero">
      {/* Aurora animated background blobs */}
      <div className="gdg-hero__aurora" aria-hidden="true">
        <div className="gdg-hero__blob gdg-hero__blob--blue" />
        <div className="gdg-hero__blob gdg-hero__blob--red" />
        <div className="gdg-hero__blob gdg-hero__blob--yellow" />
        <div className="gdg-hero__blob gdg-hero__blob--green" />
      </div>

      <div className="container">
        <div className="row align-items-center gdg-hero__row">
          {/* Left: Branding + CTA */}
          <div
            className="col-lg-6 gdg-hero__content"
            data-aos="fade-right"
            data-aos-duration={700}
            data-aos-once="true"
          >
            <div className="gdg-hero__badge">
              <span className="gdg-dot gdg-dot--blue" aria-hidden="true" />
              <span className="gdg-dot gdg-dot--red" aria-hidden="true" />
              <span className="gdg-dot gdg-dot--yellow" aria-hidden="true" />
              <span className="gdg-dot gdg-dot--green" aria-hidden="true" />
              <span>Google Developer Group</span>
            </div>

            <h1 className="gdg-hero__title">
              Mien Trung
              <br />
              <span className="gdg-hero__title-accent">Community</span>
            </h1>

            <p className="gdg-hero__subtitle">
              Join developers, designers, and tech enthusiasts in Central
              Vietnam to learn, share, and grow with Google technologies.
            </p>

            <div className="gdg-hero__cta">
              <a
                href="https://gdg.community.dev/gdg-mien-trung/"
                className="gdg-btn gdg-btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
              <a
                href="https://gdg.community.dev/gdg-mien-trung/"
                className="gdg-btn gdg-btn--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Events
              </a>
            </div>
          </div>

          {/* Right: Featured Event Card */}
          <div
            className="col-lg-6 gdg-hero__event-col"
            data-aos="fade-left"
            data-aos-duration={700}
            data-aos-delay={100}
            data-aos-once="true"
          >
            <a
              href={featuredEvent.link}
              className="gdg-event-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gdg-event-card__img-wrap">
                <img src={featuredEvent.image} alt="Upcoming GDG Event" />
                <span className="gdg-event-card__badge">Upcoming</span>
              </div>
              <div className="gdg-event-card__body">
                <p className="gdg-event-card__desc">{featuredEvent.text}</p>
                <span className="gdg-event-card__cta">
                  Register Now
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
