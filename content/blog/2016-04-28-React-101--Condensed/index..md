---
title: 'React 101: Condensed'
description: >-
  I’ve been using and getting to know React pretty heavily for over a year now.
  We have had great success adopting it at work, and I could…
date: '2016-04-28T18:22:19.747Z'
tags: ['React']
slug: condensed-intro-to-react
---

![](https://cdn-images-1.medium.com/max/2560/1*VQBnne3zsIe1RA0lX0A_sA.png)

I’ve been using and getting to know [React](http://facebook.github.io/react) pretty heavily for over a year now. We have had great success adopting it at work, and I could dedicate an entire post to the impact it has had on our [development team](http://careers.practicegenius.com/), and even product. I won’t.

This is an _\*elevator pitch_ aimed to throw just enough information at you to give you a taste of what React is all about. A brief crash course to hopefully spark an interest in, or better understanding of, React and what it might mean for your development team and/or career.

_\*You just got stuck in an elevator with me. I guess we’d better chat about React._

_Update: This post was digested and used throughout my slides from a local JS Meetup presentation I gave,_ [_“React 101: The Condensed Version”_](http://slides.com/erikaybar/react-101)_. You may enjoy that format more :) I’m also working on an_ [_Example React App_](https://github.com/erikthedeveloper/example-react-app-react-mail) _if you feel like poking around some source code :)_

[**React 101 by Erik Aybar**
\_A condensed introduction to the wonderful world of React_slides.com](http://slides.com/erikaybar/react-101 'http://slides.com/erikaybar/react-101')[](http://slides.com/erikaybar/react-101)

<iframe src="//slides.com/erikaybar/react-101/embed?style=light" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

_*I was super impressed with https://slides.com/. This was my first time using it and putting together that presentation was a pleasure!_

Before I get into what React is, how to use it and all of that good stuff, I want to get a few things out of the way. React is not “MVC”. It is not a batteries included framework. It is not ready, out of the box, for you to take a polished web application all the way to the finish line. I see React.js as one critical piece of a larger tech stack that allows you to declaratively define your UI/UX.

> React is a “Javascript Library for Building User Interfaces”

**React™** on the other hand is an entirely different animal. This consists of a myriad of complementary libraries ([Redux](http://redux.js.org/), [Relay](https://facebook.github.io/relay/), [GraphQL](http://graphql.org/), etc…), concepts/paradigms, and a flourishing ecosystem which at first can feel both foreign and overwhelming.

You are going to end up stumbling into learning ES6+, Webpack, Babel, Flux/Redux/\[INSERT PREFERRED STATE MANAGEMENT FLAVOR HERE\] (hint: just use Redux), Hot Reloading, CSS IN JAVASCRIPT?! and the list goes on. You will quickly be introduced to [Javascript Fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.ej8a9kgun) and shortly thereafter [Javascript Fatigue Fatigue](http://www.2ality.com/2016/02/js-fatigue-fatigue.html). To be clear, these are by no means exclusive to React.

I’m going to ignore **React™** for a moment and focus on just [React](http://facebook.github.io/react/). Let’s dive in!

#### Hello World

First, let’s get [“Hello World with React”](http://codepen.io/erikthedeveloper/pen/BKqdYy?editors=1010) out of the way. Let’s dispel any myths about all of the complexities of setup, related libraries, etc… that you _have to_ learn in order to get up and running with React.

![Play with the [React Hello World Codepen](http://codepen.io/erikthedeveloper/pen/BKqdYy?editors=1010) yourself :)](https://cdn-images-1.medium.com/max/800/1*bBDhLT9taUzi4v0e0C20DA.png)
Play with the [React Hello World Codepen](http://codepen.io/erikthedeveloper/pen/BKqdYy?editors=1010) yourself :)

- No build step
- No JSX
- No 3rd party libraries
- No fuss no muss

Granted, you will want to journey down those paths. But don’t confuse the complexities/traps of those libraries with the comparatively tiny API of React itself.

### Components

> A component is essentially a description of a piece of user interface.

React is all about components. Building an application with React is a matter of composing many of these components together to bring the application to life. Think… Legos :)

![Components are to a web application as Lego blocks are to a Lego castle.](https://cdn-images-1.medium.com/max/800/1*vSu9VAcm9P0-W-CF_5Oh8Q.png)
Components are to a web application as Lego blocks are to a Lego castle.

Components are made up of 2 primary concepts.

1.  State: A component is a pure function of _\*state. State in, UI out._
2.  Lifecycle: A component’s behavior is defined by its lifecycle methods.

Given the same input (\*_state_), a component will always return the same UI (render) the same.

_\*state being the combination of both this.state and this.props._

Behavior, such as reacting to state changes, performing actions when mounting/un-mounting to the DOM, initiating an HTTP request, redirecting/prompting the user, etc… is declared throughout the component’s lifecycle methods.

Be sure to read about the relationship and difference between [Components, Elements, and Instances](http://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html).

#### Stateless Function Components

So far we know that React components are composed of state, props, and component lifecycle. It turns out that the majority of your components can get by without either state or component lifecycle, leaving you with only props.

This allows \[guides\] you to define small, simple components as [pure functions of props](http://facebook.github.io/react/docs/reusable-components.html#stateless-functions) to describe your user interfaces. No lifecycle hooks. No state. Just a single input props.

> This simplified component API is intended for components that are pure functions of their props. These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods.

> They are pure functional transforms of their input, with zero boilerplate. In an ideal world, most of your components would be stateless functions \[…\] This is the recommended pattern, when possible.

These are the preferred method of defining components and doing so will generally lead to more appropriate usage of state, less imperative APIs, and a generally a happier life :) See the docs on [Stateless Function Components](http://facebook.github.io/react/docs/reusable-components.html#stateless-functions) for more info.

Contrast this with the similar stateful/class component example below.

#### Class Components: The Smart Ones!

There are many cases when a Stateless Function Component just wont cut it. You will need to persist some type of application state,make use of the [component lifecycle API](http://facebook.github.io/react/docs/component-specs.html), or any number of things that the “simplified” Stateless Function Components just don’t support.

Here is another example, showing an equivalent component that is managing its own loading state.

The most powerful benefit to class components is that you have access to the [component lifecycle methods](http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods). These provide a very simple, yet powerful API that allows you to hook into various points in a component’s lifecycle to do things such as:

- Initiate an Ajax call on componentDidMount
- Add and remove event listeners in componentDidMount and componentWillUnmount
- React to state change in componentWillReceiveProps or componentDidUpdate
- Optimize for performance within [shouldComponentUpdate](http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate) (Here is a great [React Performance Optimization summary/explanation](https://medium.com/@alexandereardon/performance-optimisations-for-react-applications-b453c597b191#.tiby1tlv6) behind some of the why, when, and how)
- Much more…

Class components can also expose public methods to be invoked from above, making use of [component refs](http://facebook.github.io/react/docs/more-about-refs.html).

\*_Disclaimer: You will likely have have read, or will read, that component state is evil and you should strive for 100% stateless components. Don’t read too much into this. Embrace the state!_

#### PropTypes

React components have a, development only, API built in to declare and validate props. This is stripped, and checks no longer performed, when you build your app for production.

This is great during the development process as React evaluates the props being passed to components during runtime and provides helpful warnings in the console. Also, being able to revisit a component after 6 months, or that you did not author yourself, and have a description of its props is invaluable. A component’s propTypes are essentially its description of “if you are going to use me, this is what I need”.

I highly recommend [adding this to your ESLint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) rules to encourage throughout your team across all components.

Read the [docs on PropTypes](http://facebook.github.io/react/docs/reusable-components.html#prop-validation) for more information and examples.

#### JSX: It’s Just a Little Sugar

![](https://cdn-images-1.medium.com/max/800/1*2hE71-dXcvdgIe0zuvy62w.gif)

Don’t get too hung up on this new syntax, JSX. It may look like you are writing HTML inside of your component files (you are not) or that it is some new templating language (it is not).

> Fear not! It is nothing more than syntactical sugar on top of the Javascript function calls you already know and love.

See the example below where I compare 3 examples: With JSX compared to without JSX compared to without JSX (Using React.DOM helpers).

React’s docs also have a great [JSX in Depth](http://facebook.github.io/react/docs/jsx-in-depth.html#why-jsx) section where they explain some of the how, what, and why behind JSX. Also, be sure to read up on [how to handle conditional logic in JSX](http://facebook.github.io/react/tips/if-else-in-JSX.html) as it, let me emphasis again, **is not a templating language**.

#### One Way Data Flow

Many of us remember the thrill of hooking up our [Backbone views](http://backbonejs.org/#Model-View-separation) to “listen” for our model change events, no matter where they happened! Or the light in our eyes as we dove into Angular and witnessed the elegance of [two way data binding](https://docs.angularjs.org/api/ng/directive/ngBind), with virtually zero typing.

<input type="text" ng-model="name">

Equally important to contrast is imperative DOM querying where the DOM is allowed to handle its own state and when you are ready to care about it (example: submitting a form), you would query the DOM for the value, such as with [\*_vanilla_ Javascript](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) or j[Query](http://api.jquery.com/val/).

$(‘#my_input’).val()

![](https://cdn-images-1.medium.com/max/800/1*hm4MH1e8v1H9w8adn16W4g.png)

> Say goodbye to two way data binding and DOM querying.

When developing with React, force two way data binding and DOM querying out of your brain. In React, data flows one way: from the top to the bottom. Parents (components higher up in the hierarchy) pass down props to their children. Some props can represent “a piece of state” (read) such as a quantity in a shopping cart. Other props can be “functions to update/affect state” (write) such as increment quantity.

See the example below where **ShoppingCart** is the parent that owns the **cartQuantity** state and is composed of several children. **QuantityDisplayer** simply receives and displays a quantity. **MoarButton**, **QuantityDisplayer**’s sibling**,** is not aware of the current cartQuantity, but is empowered to increment it via its **increment** prop.

I like to think of “data binding” in a React application as being purely coincidental. In the case when a single component both displays and affects a piece of state the is managed higher up in the hierarchy, it gives the illusion of “data binding”. I feel like [Controlled Components](http://facebook.github.io/react/docs/forms.html#controlled-components) are a fundamental concept of React and I know I had trouble wrapping my head around them at first (and forgetting two way data binding).

Here is an example showing this great form making use of a controlled component (input) .

![Go Play with [the Codepen](http://codepen.io/erikthedeveloper/pen/PNyprZ?editors=1010)!](https://cdn-images-1.medium.com/max/800/1*v0h1IYFfOz3_eY2s79vRZQ.png)
Go Play with [the Codepen](http://codepen.io/erikthedeveloper/pen/PNyprZ?editors=1010)!

> Ok… I think that might be a good stopping point for now :)

![Actual Footage of Spontaneous Javascript Overload Syndrome](https://cdn-images-1.medium.com/max/800/1*-Eu2O9r2zX8k5DzGKcbi1g.gif)
Actual Footage of Spontaneous Javascript Overload Syndrome

### MOAR REACT PLZ

There is much that I didn’t cover here either because I feel it is way out of the scope of a 101-ish article or \[more likely\] I ran out of time and steam :)

Here are some great places to begin/continue your journey along the path to learning React:

- The Official [React Docs/Guide](https://facebook.github.io/react/docs/thinking-in-react.html)
- Pete Hunt’s [react-howto](https://github.com/petehunt/react-howto)
- Tyler McGinnis’ [React.js Program](http://www.reactjsprogram.com/)
- Egghead [React Videos](https://egghead.io/technologies/react)
- Just. Start. Building!
- Reach out! Twitter: [@erikthedev\_](https://twitter.com/erikthedev_)

_As an aside: I have this example app I’ve been working on that is still in fairly early/rough stages, but you may find useful/interesting:_ [https://github.com/erikthedeveloper/example-react-app-react-mail](https://github.com/erikthedeveloper/example-react-app-react-mail)

Also: Be sure to check out the slides from my related presentation here [http://slides.com/erikaybar/react-101](http://slides.com/erikaybar/react-101)

Did you found this helpful? Did it hurt to read? Any burning questions? Let me know!
