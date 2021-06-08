import React from "react"
import "./happy-girl.css";

import { StaticImage } from "gatsby-plugin-image"
import { TitleHTMLBodyButton} from "./title-HTML-body-button.component"
import { Column } from "./column.component"
import {ColumnContainer} from "./column-container.component"

export const HappyGirl = ({title, body, button}) => {
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
        aspectRatio={1440 / 600}
        placeholder= "blurred"
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={"../images/banner-2.jpg"}
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
        <ColumnContainer>
          <div className="right-section">
            <TitleHTMLBodyButton
                    title = {title}
                    body = {body}
                    button = {button}
                    />
          </div>
        </ColumnContainer>
      </div>
    </div>
  )
}