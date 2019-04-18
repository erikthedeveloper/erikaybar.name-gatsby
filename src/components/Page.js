import React from 'react'
import {rhythm} from '../utils/typography'
import {Header} from './Header'
import {Footer} from './Footer'

const isHome = location => location.pathname === `${__PATH_PREFIX__}/`

export default function Page({location, children}) {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {!isHome(location) && <Header location={location} />}
      {children}
      <Footer />
    </div>
  )
}
