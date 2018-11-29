module.exports = {
  siteMetadata: {
    title: 'Woodward Bicycle Co.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Woodward Bicycle Co.',
    //     short_name: 'WBCo',
    //     start_url: '/',
    //     background_color: '#FFFFFF',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/WBco-logo.jpg', // This path is relative to the root of the site.
    //   },
    // },
  ],
}
