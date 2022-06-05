import React from 'react'
const TestimonialCard=({imageUrl,mediaName,postUrl,text})=>{
    return(
     <>
     <div className="tesimonial-card">
     <div className="d-inline-flex">
       <img src={imageUrl} alt={mediaName} className="img-fluid" />
     </div>
     <div className="testimonial-body">
       <p>
       {text}
       </p>
       <div>
        <a href={`${postUrl}`} className="btn btn-primary stretched-link"
        target="_blank" rel="noreferrer">
         View article
        </a>
       </div>
     </div>
   </div>
     </>
    )
}

export default TestimonialCard;