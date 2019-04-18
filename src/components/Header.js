import React from 'react'
import {Link} from 'gatsby'
import {useSiteMetadata} from '../graphql/component-queries'

export function Header() {
  const {title} = useSiteMetadata()

  return (
    <header>
      <h3 style={{marginTop: 0}}>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    </header>
  )
}
