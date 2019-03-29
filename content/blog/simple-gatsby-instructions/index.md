---
title: 'Simple Instructions to Try Gastby, Fast'
date: '2018-02-01T12:00:00'
tags: ['gatsby', 'quick-tips']
---

If you want to give Gatsby a quick test run, I promise you can have a site just like this up and running in seconds.

## Full Script

```bash
yarn global add gatsby-cli
gatsby new your-blog-name https://github.com/gatsbyjs/gatsby-starter-blog
cd your-blog-name
code . # Open in your editor of choice
gatsby develop
open http://localhost:8000
# Start editing!
```

## Step-by-step

1. Install `gatsby-cli`

```bash
yarn global add gatsby-cli
# or
npm install --global gatsby-cli
```

2. Fire up a fresh project from the [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) template

```bash
gatsby new your-blog-name https://github.com/gatsbyjs/gatsby-starter-blog
```

3. Open the project for editing

```bash
cd your-blog-name
code . # Open in your editor of choice
```

Edit `content/blog/` to add/edit blog posts.

Add `content/blog/{post-slug}/index.md` to add new posts. Dont forget to add the Frontmatter to the top of each `index.md` such as

```md
---
title: 'Your Post Title'
date: '2018-02-01'
---

Start writing here!
```

4. Start the development server

```bash
gatsby develop
open http://localhost:8000
```
