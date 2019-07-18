module.exports = {
  siteMetadata: {
    title: `Source`,
    description: `The Guardian's Design System`,
    author: `@siadcock`,
  },
  pathPrefix: "/source-website",
  plugins: [
    `gatsby-plugin-emotion`,
    // Document <head> management
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Image processing and compression
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PWA options
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
