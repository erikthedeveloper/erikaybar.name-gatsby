---
title: 'Optimistic UI Updates in React using component state'
date: '2019-04-30'
tags: ['React', 'egghead.io']
slug: optimistic-ui-updates-in-react-using-component-state
---

Let’s walk through a step-by-step progression of developing an items list UI with [React](https://reactjs.org/) that enables deleting each of the items by clicking a button that submits an _\*HTTP request_.

We’ll begin with a static UI and first introduce the concept of “loading”. Then we'll handle failed requests before refactoring towards a more polished feel using optimistic UI updates.

To contrast the difference in feel between the _typical loading UI_ and _optimistic update UI_ let’s see the two side-by-side:

![Side-by-side comparison of a “loading” UI vs. an “optimistic update” UI](https://cdn-images-1.medium.com/max/800/1*nn_QlCD3XztliYxSmG1lSw.gif)

The progression we'll be following is:

1. Build static UI, hardcoding component state
2. Update state asynchronously using Promise and setState()
3. Add a “loading” state to indicate request in progress
4. Account for failed requests and conditionally display errors
5. Optimistic UI update in React using setState() and closures
6. Granularly Restore State for Improved Optimistic UI Updates

_\*This post is part of 2 of 2. See part 1 here [Optimistic UI Updates in React (part 01)](/optimistic-ui-updates-in-react)._

> _The examples provided and videos linked to are from the second half of my_ [**_Optimistic UI Updates in React_** _course on egghead.io_](https://egghead.io/courses/optimistic-ui-updates-in-react)_. Head on over and check out_ [_the course overview/preview (free)_](https://egghead.io/lessons/react-course-overview-optimistic-ui-updates-in-react) _to get a feel for what the course is all about._

[![egghead.io course: Optimistic UI Updates with React](egghead-Optimistic-UI-Update-Course.png)](https://egghead.io/courses/optimistic-ui-updates-in-react)

## 1) Build static UI, hardcoding component state

We’ll begin with a fresh React component (see docs: [React.Component](https://reactjs.org/docs/react-component.html)) and define the data structure that we’ll be working with. We can hardcode this for now right in `render` as `items.` This will be a simple array of objects, each with an “id” and “title” property. Then, we’ll render these as a list of items and add a button with a click handler for each of them (this button will not do anything quite yet).

Next, we will promote our hard-coded `items` to [Component state](https://reactjs.org/docs/faq-state.html) as `state.items` so that we can manipulate and maintain it based on user interactions.

_Example: Rendering static UI and hardcoding component state_

```javascript{3}
class ItemsList extends React.Component {
  state = {
    items: [{id: 1, title: 'An item' /* ... */}],
  }

  render() {
    const {items} = this.state
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    )
  }
}
```

## 2) Update state asynchronously using Promise and setState()

First, we’ll hook up each of the items’ buttons to delete the item on click. This will fire off a _\*request_ to an API which will return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Making use of [Promise.prototype.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) we’ll update our [component state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) _after the request is complete_. Since we need to update state based on current state, we’ll use [`setState()`](https://reactjs.org/docs/react-component.html#setstate) with an [updater function](https://reactjs.org/docs/react-component.html#setstate) and remove the item from the list with [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

🎬 [_Update state asynchronously in React using Promise and setState()_](https://egghead.io/lessons/react-update-state-asynchronously-in-react-using-promise-and-setstate) _(2:25)_

_Example: Hooking up a React component to communicate with an API and update items upon request success using setState()_

```javascript{9-12}
class ItemsList extends React.Component {
  state = {
    items: [],
  }

  deleteItem(id) {
    // 1) Submit HTTP request (returns a Promise)
    deleteItemRequest(id).then(() => {
      // 2) Update items upon request success
      this.setState(state => ({
        items: state.items.filter(item => item.id !== id),
      }))
    })
  }

  render() {
    const {items} = this.state
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }
}
```

## 3) Add a “loading” state to indicate request in progress

Rather than leaving our users hanging wondering if their action of clicking the button had any effect, we can indicate visually whether we are “loading” to the user. We will “begin loading” _before_ submitting our request to our _\*API_ and then “end loading” _once the request is complete_ using [Promise.prototype.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) and [`setState()`](https://reactjs.org/docs/react-component.html#setstate).

🎬 [_Add “loading” to UI for request in progress using setState()_](https://egghead.io/lessons/react-add-a-loading-indicator-to-ui-for-request-in-progress-using-setstate) _(1:02)_

_Example: Adding a loading state to keep track of and indicate whether a request is in progress_

```javascript{4,9,15,22-25}
class ItemsList extends React.Component {
  state = {
    items: [],
    loading: false,
  }

  deleteItem(id) {
    // 1) Immediately "begin loading"
    this.setState({loading: true})
    // 2) Submit HTTP request (returns a Promise)
    deleteItemRequest(id).then(() => {
      // 3) Success: Update items and "end loading"
      this.setState(state => ({
        items: state.items.filter(item => item.id !== id),
        loading: false,
      }))
    })
  }

  render() {
    const {items, loading} = this.state
    // This could be a dynamic className or CSS-in-JS based styles
    const loadingStyles = {
      opacity: loading ? 0.6 : 1,
    }
    return (
      <ul styles={loadingStyles}>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }
}
```

## 4) Account for failed requests and conditionally display errors

So far we’ve yet to account for any errors encountered during a request. We can add a `catch()` handler ([Promise.prototype.catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)) to our request's promise where we will add an error message to component state. We will display the message to our users once an error has occurred using [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).

🎬 [_Handle rejected promise and display error to users_](https://egghead.io/lessons/react-handle-a-rejected-promise-and-display-error-to-user-using-setstate) _(1:49)_

_Example: Handle failed requests in React using setState(). Conditional rendering to display error to user._

```javascript{5,20-24,34}
class ItemsList extends React.Component {
  state = {
    items: [],
    loading: false,
    errorMessage: null,
  }

  deleteItem(id) {
    // 1) Immediate "begin loading"
    this.setState({loading: true})
    // 2) Submit HTTP request (returns a Promise)
    deleteItemRequest(id)
      // 3a) Success: Update items and "end loading"
      .then(() => {
        this.setState(state => ({
          items: state.items.filter(item => item.id !== id),
          loading: false,
        }))
      })
      // 3b) Failure: Store error message.
      .catch(error => {
        this.setState(state => ({
          errorMessage: 'Whoops! Something went wrong. Please try again.',
        }))
      })
  }

  render() {
    const {items, loading, errorMessage} = this.state
    // ...
    return (
      <div>
        {/* ... */}
        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </div>
    )
  }
}
```

## 5) Optimistic UI update in React using setState() and closures

Lastly, we can refactor our UI away from a more typical _loading_ experience to an _optimistic UI update_ approach to give our users a faster, more snappy experience.

Instead of _loading_ while our request is in progress, we can assume request success, _immediately update the UI,_ and account for displaying an error and reverting state in the event of a failure. Thanks to the simplicity and power of [`setState()`](https://reactjs.org/docs/react-component.html#setstate) combined with making use of Javascript's [lexical scoping and closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), we can accomplish this relatively \*easily in React.

_\*This is a naive solution. Read further to explore a more robust approach. While naive, a simple solution like this could very well meet your needs for many use cases while avoiding additional complexity._

🎬 [_Optimistic UI update in React using setState()_](https://egghead.io/lessons/react-optimistic-ui-update-in-react-using-setstate) _(3:47)_

_Example: Optimistic UI update in React with setState()_

```javascript{8,13,19}
class ItemsList extends React.Component {
  state = {
    items: [],
    errorMessage: null,
  }

  deleteItem(id) {
    // 1) Snapshot relevent current state to restore
    const stateToRestore = {
      items: this.state.items,
    }

    // 2) Assume request success. Immediately update state
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }))

    deleteItemRequest(id)
      // 3) Restore relevant state upon failure
      .catch(error => {
        this.setState(state => ({
          errorMessage: 'Whoops! Something went wrong. Please try again.',
          ...stateToRestore,
        }))
      })
  }

  render() {
    // ...
  }
}
```

## 6) Granularly Restore State for Improved Optimistic UI Updates

Our initial, simplified approach may be fine for a number of scenarios, but is not the most robust solution. We’ve left the potential for inconsistent state due to the fact that between taking the snapshot of current state (`stateToRestore`) and restoring it after a failure, the user could have performed additional actions. Consider this sequence in events that will result in a bug with our previous solution:

1.  User deletes “Item 3” (snapshot taken at this time, “Item 3” removed immediately). _Request pending…_
2.  User deletes “Item 2” (“Item 2” removed immediately). _Request pending…_
3.  The request for “Item 3” fails and we revert state using the snapshot taken _before_ the user deleted “Item 2”.
4.  The request for “Item 2” succeeds.

**The bug:** Even though “Item 2” has truly been deleted from our \*_database_ it has been visually restored to the screen along with “Item 3” due to the snapshot we took in step 1 when the user clicked delete for “Item 3”.

**One solution:** Instead of taking a snapshot of our entire state, we can take a snapshot of the target item and use that upon failure to more precisely restore the individual item. This eliminates the possibility of erroneously restoring deleted items and giving our users the false impression of failure.

🎬 [_Restore Target Items in React State for Improved Optimistic UI Updates_](https://egghead.io/lessons/react-restore-target-items-in-react-state-for-improved-optimistic-ui-updates) _(2:57)_

_Example: Restore the item which failed individually to avoid incorrectly restoring deleted items._

```javascript{8,23}
class ItemsList extends React.Component {
  state = {
    items: [],
    errorMessage: null,
  }

  deleteItem(id) {
    // 1) Snapshot target item to restore in the case of failure
    const {items} = this.state
    const targetIndex = items.findIndex(item => item.id === id)
    const targetItem = items[targetIndex]

    // 2) Assume request success. Immediately update state
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }))

    deleteItemRequest(id)
      // 3) Restore relevant state upon failure
      .catch(error => {
        this.setState(state => ({
          errorMessage: 'Whoops! Something went wrong. Please try again.',
          // Put the item back where it was originally
          items: [
            ...state.items.slice(0, targetIndex),
            targetItem,
            ...state.items.slice(targetIndex),
          ],
        }))
      })
  }

  render() {
    // ...
  }
}
```

---

## What about hooks? 🎣

Yes, I know... This could be simplified with hooks https://reactjs.org/docs/hooks-reference.html 😅

This course was released last year, long before hooks in React came to life. I do plan on revisiting the course and updating to highlight how to solve with hooks instead of class components. Overall, the concept is the same except for shuffling around and simplifying a bit. If you're feeling adventurous take a crack at porting over one of the examples and ping me with it [@erikaybar\_](https://twitter.com/erikaybar_)!

---

If you are looking to further sink your teeth into more extensive and more advanced React video content, I must recommend the very well put together egghead.io React courses from Kent C. Dodds:

- [The Beginner’s Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) (~75 minutes of condensed, _free_ React knowledge 🔥)
- [Advanced React Component Patterns](https://egghead.io/courses/advanced-react-component-patterns) (Packed with knowledge, requires an egghead.io subscription)
