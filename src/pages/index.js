import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Collection from "../components/collection";


export default ({ data, location }) => {

  const metaData = data.allContentfulSiteMetaData.nodes[0]
  const allposts = data.allContentfulBlogPostBangla.edges;

  return (
    <Layout location={location} title={metaData.siteTitle || `Sajal's Blog`}>
      <SEO title="All posts"></SEO>      
      <Collection posts={allposts} />
    </Layout>
  );
};

export const allPostsQuery = graphql`
  query {
    allContentfulSiteMetaData {
      nodes {
        siteTitle   
        siteDesc{
          childMarkdownRemark {            
            html
          }
        }    
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
              excerpt(truncate:true)
            }
          }
        }
      }
    }
  }
`;
