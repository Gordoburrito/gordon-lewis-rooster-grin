import * as React from "react"
import { Link } from "gatsby"
import LogoWhite from "../assets/logo-white.svg"

export const NavBar = () => { 
  return (
    <nav className="nav">
      <Link to="/">
        <LogoWhite/>
      </Link>
    </nav>
  )
}

