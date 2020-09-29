import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/collection"

const Posts = ({ data, location }) => {
  const allposts = data.allMarkdownRemark.nodes
  const title = data.site.siteMetadata?.title || `Sajal's Blog`
  return (
    <Layout location={location} title={title}>
      <SEO title="All posts"></SEO>
      <Collection posts={allposts} />
    </Layout>
  )
}

export default Posts

export const mdPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
`
