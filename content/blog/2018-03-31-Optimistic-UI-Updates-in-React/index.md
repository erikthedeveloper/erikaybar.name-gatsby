---
title: Optimistic UI Updates in React
description: "Build snappier, more responsive applications with Optimistic UI Updates… and my 1st egghead.io course! \U0001F389"
date: '2018-03-31T14:14:41.795Z'
tags: ['react']
slug: optimistic-ui-updates-in-react
---

[![egghead.io course: Optimistic UI Updates with React](../2018-04-15-Loading--and-Optimistic-UI-Updates-in-React-using-Promises-and-setState/egghead-Optimistic-UI-Update-Course.png)](https://egghead.io/courses/optimistic-ui-updates-in-react)

No matter what type of app you’re building, you’re going to need to fetch data, display that data to a user, and enable the user to interact with and update that data. This interaction/updating phase is often asynchronous. This presents you, the developer, an opportunity to provide a range of differing experiences depending on the circumstances.

In certain cases, you can leverage what is known as _optimistic UI updates_ for an improved, snappier user experience as compared to a traditional “loading” experience (further reading: [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/)).

_\*This post is part of 1 of 2. See part 2 here [“Loading” and Optimistic UI Updates in React using Promises and setState](/Loading-and-Optimistic-UI-Updates-in-React-using-Promises-and-setState)._

> They aren’t suited for every use case, but selectively making use of optimistic UI updates throughout your application can have a big impact on the quality of user experience for relatively little cost/complexity!

> _The examples and videos linked to are part of my egghead.io course:_ [**_Optimistic UI Updates in React_** 🔗](https://egghead.io/courses/optimistic-ui-updates-in-react)_. The course is just 25 minutes total, so head on over and check out_ [_the course overview (free)_](https://egghead.io/lessons/react-course-overview-optimistic-ui-updates-in-react) _to get a feel for what the course is all about._

[![Course Overview: Optimistic UI Updates in React](https://cdn-images-1.medium.com/max/800/1*UsZoPp0FQM0v63XbGHo2KQ.png)](https://egghead.io/lessons/react-course-overview-optimistic-ui-updates-in-react)
Course Overview: Optimistic UI Updates in React

In this first example, I’m going to break down the process of building a Twitter-like UI where a user can “like” a tweet and dig into the challenges of optimistically updating the UI to reflect:

1.  Whether the user has liked a tweet
2.  The total number of likes a tweet has

We’ll look at accounting for request failures, reverting state, and some edge cases along the way.

![](https://cdn-images-1.medium.com/max/800/1*i5iv7nAiQWdyuIlKDHidDA.gif)

#### _\*Use Codesandbox.io for an instant development environment_

_There is no accompanying code or video for this section, but I want to call out CodeSandbox.io as an absolute game changer for being able to quickly prototype and/or share examples and mini-projects. If you haven’t already, go check it out and give it a spin_ [https://codesandbox.io/](https://codesandbox.io/)_!_

#### [Update Multiple Values in State Using setState (🎬 3:39)](https://egghead.io/lessons/react-optimistically-update-multiple-values-in-state-using-react-s-setstate)

First, we’ll add an `onClickLike` method to our [React component](https://reactjs.org/docs/react-component.html). Upon a user clicking the heart icon, it will immediately update state _before_ firing off a request. We will toggle the “liked” status of the tweet by updating component state based on previous state, using a [setState updater function](https://reactjs.org/docs/react-component.html#setstate). We’ll then appropriately increment or decrement the target tweet’s `likes` property and add or remove the `tweetId` from the `likedTweets` array.

![](https://cdn-images-1.medium.com/max/800/1*gVXuTGuCp_sxnuyVjFNy6Q.png)

#### [Refactor Inlined setState to a setState Updater Factory (🎬 1:30)](https://egghead.io/lessons/react-refactor-inlined-setstate-function-to-a-setstate-updater-factory)

React’s setState accepts an [updater function](https://reactjs.org/docs/react-component.html#setstate) that given current state returns new state. To better define and manage our setState usages, we can extract our inlined setState function to a setState updater factory. This enables us to give it a descriptive name and define its required arguments. This approach can ease future reuse, refactoring and composition for updating component state in our application.

By extracting our setState function to this `setTweetLike(tweetId, newLiked)` we can easily reuse it when it comes time to revert state upon failure.

![](https://cdn-images-1.medium.com/max/800/1*z2bjw9Klhpjk91U9h6MvSQ.png)

#### [Revert State On Failure Using setState and closures (🎬 1:02)](https://egghead.io/lessons/react-revert-state-on-request-failure-using-setstate-and-closures)

A crucial part of implementing optimistic UI updates is properly handling failure cases. In the event of a request failing, we must revert the state which we’ve already updated since we assumed success at the time of user interaction. Thanks to the simplicity and power of [setState()](https://reactjs.org/docs/react-component.html#setstate) combined with Javascript’s [lexical scoping and closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), we can accomplish this relatively easily in React.

By taking a snapshot of the current liked status in the same scope as our catch handler function \[closure\], we can revert state upon failure since we’ve held onto the value in our closure. Related reading: [Understand Javascript Closures with Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)

![](https://cdn-images-1.medium.com/max/800/1*9fZT1fYu-mlUWxr8Ne9gyA.png)

#### [Prevent Doubly Updating and Reverting State (🎬 2:35)](https://egghead.io/lessons/react-prevent-doubly-updating-and-reverting-state)

Optimistic UI updates come with challenges that can vary for every use case. In our scenario of “liking a tweet”, one challenge that we face is preventing doubly updating and reverting state in the event of the user clicking “like” in rapid succession. In the case of a request failure our current solution results in the false impression that the tweet was successfully liked.

One solution that fits our use case is to simply raise and lower a boolean flag to indicate whether a like tweet request is pending or not. Using this flag, we can short circuit our `onClickLike`method to "do nothing" if a request is already pending. Since we don’t require this information in our render method or on component state, we can simplify this further by making use of a class instance property to store this value.

![](https://cdn-images-1.medium.com/max/800/1*Qp0stqOnvy7GMi_QrHa6ww.png)

> TL;DR By assuming response success and updating state/UI immediately upon user action, you can provide much snappier experiences for your users. You’ll have to account for failure cases and other special things along the way. React and component state make this pleasant.

I hope you’ve found this information useful and that it adds value for you in your projects and career 😃

Don’t forget to check out the full course over at [https://egghead.io/courses/optimistic-ui-updates-in-react 🔗](https://egghead.io/courses/optimistic-ui-updates-in-react), leave a comment, share and/or reach out at [https://twitter.com/erikaybar\_](https://twitter.com/erikaybar_) 👋🏼
