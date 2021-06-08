import React from "react"
import {Button} from "./button.component";
import "./title-HTML-body-button.css"

export const TitleHTMLBodyButton = ({ title, body, button }) => {
  function createMarkup(body) {
    return {__html: body};
  }

  return (
    <section class="section">
      {title ? <h3 className="section__title">{title}</h3> : "" }
      {body ? <div className="section__body" dangerouslySetInnerHTML={createMarkup(body)}/> : "" }
      {button ? <Button button={button}/> : ""}
    </section>
  )
}
