import React from "react"
import "./icon-list.css"

export const IconList = ({ icons }) => {
  function createMarkup(body) {
    return {__html: body};
  }
   return ( 
     <div className= "icon-list">
      {icons.map((icon, i)=> {
        return (
          <div className="icon-list__item" key = {i}>
            <div className="icon-list__icon" dangerouslySetInnerHTML={createMarkup(icon.svg)}/>
            <span className="icon-list__item__name">{icon.name}</span>
          </div>
        )
      })}
    </div>
   )
}
