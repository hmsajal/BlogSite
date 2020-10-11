import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './blog-post.module.scss'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext
  let options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }
  const date = new Date(post.date).toLocaleString("en-GB", options)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={
          post.internal.description || post.mainText.childMarkdownRemark.excerpt
        }
      />
      <article
        className={styles.article}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.mainText.childMarkdownRemark.html,
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer />
      </article>
      <nav className={styles.nav}>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/post/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/post/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query singlePostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }    
    contentfulBlogPost(slug: {eq: $slug}){          
      title
      date
      slug
      internal {
        description
      }      
      mainText {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 130)
          timeToRead
        }
      }
    }  
  }
`

export default BlogPostTemplate
