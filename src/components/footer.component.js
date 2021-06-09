import React from "react"
import "./footer.css"
import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"

export const Footer = ({ children}) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="follow-us">
          <span>Follow us:</span>
        </div>
        <div className="footer__social-link-list">
          <div className="footer__social-link-list__item">
            <Instagram/>
          </div>
          <div className="footer__social-link-list__item">
            <Facebook/>
          </div>
        </div>
      </div>
    </div>
  )
}
