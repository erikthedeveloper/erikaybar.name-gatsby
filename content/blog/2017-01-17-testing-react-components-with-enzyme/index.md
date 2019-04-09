---
title: "Testing React Components with AirBnb's Enzyme"
slug: testing-react-components-with-enzyme
date: "2017-01-17"
tags: ["Testing", "javascript", "React"]
---

It can be hard enough breaking into testing in general. Getting started with testing React components can be extra tricky if you get off on the wrong foot. The [testing utilities provided by React](https://facebook.github.io/react/docs/test-utils.html) have some gnarly API methods such as [scryRenderedComponentsWithType()](https://facebook.github.io/react/docs/test-utils.html#scryrenderedcomponentswithtype) and leave you wrestling with fairly low level API.

> Aside: WTF is `scry*`?! I can only imagine that it is a shortened version of "sorcery". I read the method `scryRenderedComponentsWithType` as _"using great sourcery find the components which have been rendered of the given type"_

**There is a better way!!**

...and it is [Enzyme](http://airbnb.io/enzyme/).

> Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

> Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

> Enzyme is unopinionated regarding which test runner or assertion library you use [...]

With Enzyme you can write tests that look like

```language-javascript
import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'

describe('Component: MyComponent', () => {
  // This type of test is more useful/valuable than you might imagine :)...
  it('renders without exploding', () => {
    shallow(<MyComponent />)
  })
  
  it('displays the things in a list of Thing components', () => {
    const wrapper = shallow(
      <MyComponent things={['1', '2', '3']} />
    )
    // Assert that there are 3 <Thing />'s within an <ul>
    expect(
      wrapper.find('ul').find('Thing').length
    ).toEqual(3)
  })

  it('does "that thing" when you click its button', () => {
    const thatThing = expect.createSpy()
    const wrapper = shallow(
      <MyComponent thatThing={thatThing} />
    )
    wrapper
      .find('SomeButtonComponent')
      .simulate('click')

    expect(thatThing).toHaveBeenCalled()
  })
})
```

Notice that I'm using Enzyme's `shallow` here to achieve [shallow rendering in tests](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering). 

> Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

This same test could use Enzyme's `mount` and would look the same, expect for it would fully mount, render/evaluate all children down the tree, and run through the [React Component lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html).

> Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs, or may require the full lifecycle in order to fully test the component (i.e., `componentDidMount` etc.)

---

### [Testing React Components with Enzyme [Playlist]](https://www.youtube.com/playlist?list=PLikcwtJj8_mDxWUJhYChFarCPnAwio24e)

I put up a short video series on YouTube a little while back that walks through some basic setup and usage of Enzyme with React.

<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PLikcwtJj8_mDxWUJhYChFarCPnAwio24e" frameborder="0" allowfullscreen></iframe>

There is an accompanying GitHub repo https://github.com/erikthedeveloper/example-react-app-react-mail that walks through building a React app, illustrates interacting with a JSON API, and uses some testing via Enyzme.

![](/content/images/2017/01/ReactMail-demo-gif-small.gif)

___

If you're interested to poke around a more recent React project, I've been working on https://github.com/erikthedeveloper/react-calendar-components which is

> An example React project that explores composing UI and behavior from multiple higher order components

If that excites you, head on over and check it out. I'm always open for feedback/suggestions. Ping me on Twitter [@erikthedev_](https://twitter.com/erikthedev_)!
