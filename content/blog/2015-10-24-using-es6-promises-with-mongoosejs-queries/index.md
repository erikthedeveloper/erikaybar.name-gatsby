---
title: "Using ES6 Promises Instead of Callbacks for Mongoose Queries"
slug: using-es6-promises-with-mongoosejs-queries
date: "2015-10-24"
tags: ["node.js", "ES6+"]
---

[Mongoose](http://mongoosejs.com/) queries traditionally follow the typical node.js callback pattern. Thanks to Mongoose 4.2+ and [ES6 Promises (available in node 4.x)](https://nodejs.org/en/docs/es6/) these can be rewritten using a much more pleasant (and powerful IMO) pattern using promises. By default, these query methods return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

**Using callbacks**

```javascript
someMongooseModel.find(someInput, function(err, results) {
  if (err) {
    panic(err);
    return;
  }
  
  /* No error. Proceed as planned. */
  doSomething(results);
});
```

**Using Promises**

```javascript
someMongooseModel.find(someInput)
  .catch(panic)
  .then(doSomething);
```

Making use of the actual native `Promise` that ES6 provides, requires very little setup thanks to Mongoose exposing `mongoose.Promise`

```javascript
// Set mongoose.Promise to any Promise implementation
mongoose.Promise = Promise;
```

Here is a snapshot from a less trivial example showing how clean/nice it can be making use of the Promise in the context of a simple RESTful CRUD API built w/ [Express](http://expressjs.com/), [MongoDB](https://www.mongodb.com/), and Mongoose.

![RESTful CRUD API built w/ Express, MongoDB, and Mongoose.](/content/images/2015/10/ListMaster.png)

Just a quick tip, that I've recently discovered. Hopefully I can get around to piecing together a more complete example from my recent experiments with Express/Mongoose!
