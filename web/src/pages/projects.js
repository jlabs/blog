import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import ProjectPreviewGrid from '../components/project-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(
      filter: { slug: { current: { ne: null } } }
      ) {
      edges {
        node {
          id
          title
          description
          _createdAt
          slug {
            current
          }
        }
      }
    }
  }
`

const ProjectsPage = props => {
  const {data, errors} = props
  console.log(data)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.projects && mapEdgesToNodes(data.projects)

  return (
    <Layout>
      <SEO title='Projects' />
      <Container>
        <h1 className={responsiveTitle1}>Projects</h1>
        {postNodes && postNodes.length > 0 && <ProjectPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
