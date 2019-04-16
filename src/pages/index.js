import React from 'react'
import {graphql, Link} from 'gatsby'
import Bio from '../components/Bio'
import Page from '../components/Page'
import SEO from '../components/seo'
import {PostsList} from '../components/PostsList'

export default function HomePage(props) {
  const {data} = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Page location={props.location} title={siteTitle}>
      <SEO
        title="Welcome"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio isHero />
      <h2>Some Recent Thoughts...</h2>
      <PostsList posts={posts} />
      <Link to="/blog">View all...</Link>
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
      limit: 5
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
