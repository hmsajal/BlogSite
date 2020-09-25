/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Hi, I am <strong>{author.name}</strong>. {author?.summary || null}.
          {` `}
          This blog is built with{` `}
          <a href={`https://gatsbyjs.org`}>Gatsby</a>, a React based open source
          framework.
          {` `}
          You can
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            follow me on Twitter
          </a>
          {` `}
          or visit my
          {` `}
          <a href={author.personalSite || `https://hmsajal.netlify.app`}>
            personal website
          </a>
          .
        </p>
      )}
    </div>
  )
}

export default Bio
