import React from "react"
import "./icon-list.css"
import IconExpertise from "../assets/home-expertise.svg"
import IconHygiene from "../assets/home-hygiene.svg"
import IconLab from "../assets/home-lab.svg"
import IconRetention from "../assets/home-retention.svg"

export const IconList = ({ icons }) => {
  function createMarkup(body) {
    return {__html: body};
  }
const highIcons = [
  {name:"expertise",
  svg:<IconExpertise/>}, 

  {name: "hygiene",
  svg:<IconHygiene/>},

  {name: "lab",
  svg:<IconLab/>},

  {name: "retention",
  svg: <IconRetention/>}]

   return ( 
    <>
     <div className= "icon-list">
      {highIcons.map((icon, i)=> {
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
