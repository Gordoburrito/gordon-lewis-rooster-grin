import React from "react"
import "./button.css"

export const Button = ({ button, styleName, ...other }) => { 
  return (
  <div className={styleName}>
    <a  className={`btn btn--${button.style}`} href={button.url} >
      {button.text}
    </a>
  </div>
  )
}

