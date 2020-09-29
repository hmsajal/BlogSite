import React, { Fragment } from "react"
import { Link } from "gatsby"

import styles from "./collection.module.scss"

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
      }
      const title = post.frontmatter.title || post.fields.slug
      const date = new Date(post.frontmatter.date).toLocaleString(
        "en-GB",
        options
      )
      const tags = post.frontmatter.tags

      return (
        <article
          key={post.fields.slug}
          className={styles.postListItem}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <Link to={post.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small>
              <span className={styles.smallDate}>{date}</span>
              <span className={styles.tags}>
                {tags.map((item, i, arr) => (
                  <Fragment key={i}>
                    <Link to="/tag">{item}</Link>
                    {arr.length !== arr.indexOf(item) + 1 ? `, ` : ` `}
                  </Fragment>
                ))}
              </span>
            </small>
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
