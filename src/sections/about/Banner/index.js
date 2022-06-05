import React from "react"
import Link  from "next/link"
export default function BannerSection() {
  return (
    <div className="about-us-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="about-us-banner-content text-center">
              <h2>Connecting developer community</h2>
              <p>
                GDG Mientrung plan and host meetup events on a wide
                range of technical topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
