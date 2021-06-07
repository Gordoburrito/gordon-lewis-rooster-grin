import React from "react"
import PropTypes from "prop-types"
import { Button } from "./button.component"
import { StaticImage } from "gatsby-plugin-image"

export const Hero = ({ image, heading, subheading, button, ...other }) => {
  

  return (
    <div className="hero background-image"
      style={{
        backgroundImage: `url(${image})`
      }}
      >
        <h1 className="hero__heading">{heading}</h1>
        <h1 className="hero__subheading">{subheading}</h1>
        <Button button = {button}/>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}
