import React from "react"
import './carousel-blurb.css'

export const CarouselBlurb = ({ name, date, quote }) => {
  return (
    <div className="blurb">
      <p className="blurb__author">{name} {date}</p>
      <p className="blurb__quote">{quote}</p>
    </div>
  )
}

