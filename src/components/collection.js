import React, { Fragment } from "react";
import { Link } from "gatsby";

import styles from "./collection.module.scss";

const Collection = ({ posts }) => {
  return posts.length === 0 ? (
    <p>
      No blog posts found. Add markdown posts to "content/blog" (or the
      directory you specified for the "gatsby-source-filesystem" plugin in
      gatsby-config.js).
    </p>
  ) : (
      posts.map(({ node }) => {
        const options = {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        };
        const title = node.title || node.slug;
        const date = new Date(node.createdAt)
        // .toLocaleString("en-GB", options);

        const tags = node.categories;

        return (
          <article
            key={node.slug}
            className={styles.postListItem}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link to={`/post/${node.slug}`} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <small>
                <span className={styles.smallDate}>{date.toLocaleDateString('bn-GB')}  </span>
                <span className={styles.tags}>
                  {tags.map((item, i, arr) => (
                    <Fragment key={i}>
                      <Link to="/categories">{item}</Link>
                      {arr.indexOf(item) + 1 !== arr.length ? `, ` : ` `}
                    </Fragment>
                  ))}
                </span>
              </small>
            </header>
            <section className="description">
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    node.internal.description ||
                    node.mainText.childMarkdownRemark.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        );
      })
    );
};

export default Collection;
