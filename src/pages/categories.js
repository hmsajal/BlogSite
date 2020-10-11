import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useTagScraper from "../components/useTagScraper"
import styles from "./categories.module.scss"

const Categories = ({ data, location }) => {
  const title = data.site.siteMetadata.title
  const items = data.allContentfulBlogPost.edges
  let tagItems = items.map(({ node }) => node.categories)

  const tags = useTagScraper(tagItems)

  return (
    <Layout location={location} title={title}>
      <SEO title="Categories" />
      <ul className={styles.ul}>
        {tags.map((item, i) => (
          <li key={i}>
            <Link to="/">{item}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Categories

export const categoriesQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          categories
        }
      }
    }
  }
`
