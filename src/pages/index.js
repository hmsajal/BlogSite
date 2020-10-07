import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
