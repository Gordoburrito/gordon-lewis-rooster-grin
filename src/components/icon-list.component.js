import React from "react"
import "./icon-list.css"

export const IconList = ({ icons }) => {
   return ( 
    <>
     <div className= "icon-list">
      {icons.map((icon, i)=> {
        return (
          <div className="icon-list__item" key = {i}>
            <div className="icon-list__icon-wrapper">
              <div className="icon-list__icon">{icon.svg}</div>
            </div>
            <span className="icon-list__item__name">{icon.name}</span>
          </div>
        )
      })}
    </div>
    </>
   )
}
