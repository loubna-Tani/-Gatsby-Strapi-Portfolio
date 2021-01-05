import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"


const ProjectsPage = ({data : {allStrapiProjects: { nodes: projects }}}) => {
  return <Layout>
    <section className="projects-page">
     <Projects projects={projects} title="all projects"></Projects>
  </section>

  </Layout>
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

export default ProjectsPage
