import React from "react"
import Link from "../../../../components/Link"

export default function Card({image,titlSmall,title}) {
  return (
    <>
      <div className="portfolio-card portfolio-card-masonry-1">
        <Link to="/portfolio-details" className="card-image d-block">
          <img
            src={image}
            alt={title}
            className="w-100"
          />
        </Link>
      </div>
    </>
  )
}
