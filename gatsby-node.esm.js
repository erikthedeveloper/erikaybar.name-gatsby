const path = require(`path`)
const {tagToPath} = require('./src/utils/paths')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          filter: {frontmatter: {published: {ne: false}}}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    createTagsPages({posts, createPage})
  })
}

function createTagsPages({posts, createPage}) {
  const tagPage = path.resolve(`./src/templates/TagPage.js`)

  // Build up list of unique tags
  const allTags = new Set()
  posts.forEach(({node: {frontmatter: {tags}}}) => {
    if (!Array.isArray(tags)) return
    tags.forEach(tag => allTags.add(tag))
  })

  allTags.forEach(tag => {
    createPage({
      path: tagToPath(tag),
      component: tagPage,
      context: {
        tag,
      },
    })
  })
}
