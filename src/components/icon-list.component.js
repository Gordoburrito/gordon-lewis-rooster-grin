import React from "react"

export const IconList = ({ icons }) => {
  
   return ( 
     <div className= "icon-list">
      {icons.map((icon, i)=> {
        return (
          <div className="icon-list__item"key = {i}>
            <div className="icon-list__item__icon">{icon.svg}</div>
            <p className="icon-list__item__name">{icon.name}</p>
          </div>
        )
      })}
    </div>
   )
}
