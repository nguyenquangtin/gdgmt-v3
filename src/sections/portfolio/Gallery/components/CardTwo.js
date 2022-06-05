import React from "react"
import Link  from "next/link"

export default function Card({ image, titlSmall, title }) {
  return (
    <>
        <div className="portfolio-card portfolio-card-masonry">
              <Link to="/" className="card-image d-block">
            <img src={image} alt="portfolio" className="w-100" />
            </Link>
            <div className="text-start  text-block  gr-bg-opacity d-block ">
            <span className=" d-block ponter-event-none">{titlSmall}</span>
            <h3>{title}</h3>
            </div>
        </div>
    </>
  )
}
