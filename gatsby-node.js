const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  const result = await graphql(`
    {
      allContentfulBlogPostBangla {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const edges = result.data.allContentfulBlogPostBangla.edges;

  if (edges.length > 0) {
    edges.forEach(({ node }, index, edges) => {
      const previous = index === 0 ? null : edges[index - 1].node;
      const next = index === edges.length - 1 ? null : edges[index + 1].node;
      const slug = node.slug;

      createPage({
        path: `post/${slug}`,
        component: blogPost,
        context: {
          slug: `${slug}`,
          previous,
          next,
        },
      });
    });
  }
};

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   const value = node.context.slug
//   if (node.internal.type === `ContentfulBlogPostBangla`) {
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//       personalSite: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
