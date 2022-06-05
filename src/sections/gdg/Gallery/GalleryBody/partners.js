import React from "react"
import Link from "../../../../components/Link"
import Card from '../components/Card'

export default function PartnerBody({images}) {
  return <>
  <div className="portfolio-section pt-90">
  <div className="container">
    <div className="row justify-content-center">
        {images.map(({title,titleSmall,image}, index)=>{return(
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gr-pb-7" key={index}>
                <Card title={title} titleSmall={titleSmall} image={image} />
            </div>
        )})}

      <div className="col-12 text-center portfolio-load-btn">
        <Link to="/partners" className="btn focus-reset">View all</Link>
      </div>

    </div>
  </div>
</div>

</>
}
