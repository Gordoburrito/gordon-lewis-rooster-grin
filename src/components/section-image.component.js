import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const SectionImage = ({ img }) => {

  return (
    <div class="section-image">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src={img}
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
        />
    </div>
    )
}

