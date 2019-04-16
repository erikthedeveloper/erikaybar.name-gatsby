import {graphql, useStaticQuery} from 'gatsby'

export function useSiteMetadata() {
  const {
    site: {siteMetadata},
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return siteMetadata
}
