import React from "react"
import {Button} from "./button.component";

export const TitleHTMLBodyButton = ({ title, body, button , buttonStyle }) => {
  function createMarkup(body) {
    return {__html: body};
  }

  return (
    <section>
      {title ? <h2 className="section__title">{title}</h2> : "" }
      {body ? <div className="section__body" dangerouslySetInnerHTML={createMarkup(body)}/> : "" }
      {button ? <Button button={button}/> : ""}
      
    </section>
  )
}
