require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const contentfulConfig = {
  spaceId: process.env.contentful_SPACE_ID,
  accessToken: process.env.contentful_ACCESS_TOKEN,
}
const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `Personal Blog of Sajal`,
    author: {
      name: `Hasan Mahmud Sajal`,
      summary: `I am a JavaScript developer and a casual blogger.`,
      personalSite: `https://hmsajal.netlify.app`,
    },
    description: `A starter blog based on Kyle Mathews's starter blog.`,
    siteUrl: `https://hmsblog.netlify.app/`,
    social: {
      twitter: `sajal_here`,
    },
    menuItems: [
      { name: `Posts`, path: `/posts` },
      { name: `Categories`, path: `/categories` },
      { name: `Contact`, path: `/contact` },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/black-pen.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-contentful`,
      options: `contentfulConfig`,
    },
  ],
}
