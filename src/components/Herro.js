import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Herro = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section className="herro">
      <div className="text-container">
        <p>Hello,</p>
        <p>I'm Loubna</p>
        <p>I'm Front end web Developer and web Dsigner. </p>
        <Link to ="/contact" className="btn"> contact me </Link>
        <SocialLinks />
      </div>
      <Image fluid={fluid} className="model" /> 
    </section>
  )
}

export default Herro