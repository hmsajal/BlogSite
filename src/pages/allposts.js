import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Collection from "../components/collection";

const Posts = ({ data, location }) => {

  const allposts = data.allContentfulBlogPostBangla.edges;
  const siteTitle = data.allContentfulSiteMetaData.nodes[0].siteTitle || `Sajal's Blog`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts"></SEO>
      <Collection posts={allposts} />
    </Layout>
  );
};

export default Posts;

export const mdPageQuery = graphql`
  query {
    allContentfulSiteMetaData {
      nodes {
        siteTitle      
      }
    }      
    allContentfulBlogPostBangla(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          categories
          createdAt
          updatedAt(formatString: "D-M-Y-ddd-hh-mm-a")
          internal {
            description
          }
          mainText {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
