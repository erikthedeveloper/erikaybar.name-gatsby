import React from 'react'
import {graphql} from 'gatsby'
import Bio from '../components/Bio'
import Page from '../components/Page'
import SEO from '../components/seo'
import {PostsList} from '../components/PostsList'

export default function BlogPage(props) {
  const {data} = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Page location={props.location} title={siteTitle}>
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>All The Thoughts...</h1>
      <PostsList posts={posts} />
      <Bio />
    </Page>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {ne: false}}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
