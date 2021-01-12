import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar">
     <div class="title"> Loubna </div>
     <div class="categories">
     <PageLinks styleClass="nav-links"></PageLinks>
     </div>
     </div>
   </nav>
  )
}

export default Nav