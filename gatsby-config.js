module.exports = {
  siteMetadata: {
    title: "My Family",
    description: "Know details of your family & family members.",
    keywords:
      "Karan, Popat, Karan Popat, greenbird, greenbird digital, family tree, my family, family members",
    author: "Greenbird Digital",
    url: "https://www.greenbirddigital.com/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "members",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
              {
                allMembersYaml {
                  nodes {
                    id
                    identifier
                    name
                    fname
                    lname
                    profilePicture {
                      publicURL
                    }
                  }
                }
              }
              `,
        ref: "id",
        index: ['identifier', 'name','fname','lname'],
        store: ['identifier', 'name','fname','lname'],
        normalizer: ({ data }) =>
          data.allMembersYaml.nodes.map((node) => ({
            id: node.id,
            identifier: node.identifier,
            name: node.name,
            fname: node.fname,
            lname: node.lname
          })),
      },
    },
  ],
};
