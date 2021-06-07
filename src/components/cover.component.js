import React from "react"

//add Gatsby image and gatsby background image to make this correct.
export const Cover = ({ bgImage, children }) => {
  return (
    <div className="container background-image">
      {children}
    </div>
  )
}

