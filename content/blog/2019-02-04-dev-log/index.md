---
date: 2019-02-04
title: Dev Log 2019-02-04
published: true
tags: ['dev-log']
---

Today was a mixed bag.

### Typing Redux with Flow

I've grown to prefer the `createReducer` version of Redux reducers over `switch` statements. This has helped us greatly simplify. I've been struggling to get Flow types where I'd like them to be though. What would I like?

```js
// @flow
// redux/pods/some-pod.js

// 1) Action types
//  Since these are used by the reducer and action creators, these must be defined first
//  Note: May not be imported by other pods for reasons of circular dependencies
const [
  SIMPLE_ACTION,
  REQUEST_THINGS,
  REQUEST_THINGS_SUCCESS,
  REQUEST_THINGS_FAILURE,
] = [
  'SIMPLE_ACTION',
  'REQUEST_THINGS',
  'REQUEST_THINGS_SUCCESS',
  'REQUEST_THINGS_FAILURE',
].map(action => `prefix/${action}`)

// 2) Action creators

export function simpleAction() {
  return {
    type: SIMPLE_ACTION,
    key,
    value,
  }
}

export function requestThings(params: *) {
  return async dispatch => {
    dispatch({type: REQUEST_THINGS})
    try {
      dispatch({
        type: REQUEST_THINGS_SUCCESS,
        things: await requestThings(params),
      })
    } catch (error) {
      dispatch({
        type: REQUEST_THINGS_FAILURE,
        errors: error.errors,
      })
    }
  }
}

// 3) State type. export type {State}

export type State = {
  loading: boolean,
  things: Array<Thing>,
}

// 4) initialState and reducer (prefer createReducer). export {reducer}

const initialState: State = {
  loading: false,
  things: [],
}

// All pods must have named export `reducer`
export const reducer = createReducer(initialState, {
  [SIMPLE_ACTION]: (state, action) => ({
    ...state,
    [action.key]: action.value,
  }),

  [REQUEST_THINGS]: state => ({
    ...state,
    loading: true,
  }),

  [REQUEST_THINGS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    thing: action.thing,
  }),

  [REQUEST_THINGS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.errors,
  }),
})
```
