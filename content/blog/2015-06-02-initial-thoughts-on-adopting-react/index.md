---
title: "Some Initial Thoughts on Adopting React"
slug: initial-thoughts-on-adopting-react
date: "2015-06-02"
tags: ["javascript", "React"]
---

I've spent roughly the last 6 months investing a lot of time and energy into getting up to speed with Facebook's React. It has been an overwhelmingly positive experience and I've learned a lot throughout the process. I wanted to share some thoughts I've formed along the way.

> I've experienced mild success with both Ember and Angular, but for some reason, neither framework has really compelled me (or employer(s) at the time) to commit and adopt. [...] Then came React.

A little backstory about how I ended up with React. Over the last 2 years, I have progressively been spending more and more time with Javascript both in my experimental pet-project time and at my day job(s). During this time, I've invested weeks on end into investigating and picking up [Ember](http://emberjs.com/), [Angular](angularjs.org), and other [Javascript libraries and frameworks](http://todomvc.com/). I've experienced mild success with both Ember and Angular, but for some reason, neither framework has really compelled me (or employer(s) at the time) to commit and adopt. I know many will disagree with me, but my experience has been that they have a relatively high entry level and commitment required to successfully adopt and bring into an existing project/team.

Then came React. I remember the initial buzz on Twitter. Everybody seemed to be talking about this new "UI Library" from Facebook. I was particularly burnt out at the time from spending countless hours and days experimenting with Angular and Ember and never really gaining much traction with either of them. Now that I had transitioned to spending 90% of my programming-time with Javascript, it seemed that I was learning a new framework, library, or technique every day. It was becoming exhausting. I ignored that intitial buzz around React and kept my head down, continuing with the status quo.

I finally decided to dedicate some time and give React some attention to see what all the fuss was about. Within 30 minutes or so, I had glazed over the docs, worked my way through the tutorial, and React had my attention. Something just felt right.

The more I played with React, and the more I got a better feel of what was happening throughout the larger Javascript community, the more I knew that I really could buckle down and invest some time into this.

> Fast forward 6 months, and I'm leading a project developing a large new feature [...] in React

Fast forward 6 months, and I'm leading a project developing a large new feature (built exclusively in React of course :)) that will live within our primary application at work. As it stands, we are on the path of fully adopting React for new development moving forward and refactoring crucial features as needed. It has been an overly positive experience and had a great effect on our development process, team dynamic, and even product quality.

I attribute this to a number of reasons. Here are some more specific reasons that have contributed to the positive experience.

## JSX

You can't get past the [React Doc's Homepage](http://facebook.github.io/react/index.html) without encountering JSX ([Facebook's JSX Spec] (https://facebook.github.io/jsx/)). This has been quite the point of contention among developers, and intially received negative feedback when Facebook initially open sourced React.

Personally, that this was initially one of the biggest selling points for me and I feel like it has had a huge impact on React's rise in popularity and success.

Here is a contrived side-by-side. You can easily imagine how a more complex "without JSX" example might look. Not to say it can't be done, but I see no reason to shed JSX in favor of "purity".

<a class="jsbin-embed" href="http://jsbin.com/zukapi/latest/embed?js">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

## ES6 (ES2015)

Another huge bonus side effect I've experienced from diving into React is exposing myself to ES6 (ES2015). This seems like a deliberate descision from the React team to "Promote best practices as default". 

Since I've begun working with React, all of my new code has been primarly ES6 **thanks to (Babel)[http://babeljs.io/]**. There is much more to be said about why you should be looking at or adopting ES6/ES2015 now. If you haven't given ES6 a shot, I highly recommend you go give Babel a spin.

## One Way Data Flow

Much wonder and happiness has come from the two-way data binding that React's ancestors provided. Being able to fire up a fresh Angular app, add a few ng attributes, and have some text be automatically bound to some input felt like magic! But with power comes a price. Much heartache and sorrow has resulted from large applications and impossible-to-debug scenarios as a result of two-way data binding. If you are coming from that type of world/mentality, then React's unidirectional data flow may be a bit jarring at first. 

I have found it refreshingly explicit.

I feel like the one way data flow that React promotes has had a huge impact on my way of thinking and has opened my eyes to the importance of "data flow". This definitely takes some getting used to and raises some questions when dealing with parent/child components.

> There is no guesswork or piecing together timelines of events to figure out "what will this component look like after X and before Y and during Z".

With this one way data flow, components are a function of props and state. There is no guesswork or piecing together timelines of events to figure out "what will this component look like after X and before Y and during Z". This is a paradigm shift I am still wrapping my mind around, but it is becoming clearer with time and has helped me better reason about the responsibilties of my components.

## and so much more...

There is so much more to be said about React and the impact it is having on my personal growth/development, team dynamics, and even product quality. Some more topics I would like to put some more thought and time into wrting:

- The power of `render()` and `propTypes` (as documentation)
- Unidirectional data flow
- Flux (currently implementing production project w/ [Alt](http://alt.js.org/))
- Functional Programming 
- Reactive Programming
- RxJS
- Animation with React
- react-router
- Some of the more helpful React-related resources and developers I've come across
