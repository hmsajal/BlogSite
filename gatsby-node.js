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
            updatedAt(formatString: "D-M-Y-ddd-HH-MM")
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
      const slug = node.updatedAt;
      const title = node.title

      createPage({
        path: `post/${slug}`,
        component: blogPost,
        context: {
          slug: `${slug}`,
          previous,
          next,
          title
        },
      });
    });
  }
};
