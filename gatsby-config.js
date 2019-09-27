module.exports = ({ contentPath = "content" }) => ({
    siteMetadata: {
        title: `IT works!`,
        author: `owlfox`,
        description: `A map for an early age dementia developer to find his way back home.`,
        siteUrl: `https://www.owlfox.org`,
        social: {
            twitter: ``,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `posts`,
              path: `${__dirname}/${contentPath}/posts/`,
            },
          },
        `gatsby-transformer-remark`,
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                typeName: "Event",
            },
        },
    ],
})