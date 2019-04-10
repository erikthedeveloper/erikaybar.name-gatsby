const fs = require('fs')
const path = require('path')
const {format} = require('date-fns')

migrateGhostToGatsby({
  json: require('./erik-aybar.ghost.2019-04-08'),
  blogDir: path.join(__dirname, '../content/blog'),
})

/**
 * Migrate Ghost 0.x posts to Gatsby posts!
 * @param json The JSON export from Ghost admin panel
 * @param blogDir The directory where Gatsby posts live
 */
function migrateGhostToGatsby({json, blogDir}) {
  const {data} = json.db[0]
  const {posts, tags, posts_tags} = data

  function postToDate(post) {
    return format(post.published_at, 'YYYY-MM-DD')
  }

  function postToFMTags(post) {
    const tagsInner = posts_tags
      .filter(postTag => postTag.post_id === post.id)
      .map(postTag => tags.find(tag => tag.id === postTag.tag_id))
      .map(tag => `"${tag.name}"`)
      .join(', ')

    return `[${tagsInner}]`
  }

  function postToIndexMD(post) {
    return `---
title: "${post.title}"
slug: ${post.slug}
date: "${postToDate(post)}"
tags: ${postToFMTags(post)}
---

${post.markdown}
`
  }

  // Migrate all posts
  posts
    .filter(post => post.status === 'published')
    .forEach(post => {
      const postDir = path.join(blogDir, `${postToDate(post)}-${post.slug}`)

      if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir)
      }

      console.log(`Writing: ${post.slug}`)
      fs.writeFileSync(path.join(postDir, 'index.md'), postToIndexMD(post))
    })
}
