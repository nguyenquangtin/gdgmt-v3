import React from "react"

// Google brand accent colors cycling per card
const ACCENTS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#4285F4"]

const Widget = ({ icon, title, text, index }) => {
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <div className="gdg-feature-card" style={{ "--gdg-accent": accent }}>
      <div className="gdg-feature-card__icon">
        <i className={icon} aria-hidden="true" />
      </div>
      <h4 className="gdg-feature-card__title">{title}</h4>
      <p
        className="gdg-feature-card__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}

export default Widget
