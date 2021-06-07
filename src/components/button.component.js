import React from "react"

export const Button = ({ button, ...other }) => { 
  return (
  <a  className={`btn btn--${button.style}`} href={button.url} >
    {button.text}
  </a>
  
  )
}

