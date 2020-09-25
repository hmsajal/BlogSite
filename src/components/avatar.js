import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Avatar = ({ imageAltName }) => {
  const imageData = useStaticQuery(graphql`
    query ImageQuery {
      avatar: file(absolutePath: { regex: "/portrait/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95, cropFocus: NORTH) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const avatar = imageData?.avatar?.childImageSharp?.fixed

  return (
    avatar && (
      <Image
        fixed={avatar}
        alt={imageAltName || `avatar`}
        className="bio-avatar"
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    )
  )
}

export default Avatar
