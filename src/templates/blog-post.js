import React from 'react'
import {Link, graphql} from 'gatsby'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const {previous, next} = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 style={{marginBottom: rhythm(0.25)}}>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
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
      </Layout>
    )
  }
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
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
