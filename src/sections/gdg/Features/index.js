import React from "react"
import Widget from "./components/FeatureWidget"
import Data from "./data"

const FeatureSection = () => {
  return (
    <section className="gdg-features">
      <div className="container">
        <div
          className="gdg-features__heading text-center"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-once="true"
        >
          <h2 className="gdg-features__title">What does our community do?</h2>
          <p className="gdg-features__subtitle">
            From annual conferences to hands-on workshops — we bring the Google
            developer ecosystem to Central Vietnam.
          </p>
        </div>

        <div className="row gdg-features__grid">
          {Data.map((item, index) => (
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={index * 80}
              data-aos-once="true"
              key={index}
            >
              <Widget
                title={item.title}
                text={item.text}
                icon={item.icon}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
