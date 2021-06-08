import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Button } from "../components/button.component"

export const SuperHero = ({heading, subheading, button}) => {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          maxHeight: 600,
        }}
        className="cover-image"
        layout="fullWidth"
        aspectRatio={2 / 1}
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
        <TitleHTMLBodyButton
                title = "Lorem Ipsum"
                button = {{text:"BUTTON BUTTON", url:"#", style:"secondary"}}
              />
      </div>
    </div>
  )
}