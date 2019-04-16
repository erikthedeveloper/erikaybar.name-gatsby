import React from 'react'
import Page from '../components/Page'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Page location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    )
  }
}

export default NotFoundPage
