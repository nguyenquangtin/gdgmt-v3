import React from "react"
const TeamCard = ({ title, subtitle, image, socials }) => {
  return (
    <div className="about-team-card">
      <div className="about-team-card__image">
        <img className="w-100" src={image} alt="team" />
      </div>
      <div className="about-team-card__content">
        <h6>{title}</h6>
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />

        <div className="social-links">

         {socials?.facebook &&
          (<a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-lg fa-facebook"></i>
            </a>
          )}

          {socials?.twitter && (<a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lg fa-twitter"></i>
          </a>
          )}

          {socials?.linkedin &&
          (<a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lg  fa-linkedin-in"></i>
          </a>)}

          {socials?.github &&
          (<a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lg  fa-github"></i>
          </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard
