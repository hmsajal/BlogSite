import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Bio = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
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
      `}
      render={data => {
        const author = data.site.siteMetadata?.author
        const social = data.site.siteMetadata?.social
        return (
          <div className="bio">
            {author?.name && (
              <p>
                Hi, I am <strong>{author.name}</strong>.{" "}
                {author?.summary || null}.{` `}
                This blog is built with{` `}
                <a href={`https://gatsbyjs.org`}>Gatsby</a>, a React based open
                source framework.
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
      }}
    />
  )
}

export default Bio
