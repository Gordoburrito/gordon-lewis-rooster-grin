import React from "react"
import "./footer.css"

export const Footer = ({ children}) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="follow-us">
          <span>Follow us:</span>
        </div>
        <div className="footer__social-link-list">
          {children}
          <div className="footer__social-link-list__item">

          </div>
          <div className="footer__social-link-list__item">

          </div>
        </div>
      </div>
    </div>
  )
}
