import React from 'react'
import {rhythm} from '../utils/typography'

export function Footer() {
  return (
    <footer style={{marginTop: rhythm(1)}}>
      <small>
        © {new Date().getFullYear()} Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted on{' '}
        <a href="https://www.netlify.com/">Netlify</a>, source on{' '}
        <a href="https://github.com/erikthedeveloper/erikaybar.name-gatsby">
          GitHub
        </a>
      </small>
    </footer>
  )
}
