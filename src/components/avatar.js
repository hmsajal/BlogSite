import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const Avatar = ({ imageAltName }) => {
  return (
    <StaticQuery
      query={graphql`
        query avatarQuery {
          avatar: file(absolutePath: { regex: "/portrait/" }) {
            childImageSharp {
              fixed(width: 50, height: 50, quality: 95, cropFocus: NORTH) {
                originalName
                height
                base64
                aspectRatio
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
                width
              }
            }
          }
        }
      `}
      render={data => (
        <Image
          fixed={data?.avatar?.childImageSharp?.fixed}
          alt={imageAltName || `avatar`}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
    />
  )
}

export default Avatar
