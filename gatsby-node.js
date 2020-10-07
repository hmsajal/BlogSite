const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          date(formatString: "DD-MM-YY-T-hh:mm:ssa")
        }
      }
    }
  `)
  // `
  //   {
  //     allMarkdownRemark(
  //       sort: { fields: [frontmatter___date], order: DESC }
  //       limit: 1000
  //     ) {
  //       nodes {
  //         fields {
  //           slug
  //         }
  //         frontmatter {
  //           title
  //         }
  //       }
  //     }
  //   }
  // `

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: `/posts/${post.date}`,
        component: blogPost,
        context: {
          slug: post.date,
          previous,
          next,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ContentfulBlogPost`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })

  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  // }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social      
    }

    type Author {
      name: String
      summary: String
      personalSite: String
    }

    type Social {
      twitter: String
    }    

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
