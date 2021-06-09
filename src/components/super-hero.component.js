import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Button } from "../components/button.component"
import NavBar from "../components/navbar.component"
import LogoWhite from "../assets/logo-white.svg"
import { Link } from "gatsby"
import './hero.css'

export const SuperHero = ({heading, subheading, button}) => {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          maxHeight: 700,
        }}
        className="cover-image"
        layout="fullWidth"
        aspectRatio={1440 / 700}
        placeholder= "blurred"
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={"../images/hero.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className="container container-cover"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <nav className="nav">
          <Link to="/">
            <LogoWhite/>
          </Link>
        </nav>
        <div className="hero">
          
          <h1 className="hero__heading">{heading}</h1>
          <h2 className="hero__subheading">{subheading}</h2>
          <Button button = {button}/>
        </div>
      </div>
    </div>
  )
}