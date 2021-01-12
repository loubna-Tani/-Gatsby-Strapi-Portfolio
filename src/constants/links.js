import React from "react"
import { Link } from "gatsby"
const data = [
 
  {
    id: 1,
    text: "about",
    url: "/about/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects/",
  },
   {
    id: 3,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
