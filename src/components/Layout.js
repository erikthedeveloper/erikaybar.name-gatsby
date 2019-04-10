import React from 'react'
import {Link} from 'gatsby'
import {rhythm} from '../utils/typography'

class Layout extends React.Component {
  render() {
    const {location, title, children} = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname !== rootPath) {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          <small>
            © {new Date().getFullYear()} Built with{' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted on{' '}
            <a href="https://www.netlify.com/">Netlify</a>, source on{' '}
            <a href="https://github.com/erikthedeveloper/erikaybar.name-gatsby">
              GitHub
            </a>
          </small>
        </footer>
      </div>
    )
  }
}

export default Layout
