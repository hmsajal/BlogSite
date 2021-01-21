import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PillStack from '../components/pillStack'

import styles from './about.module.scss'


const About = ({ data, location }) => {

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
      <PillStack />
    </Layout>
  )
}

export default About

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

