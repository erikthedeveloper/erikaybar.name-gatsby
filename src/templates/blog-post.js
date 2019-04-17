import React from 'react'
import {graphql, Link} from 'gatsby'
import Bio from '../components/Bio'
import Page from '../components/Page'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'
import {TagsList} from '../components/TagsList'

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const {previous, next} = props.pageContext

  return (
    <Page location={props.location}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1 style={{marginBottom: rhythm(0.25)}}>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <TagsList tags={post.frontmatter.tags} />
      <div
        style={{
          marginTop: rhythm(1),
        }}
        dangerouslySetInnerHTML={{__html: post.html}}
      />
      <AdjacentPosts previous={previous} next={next} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Page>
  )
}

export default BlogPostTemplate

function AdjacentPosts({previous, next}) {
  if (!previous && !next) {
    return null
  }
  return (
    <>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              {' '}
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →{' '}
            </Link>
          )}
        </li>
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
