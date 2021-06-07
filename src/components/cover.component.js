import React from "react"

//add Gatsby image and gatsby background image to make this correct.
export const Cover = ({ bgImage, children }) => {
  return (
    <div className=" background-image cover"
    style={{
      backgroundImage: `url(${
        !!bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : "../images/profile-pic.png"
      })`,
      backgroundPosition: `top left`,
      backgroundAttachment: `fixed`,
    }}>
      <div className="cover__inner-container">
        {children}
      </div>
    </div>
  )
}

