import React from "react"
import { Formik } from "formik"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./contact.module.scss"

const Contact = ({ data, location }) => {
  const title = data.site.siteMetadata?.title
  return (
    <Layout title={title} location={location}>
      <SEO title="contact" />
      <Formik
        initialValues={{ name: "", email: "" }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <span>Name</span>
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </label>
            {errors.name && touched.name && errors.name}
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && errors.email}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Layout>
  )
}

export default Contact

export const contactQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
