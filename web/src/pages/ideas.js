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
  query IdeasPageQuery {
    ideas: allSanityIdea {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
        }
      }
    }
  }
`

const IdeasPage = props => {
  const {data, errors} = props
  console.log(data.ideas)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.ideas && mapEdgesToNodes(data.ideas)

  return (
    <Layout>
      <SEO title='Ideas' />
      <Container>
        <h1 className={responsiveTitle1}>Ideas</h1>
        {postNodes && postNodes.length > 0 && <ProjectPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default IdeasPage
