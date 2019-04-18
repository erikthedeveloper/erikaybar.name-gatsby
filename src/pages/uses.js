import React from 'react'
import Page from '../components/Page'
import SEO from '../components/seo'

export default function UsesPage(props) {
  return (
    <Page location={props.location}>
      <SEO title="Uses" />
      <h1>Uses</h1>
      <p>These are some of the things I use!</p>

      <h3>Editor / IDE</h3>
      <p>
        My primary editor is{' '}
        <a href="https://www.jetbrains.com/webstorm/">WebStorm</a>, but I also
        spend a decent amount of time in{' '}
        <a href="https://code.visualstudio.com/">VS Code</a>. *WebStorm gives me
        super powers that I am just not willing to give up.
      </p>

      <h3>Terminal</h3>
      <p>
        <a href="https://www.iterm2.com/">iTerm2</a> with{' '}
        <a href="https://ohmyz.sh/">oh my zsh</a>.
      </p>

      <h3>Screen Capture</h3>
      <p>
        <a href="https://evernote.com/products/skitch">Skitch</a> for quickly
        grabbing and annotating screenshots.{' '}
        <a href="https://giphy.com/apps/giphycapture">GIPHY Capture</a> for
        creating GIF screen captures.{' '}
        <a href="http://www.telestream.net/screenflow/overview.htm">
          ScreenFlow
        </a>{' '}
        for screen casting.
      </p>

      <h3>Computer</h3>
      <p>
        2017 15" MacBook Pro. Yes I've had to send it in for keyboard repairs...
      </p>

      <h3>Headphones</h3>
      <p>
        I've been quite happy with my{' '}
        <a href="https://www.amazon.com/Sony-WH-CH700N-Canceling-Headphones-WHCH700N/dp/B079GPFLT1">
          Sony WH-CD700N
        </a>{' '}
        Bluetooth noise cancelling headphones.
      </p>

      <h3>Monitor(s)</h3>
      <p>
        I've got two Dell 24" monitors, but prefer to use only one 90% of the
        time. I find single monitor gives me the best focus.
      </p>

      <h3>Standing Desk</h3>
      <p>
        I've got a <a href="https://www.varidesk.com">VARIDESK</a>. I highly
        recommend you get a standing desk, whatever works for you and your price
        range just get one and use it.
      </p>
    </Page>
  )
}
