import React from "react"
import "./button.css"

export const Button = ({ button, ...other }) => { 
  return (
    <div>

    
  <a  className={`btn btn--${button.style}`} href={button.url} >
    {button.text}
  </a>
  </div>
  )
}

