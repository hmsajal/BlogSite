import React from "react";
import { graphql } from "gatsby";
import kwesforms from 'kwesforms'

import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./contact.module.scss";
import Openmail from "../../static/svg-icons/openmail.js";

const Contact = ({ data, location }) => {

  kwesforms.init()
  const siteTitle = data.allContentfulSiteMetaData.nodes[0].siteTitle;

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="contact" />
      <div className={styles.container}>
        <h1>&bull; Say Something &bull;</h1>
        <div className={styles.underline}></div>
        <div className={styles.icon_wrapper}>
          <Openmail />
        </div>
        <form action="https://kwes.io/api/foreign/forms/GjZCFp5CrxmY7C0QliYd" className={styles.contactForm}>
          <div className={styles.name}>
            <label htmlFor="name"></label>
            <input type="text" placeholder="Your Name" name="name" required />
          </div>
          <div className={styles.email}>
            <label htmlFor="email"></label>
            <input type="email" placeholder="Your email" name="email" />
          </div>
          <div className={styles.message}>
            <label htmlFor="message"></label>
            <textarea
              name="message"
              placeholder="Write something interesting..."
              required
            ></textarea>
          </div>
          <div className={styles.submit}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

export const contactQuery = graphql`
  query {
    allContentfulSiteMetaData {
      nodes {
        siteTitle      
      }
    }       
  }
`
