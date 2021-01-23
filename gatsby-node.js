const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve('src/templates/article.jsx')

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                templateKey
                slug
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const all = result.data.allMarkdownRemark.edges
  const articles = all.filter(article => article.node.frontmatter.templateKey === "article")

  articles.forEach(({ node }) => {
    createPage({
      path: `article/${node.frontmatter.slug}/`,
      component: articleTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}