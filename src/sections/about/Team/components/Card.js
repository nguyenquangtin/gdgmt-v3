import React from "react"
const TeamCard = ({ title, subtitle, image, facebook }) => {
  return (
    <div className="about-team-card">
      <div className="about-team-card__image">
        <img className="w-100" src={image} alt="team" />
      </div>
      <div className="about-team-card__content">
        <h6>{title}</h6>
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="about-team-card__social">
            <i className="fab fa-facebook-f" />
          </a>
        )}
      </div>
    </div>
  )
}

export default TeamCard
