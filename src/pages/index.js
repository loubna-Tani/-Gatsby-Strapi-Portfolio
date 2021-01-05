import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Herro from "../components/Herro"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
import Blogs from "../components/Blogs"

export default ({data}) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Herro />
      <AboutMe/>
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        description
        title
        url
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
