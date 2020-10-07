import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ pageContext, location }) => {
  const { slug } = pageContext
  return (
    <StaticQuery
      query={graphql`
        query singlePostQuery($slug: String!) {
          site {
            siteMetadata {
              title
            }
          }
          contentfulBlogPost(
            mainText: {
              childMarkdownRemark: { fields: { slug: { eq: $slug } } }
            }
          ) {
            id
            title
            date
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
      `}
      render={data => {
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
                post.internal.description ||
                post.markdown.childMarkdownRemark.excerpt
              }
            />
            <article
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h1 itemProp="headline">{post.title}</h1>
                <p>{date}</p>
              </header>
              <section
                dangerouslySetInnerHTML={{
                  __html: post.markdown.childMarkdownRemark.html,
                }}
                itemProp="articleBody"
              />
              <hr />
              <footer />
            </article>
            <nav className="blog-post-nav">
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
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Layout>
        )
      }}
    />
  )
}

export default BlogPostTemplate
