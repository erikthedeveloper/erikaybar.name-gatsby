const fs = require('fs')
const slugify = require('slug')
const dateFns = require('date-fns')
const {exec} = require('child_process')

const title = process.argv[2]
if (!title) {
  throw 'a title is required!'
}

const slug = slugify(title.toLowerCase())
const date = dateFns.format(new Date(), 'YYYY-MM-DD')
const blogDir = `./content/blog`
const postDir = `${blogDir}/${date}-${slug}`

if (!fs.existsSync(postDir)) {
  fs.mkdirSync(postDir)
} else {
  throw 'That post already exists!'
}

fs.writeFileSync(
  `${postDir}/index.md`,
  `---
slug: ${slug}
date: ${date}
title: "${title}"
published: false
---

TODO: Write about ${title}
`,
  function(err) {
    if (err) {
      return console.log(err)
    }
    console.log(`${title} was created!`)
  }
)

exec(`code ${blogDir} ${postDir} ${postDir}/index.md`)
