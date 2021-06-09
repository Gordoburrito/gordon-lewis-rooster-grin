import React from "react"
import "./happy-girl.css";

import { StaticImage } from "gatsby-plugin-image"
import { TitleHTMLBodyButton} from "./title-HTML-body-button.component"
import {ColumnContainer} from "./column-container.component"

export const HappyGirl = ({title, body, button}) => {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
          maxHeight: 600,
        }}
        className="cover-image"
        layout="fullWidth"
        aspectRatio={1440 / 600}
        placeholder= "blurred"
        alt="A happy young girl with her mouth open"
        src={"../images/banner-2.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className="overlay"
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <ColumnContainer>
          <div className="column-container__right-section">
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