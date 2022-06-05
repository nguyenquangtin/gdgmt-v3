import React from "react"
import Link from "../../../../components/Link"

export default function HomeSponsorBody({images, isViewAll=false}) {
  return <>
  <div className="portfolio-section pt-90">
  <div className="container">
    <div className="row justify-content-center">
        {images.map(({title,titleSmall,image}, index)=>{return(
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 gr-pb-7 d-flex flex-wrap justify-content-center  align-items-center" key={index}>
                <img
                  src={image}
                  alt={title}
                  className="img-fluid"
                  style={{ maxHeight: "100px"}}
                />
            </div>
        )})}

      { isViewAll && (<div className="col-12 text-center portfolio-load-btn"><Link to="/partners" className="btn focus-reset">View all</Link></div>) }

    </div>
  </div>
</div>

</>
}
