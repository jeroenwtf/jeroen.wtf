/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:300,400,500,700`,
          `Fira+Mono\:400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    }
  ],
}
