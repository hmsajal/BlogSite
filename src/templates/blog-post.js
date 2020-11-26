import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./blog-post.module.scss";
import PostComment from '../components/postComment'

const BlogPostTemplate = ({ data, pageContext, location }) => {

  const post = data.contentfulBlogPostBangla;
  const siteUrl = data.allContentfulSiteMetaData.nodes[0].siteUrl
  const siteTitle = data.allContentfulSiteMetaData.nodes[0].siteTitle || `Site Title`;
  const { previous, next, title } = pageContext;

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
        title={title}
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
          <h1 itemProp="headline">{title}</h1>
          <p>- {date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.mainText.childMarkdownRemark.html,
          }}
          itemProp="articleBody"
        />
        <hr />
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
      <PostComment location={location} url={siteUrl} title={title} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query singlePostQuery($title: String!) {
    allContentfulSiteMetaData {
      nodes {
        siteTitle  
        siteUrl    
      }
    }
    contentfulBlogPostBangla(title: {eq: $title}) {      
      createdAt        
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
