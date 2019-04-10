---
title: "Source Maps with webpack in Chrome"
slug: webpack-source-maps-in-chrome
date: "2017-01-23"
tags: ["webpack", "javascript"]
---

Developing without source maps can be painful. You just shouldn't have to endure that sort of thing. To top that, there isn't much worse that having to sift through minified code and guess at what is causing your mysterious errors on production. Do yourself and your team a favor! Turn those [source maps on for development](https://webpack.js.org/guides/development/#source-maps) and make sure you have them [enabled in production](https://webpack.js.org/guides/production-build/#source-maps).

If you are running into troubles with getting [source maps working with Webpack](http://survivejs.com/webpack/building-with-webpack/enabling-sourcemaps/) (especially if you're experience [problems with source maps in Chrome](https://github.com/webpack/webpack/issues/2145)), this is what has been working for me. This is one of those things that has tripped me up several times _and counting_ so I figure I better get it out there on the Internet so that others (and myself) can stumble onto it in a moment of weakness.

Short version:

- For development, I set `devtool` to `'eval-source-map'`
- For production, I set `devtool` to `'source-map'`
- Do **NOT** provide CLI flags such as `-d` or `-p`

Run command such as:
```bash
webpack
```

With a `webpack.config.js` such as:
```javascript
const config = {
  // ...
  devtool: 'source-map',
  // ...
}
```

---

Lessons learned:

## 1) Warning: Mixing and Matching webpack CLI flags and webpack configs will result in fire.

Make sure you **either** 

- Provide one of the [CLI shortcut flags](https://webpack.js.org/api/cli/#shortcuts) `-p` or `-d` for production and development respectively OR
- Set a [valid `devtool` option](https://webpack.js.org/configuration/devtool/#devtool) on your `config.devtool`.

If you attempt to do both, then you'll end up like me:

> Fool me once, shame on you

![](/content/images/2017/01/_PAT-4667__Massage_the_Build_by_erikthedeveloper_-_Pull_Request__553_-_practicegenius_my_patientrewardshub_com-1.png)

> Fool me twice, shame on me! *Really, I should be ashamed! I better make a note about it this time...*

![](/content/images/2017/01/_PAT-4789__Source_Maps__dev___prod__by_erikthedeveloper_-_Pull_Request__598_-_practicegenius_my_patientrewardshub_com.png)

## 2) Getting source maps to work in Chrome

There are a number of open GitHub issues surrounding this. If you want to dive into that and find out more, here is a good starting point: [Source Maps don't work on Chrome #2145](https://github.com/webpack/webpack/issues/2145)

This is a tricky one, that I've somehow had to wrestle a few different times. Apparently, there are some issues with Chrome and source maps. I can't say for sure how specific this is to webpack, but here is what worked for me:

_REMEMBER: DO NOT MIX AND MATCH CLI FLAGS WITH CONFIG FOR `devtool` THE CLI FLAGS WILL WIN_

- For development, I set `devtool` to `'eval-source-map'`
- For production, I set `devtool` to `'source-map'`

Example:

```javascript
const config = {
  // ...
  devtool: 'source-map',
  // ...
}
```

---

## Let's Do Some Console Debugging!

Here is a look at some console debugging output with various webpack source map settings. Using this `index.js` importing a few dummy modules. Notice that the `console.log` statements are logging out the expected `filename.js:line-number`.

_This is using [webpack 2.2.0](https://medium.com/webpack/webpack-2-2-the-final-release-76c3d43bf144#.ksw9rxhoy), but if I recall correctly these same issues were present when using 1.x and this is more of an issue with Chrome than a webpack-specific issue._

![](/content/images/2017/01/webpack-source-map-example-test.png)

---

**👎 Naked: Using `webpack` (with no `devtool` setting or CLI flag)**

Have fun debugging raw `bundle.js` :)

![](/content/images/2017/01/Document.png)

---

**👎 *Okay:* Using `webpack -d` (the [development CLI shortcut](https://webpack.js.org/api/cli/#shortcuts))**

Filenames are there, but line numbers don't match. This trivial example doesn't look so bad, but on a larger project this becomes much more of an issue.

![](/content/images/2017/01/Document-1.png)

---

**👍 *Better:* Using `webpack` with `devtool` set to `eval-source-map` (for development)**

Accurate filenames and line numbers for the line in question (not all the way down the stack trace)

![](/content/images/2017/01/Document-3.png)

---

**👍 *Best:* Using `webpack` with `devtool` set to `source-map` (for production)**

Beautiful (and correct) filenames and line numbers all the way down the stack trace.

![](/content/images/2017/01/Document-2.png)

---

I experimented with a few of the other [devtool options](https://webpack.js.org/configuration/devtool/#devtool), and these seem to be the best options for Chrome for now. If you've come across something that works better for you, I'd be interested to hear about it!
