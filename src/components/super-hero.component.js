import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Button } from "./button.component"
import LogoWhite from "../assets/logo-white.svg"
import { Link } from "gatsby"
import './super-hero.css'

export const SuperHero = ({heading, subheading, button}) => {
  return (
    <div className="hero-background" style={{ display: "grid" }}>
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
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <nav className="nav animate-fade-in">
          <Link to="/">
            <LogoWhite/>
          </Link>
        </nav>
        <div className="hero">
          <h1 className="hero__heading animate-fade-in">{heading}</h1>
          <h2 className="hero__subheading animate-fade-in">{subheading}</h2>
          <Button styleName="btn--hero animate-fade-in"button = {button}/>
        </div>
      </div>
    </div>
  )
}