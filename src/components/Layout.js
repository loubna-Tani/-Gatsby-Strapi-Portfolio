import React from "react"
// import "../css/main.css"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      {/* <Sidebar/> */}
      {children}
      <Footer/>
    </>
  )
}

export default Layout
