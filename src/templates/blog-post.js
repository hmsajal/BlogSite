import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./blog-post.module.scss";

const BlogPostTemplate = ({ data, pageContext, location }) => {

  const post = data.contentfulBlogPostBangla;
  const siteTitle = data.allContentfulSiteMetaData.nodes[0].siteTitle || `Title`;
  const { previous, next } = pageContext;

  let options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  };

  const date = new Date(post.createdAt).toLocaleDateString("bn-GB", options);

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
              <Link to={`/post/${previous.updatedAt}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/post/${next.updatedAt}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const pageQuery = graphql`
  query singlePostQuery($title: String!) {
    allContentfulSiteMetaData {
      nodes {
        siteTitle      
      }
    }
    contentfulBlogPostBangla(title: {eq: $title}) {
      title
      createdAt
      updatedAt(formatString: "D-M-Y-ddd-HH-MM")          
      internal {
        description
      }
      mainText {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 180)          
        }
      }
    }
  }
`;

export default BlogPostTemplate;
