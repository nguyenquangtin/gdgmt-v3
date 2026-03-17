import React from "react"

// Google brand gradient by event type
const TYPE_GRADIENTS = {
  devfest:  "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
  io:       "linear-gradient(135deg, #4285F4 0%, #a855f7 100%)",
  wtm:      "linear-gradient(135deg, #EA4335 0%, #FBBC05 100%)",
  bwa:      "linear-gradient(135deg, #34A853 0%, #4285F4 100%)",
  default:  "linear-gradient(135deg, #4285F4 0%, #0d152e 100%)",
}

/**
 * Reusable event hero for GDG event pages.
 * Pass `banner` image OR `type` (devfest|io|wtm|bwa) for a gradient fallback.
 * Optional: `stats` array [{value, label}] and `topics` array of strings.
 */
const EventHero = ({ banner, type, title, date, location, description, registerUrl, isPast, stats, topics }) => {
  const gradient = TYPE_GRADIENTS[type] || TYPE_GRADIENTS.default

  return (
    <section className="gdg-event-hero">
      {/* Banner: image or gradient */}
      <div
        className={`gdg-event-hero__banner ${!banner ? "gdg-event-hero__banner--gradient" : ""}`}
        style={!banner ? { background: gradient } : undefined}
      >
        {banner && <img src={banner} alt={title} />}

        {/* Overlay title for gradient banners */}
        {!banner && (
          <div className="gdg-event-hero__banner-overlay">
            <div className="gdg-event-hero__banner-dots" aria-hidden="true">
              <span className="gdg-dot gdg-dot--blue" />
              <span className="gdg-dot gdg-dot--red" />
              <span className="gdg-dot gdg-dot--yellow" />
              <span className="gdg-dot gdg-dot--green" />
            </div>
            <span className="gdg-event-hero__banner-label">GDG Mien Trung</span>
          </div>
        )}

        {isPast && (
          <span className="gdg-event-hero__past-badge">Past Event</span>
        )}
      </div>

      {/* Event info */}
      <div className="container">
        <div className="gdg-event-hero__info">
          <div
            className="gdg-event-hero__meta"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-once="true"
          >
            {date && (
              <span className="gdg-event-hero__date">
                <i className="fas fa-calendar-alt" aria-hidden="true" />
                {date}
              </span>
            )}
            {location && (
              <span className="gdg-event-hero__location">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {location}
              </span>
            )}
          </div>

          <h1
            className="gdg-event-hero__title"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={80}
            data-aos-once="true"
          >
            {title}
          </h1>

          {description && (
            <p
              className="gdg-event-hero__desc"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={140}
              data-aos-once="true"
            >
              {description}
            </p>
          )}

          {/* Stats row */}
          {stats && stats.length > 0 && (
            <div
              className="gdg-event-stats"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={180}
              data-aos-once="true"
            >
              {stats.map((s, i) => (
                <div className="gdg-event-stat" key={i}>
                  <div className="gdg-event-stat__value">{s.value}</div>
                  <div className="gdg-event-stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Topic tags */}
          {topics && topics.length > 0 && (
            <div
              className="gdg-event-topics"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={220}
              data-aos-once="true"
            >
              {topics.map((t, i) => (
                <span className="gdg-event-topic" key={i}>{t}</span>
              ))}
            </div>
          )}

          {registerUrl && !isPast && (
            <a
              href={registerUrl}
              className="gdg-btn gdg-btn--primary mt-4 d-inline-block"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={260}
              data-aos-once="true"
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default EventHero
