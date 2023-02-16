const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query {
      allMembersYaml {
        nodes {
          identifier
        }
      }
    }
  `);

  queryResults.data.allMembersYaml.nodes.forEach((node) => {
    createPage({
      path: `/member/${node.identifier}`,
      component: path.resolve("./src/templates/member.js"),
      context: {
        identifier: node.identifier,
      },
    });
  });
};
