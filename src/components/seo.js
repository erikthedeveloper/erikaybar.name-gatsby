import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {useSiteMetadata} from '../graphql/component-queries'

export default function SEO({description, lang, meta, keywords, title}) {
  const siteMetadata = useSiteMetadata()
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        ...defaultMeta({
          ...siteMetadata,
          description: description || siteMetadata.description,
          title,
          keywords,
        }),
        ...meta,
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

function defaultMeta({description, title, keywords, author}) {
  return [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `keywords`,
      content: keywords.join(`, `),
    },
  ].filter(meta => Boolean(meta.content))
}
