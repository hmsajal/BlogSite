import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useTagScraper from "../components/useTagScraper"
import styles from "./categories.module.scss"

const Categories = ({ data, location }) => {
  const items = data.allMarkdownRemark.nodes
  const title = data.site.siteMetadata.title

  const tags = useTagScraper(items)

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
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
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`
