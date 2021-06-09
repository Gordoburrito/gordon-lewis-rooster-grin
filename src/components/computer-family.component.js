import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { TitleHTMLBodyButton} from "./title-HTML-body-button.component"
import { Column } from "./column.component"
import {ColumnContainer} from "./column-container.component"

export const ComputerFamily = ({title, body, button}) => {
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
        alt="A mother with her son in her lap using a laptop"
        src={"../images/banner-1.jpg"}
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
          <Column columnWidth="6">
          <TitleHTMLBodyButton
                  title = {title}
                  button = {button}
                  />
          </Column>
        </ColumnContainer>
      </div>
    </div>
  )
}