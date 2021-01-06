import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "photo1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const AboutMe = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return ( 
  
  <section className="service-container">
    <Image fluid={fluid}/>
      <div className="about-text">
        <p>About Me</p>
        <p> Devolper & Designer</p>
        <p>Hello, My name is Loubna. I'm a Front end Web Devolper and Web designer. If you have any Project or you want make a software for your bisnes contact me.</p>
        <Link to ="/Projects" className="btn"> Project </Link>
      </div>
    </section>
  )

}

export default AboutMe