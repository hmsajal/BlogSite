import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './aboutMe.module.scss'

const AboutMe = ({ data, location }) => {

  const siteTitle = data.allContentfulSiteMetaData.nodes[0].siteTitle
  const authorInfo = data.allContentfulSiteAuthor.nodes[0].about.childMarkdownRemark.html

  return (
    <Layout title={siteTitle} location={location}>
      <SEO />
      <article dangerouslySetInnerHTML={{
        __html: authorInfo
      }}
        itemProp="articleBody"
        className={styles.article}
      />
    </Layout>
  )
}

export const mdPageQuery = graphql`
  query {
    allContentfulSiteMetaData {
      nodes {
        siteTitle      
      }
    }   
    allContentfulSiteAuthor {
      nodes {
        name
        personalSite
        socialProfiles
        about{
          childMarkdownRemark {            
            html
          }
        }
      }
    }
  }`


export default AboutMe
