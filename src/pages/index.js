import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";


const BlogIndex = ({ data, location }) => {

  const siteData = data.allContentfulSiteMetaData.nodes[0];

  const footerStyle = {
    position: 'absolute',
    bottom: '10px'
  }

  return (
    <Layout location={location} title={siteData.siteTitle} footerStyle={footerStyle} >
      <SEO title="Home" />
      <article dangerouslySetInnerHTML={{
        __html: siteData.siteDesc.childMarkdownRemark.html
      }}
        itemProp="articleBody"
      />
    </Layout>
  );
};

export default BlogIndex;

export const indexQuery = graphql`
  query {
    allContentfulSiteMetaData {
      nodes {
        siteTitle
        siteUrl
        siteDesc{
          childMarkdownRemark {            
            html
          }
        }       
      }
    }
  }
`
