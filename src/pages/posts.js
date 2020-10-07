import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/collection"

const Posts = ({ data, location }) => {
  const allposts = data.allContentfulBlogPost.nodes
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
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        categories
        date
        internal {
          description
        }
        mainText {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
