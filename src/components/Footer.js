import React from 'react'
import {Link} from 'gatsby'
import {rhythm} from '../utils/typography'

export function Footer() {
  return (
    <footer style={{marginTop: rhythm(1)}}>
      <small>
        © {new Date().getFullYear()} <Link to="/">Erik Aybar</Link>, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted on{' '}
        <a href="https://www.netlify.com/">Netlify</a>, source on{' '}
        <a href="https://github.com/erikthedeveloper/erikaybar.name-gatsby">
          GitHub
        </a>
      </small>
    </footer>
  )
}
