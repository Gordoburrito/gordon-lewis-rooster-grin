import React from "react"
import PropTypes from "prop-types"
import { Button } from "./button.component"
import { StaticImage } from "gatsby-plugin-image"
import "./hero.css"

export const Hero = ({ image, heading, subheading, button, ...other }) => {
  

  return (
    <div className="hero-container">
      <div className = "hero">
        <h1 className="hero__heading">{heading}</h1>
        <h2 className="hero__subheading">{subheading}</h2>
        <Button button = {button}/>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}
