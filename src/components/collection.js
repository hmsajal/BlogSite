import React from "react"
import { Link } from "gatsby"

const Collection = ({ posts }) => {
  return posts.length === 0 ? (
    <p>
      No blog posts found. Add markdown posts to "content/blog" (or the
      directory you specified for the "gatsby-source-filesystem" plugin in
      gatsby-config.js).
    </p>
  ) : (
    posts.map(post => {
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
      const title = post.frontmatter.title || post.fields.slug
      const date = new Date(post.frontmatter.date).toLocaleString(
        "en-GB",
        options
      )
      return (
        <article
          key={post.fields.slug}
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <Link to={post.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small>{date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </section>
        </article>
      )
    })
  )
}

export default Collection
