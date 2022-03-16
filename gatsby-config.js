module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: '975bf280-fd91-488c-994c-2f04416e5ee3', // Fill in your Project ID
        languageCodenames: [
          'en-US', // Languages in your project (Project settings -> Localization),
          'es-ES', // Languages in your project (Project settings -> Localization),
        ],
      },
    },
  ],
}
