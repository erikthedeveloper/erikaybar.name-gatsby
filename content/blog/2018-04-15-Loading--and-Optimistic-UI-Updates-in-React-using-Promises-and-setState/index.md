---
title: “Loading” and Optimistic UI Updates in React using Promises and setState
description: >-
  A brief walkthrough implementing two distinct approaches to updating UI and
  state with React.
date: '2018-04-15T14:14:41.795Z'
tags: ['react']
slug: Loading-and-Optimistic-UI-Updates-in-React-using-Promises-and-setState
---

Let’s walk through a step-by-step progression of developing a basic list UI with [React](https://reactjs.org/) that displays a list of items and enables deleting them via clicking a button that submits an _\*HTTP request_. We’ll begin with a bare-bones component that blindly doesn’t account for errors or give any indication of loading. Then, we can look at introducing the concepts of “loading” and handling failed requests. Finally, we can refactor our \*_app_ towards a more polished feel using optimistic UI updates.

*This is part of 2 of 2. See part 1 here [Optimistic UI Updates in React (part 01)](/optimistic-ui-updates-in-react)

> _The examples provided and videos linked to are from the second half of my_ [**_Optimistic UI Updates in React_** _course on egghead.io_](https://egghead.io/courses/optimistic-ui-updates-in-react)_. Head on over and check out_ [_the course overview/preview (free)_](https://egghead.io/lessons/react-course-overview-optimistic-ui-updates-in-react) _to get a feel for what the course is all about._

> _📝 Free for a limited time after which an_ [_egghead.io subscription_](https://egghead.io/pricing) _is required._

#### \*Build a static UI, rendering items from Component state

_There is no accompanying code or video for this section, but I want to highlight it as the first logical step before diving in further._

We’ll begin with a fresh React component (see docs: [React.Component](https://reactjs.org/docs/react-component.html)) and define the data structure that we’ll be working with. We can hardcode this for now right in `render` as `items.` This will be a simple array of objects, each with an “id” and “title” property. Then, we’ll render these as a list of items and add a button with a click handler for each of them (this button will not do anything quite yet). Next, we will promote our hard-coded `items` to [Component state](https://reactjs.org/docs/faq-state.html) as `state.items` so that we can manipulate and maintain it based on user interactions.

#### Update state asynchronously using Promise and setState()

First, we’ll hook up each of the items’ buttons to delete the item on click. This will fire off a _\*request_ to an API which will return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Making use of [Promise.prototype.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) we’ll update our [component state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) _after the request is complete_. Since we need to update state based on current state, we’ll use [`setState()`](https://reactjs.org/docs/react-component.html#setstate) [with an updater function](https://reactjs.org/docs/react-component.html#setstate) and remove the item from the list with [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

🎬 [_Update state asynchronously in React using Promise and setState()_](https://egghead.io/lessons/react-update-state-asynchronously-in-react-using-promise-and-setstate) _(2:25)_

![Example: Hooking up a React component to communicate with an API and update state upon request success using setState()](https://cdn-images-1.medium.com/max/800/1*V0zpU2hSTOx-8vp_CJP7wA.png)
Example: Hooking up a React component to communicate with an API and update state upon request success using setState()

#### Add a “loading” state to indicate request in progress

Rather than leaving our users hanging wondering if their action of clicking the button had any effect, we can indicate visually whether we are “loading” to the user. We will “begin loading” _before_ submitting our request to our _\*API_ and then “end loading” _once the request is complete_ using [Promise.prototype.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) and [`setState()`](https://reactjs.org/docs/react-component.html#setstate).

🎬 [_Add “loading” to UI for request in progress using setState()_](https://egghead.io/lessons/react-add-a-loading-indicator-to-ui-for-request-in-progress-using-setstate) _(1:02)_

![Example: Adding a loading state to keep track of and indicate whether a request is in progress](https://cdn-images-1.medium.com/max/800/1*yXeEseNn0kjx9po3lfQYQA.png)
Example: Adding a loading state to keep track of and indicate whether a request is in progress

#### Account for failed requests and conditionally display errors

So far we’ve yet to account for any errors encountered during a request. We can add a `catch()` handler ([Promise.prototype.catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)) to our request's promise where we will add an error message to component state. We will display the message to our users once an error has occurred using [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).

🎬 [_Handle rejected promise and display error to users_](https://egghead.io/lessons/react-handle-a-rejected-promise-and-display-error-to-user-using-setstate) _(1:49)_

![Example: Handle failed requests in React using setState(). Conditional rendering to display error to user.](https://cdn-images-1.medium.com/max/800/1*QW14slUHamAu-oCMcy11ag.png)
Example: Handle failed requests in React using setState(). Conditional rendering to display error to user.

#### Optimistic UI update in React using setState() and closures

Lastly, we can refactor our UI away from its typical, clunky _loading_ experience to an _optimistic UI update_ approach to give our users a faster, more snappy experience.

Instead of _loading_ while our request is in progress, we can assume request success, _immediately update the UI,_ and account for displaying an error and reverting state in the event of a failure. Thanks to the simplicity and power of [`setState()`](https://reactjs.org/docs/react-component.html#setstate) combined with making use of Javascript's [lexical scoping and closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), we can accomplish this relatively easily in React.

🎬 [_Optimistic UI update in React using setState()_](https://egghead.io/lessons/react-optimistic-ui-update-in-react-using-setstate) _(3:47)_

![Example: Optimistic UI update in React with setState()](https://cdn-images-1.medium.com/max/800/1*C4qFffT3K_3CPoa0sjzHMg.png)
Example: Optimistic UI update in React with setState()

To contrast the difference in feel between the _typical loading UI_ and _optimistic update UI_ let’s see the two side-by-side:

![Side-by-side comparison of a “loading” UI vs. an “optimistic update” UI](https://cdn-images-1.medium.com/max/800/1*nn_QlCD3XztliYxSmG1lSw.gif)
Side-by-side comparison of a “loading” UI vs. an “optimistic update” UI
undefined

#### Granularly Restore State for Improved Optimistic UI Updates

Our initial, simplified approach may be fine for a number of scenarios, but is not the most robust solution. We’ve left the potential for inconsistent state due to the fact that between taking the snapshot of current state (`stateToRestore`) and restoring it after a failure, the user could have performed additional actions. Consider this sequence in events that will result in a bug with our previous solution:

1.  User deletes “Item 3” (snapshot taken at this time, “Item 3” removed immediately). _Request pending…_
2.  User deletes “Item 2” (“Item 2” removed immediately). _Request pending…_
3.  The request for “Item 3” fails and we revert state using the snapshot taken _before_ the user deleted “Item 2”.
4.  The request for “Item 2” succeeds.

**The bug:** Even though “Item 2” has truly been deleted from our \*_database_ it has been visually restored to the screen along with “Item 3” due to the snapshot we took in step 1 when the user clicked delete for “Item 3”.

**One solution:** Instead of taking a snapshot of our entire state, we can take a snapshot of the target item and use that upon failure to more precisely restore the individual item. This eliminates the possibility of erroneously restoring deleted items and giving our users the false impression of failure.

🎬 [_Restore Target Items in React State for Improved Optimistic UI Updates_](https://egghead.io/lessons/react-restore-target-items-in-react-state-for-improved-optimistic-ui-updates) _(2:57)_

![Example: Restore the item which failed individually to avoid incorrectly restoring deleted items.](https://cdn-images-1.medium.com/max/800/1*Mj81BnZBd-1mWguA6FStkg.png)
Example: Restore the item which failed individually to avoid incorrectly restoring deleted items.

If you are looking to further sink your teeth into more extensive and more advanced \[video\] React content, I must recommend the 2 recent and very well put together egghead.io courses out from Kent C. Dodds:

- [The Beginner’s Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) (~75 minutes of condensed, _free_ React knowledge 🔥)
- [Advanced React Component Patterns](https://egghead.io/courses/advanced-react-component-patterns) (Packed with knowledge, requires an egghead.io subscription)
