import * as React from 'react'
import {graphql} from 'gatsby'
import Page from '../components/Page'
import {PostsList} from '../components/PostsList'
import SEO from '../components/seo'

export default function TagPage({
  location,
  pageContext: {tag},
  data: {
    allMarkdownRemark,
    site: {siteMetadata},
  },
}) {
  return (
    <Page location={location} title={siteMetadata.title}>
      <div>
        <SEO title={`Posts tagged "${tag}"`} keywords={[tag]} />
        <h1>Posts Tagged "{tag}"</h1>
        <PostsList posts={allMarkdownRemark.edges} />
      </div>
    </Page>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}, published: {ne: false}}}
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
