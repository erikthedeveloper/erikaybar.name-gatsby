---
title: "Ember.js Example App w/ Twitter Bootstrap (SASS) and ember-cli"
slug: ember-js-bootstrap-sass-and-ember-cli-quick-start
date: "2014-11-16"
tags: ["node.js", "ember.js", "bootstrap"]
---

This is an introductory look at setting up a fresh [Ember.js](http://emberjs.com/) App using [ember-cli](http://www.ember-cli.com/), setting up a few basic templates/routes, and installing/configuring some assets such as [Twitter Bootstrap](http://getbootstrap.com/) (using [SASS](http://sass-lang.com/)) using [Bower](http://bower.io/).

I recently came into a situation where I need to accomplish just this and found that the due to Ember's rapid evolution, many of the articles had become out of date. **Which will surely happen to this article as well**. Please note this article is using `ember-cli v0.1.2`, `node v0.10.31`, and `Ember v1.8.1`.

**If you are new to Ember.js**, I highly recommend heading over the the Ember docs and [Getting Started Guides](http://emberjs.com/guides/getting-started/) and spending a bit of time getting to know the framework at least on a high level. If you have any type of [Ruby on Rails](http://rubyonrails.org/), [Laravel](http://laravel.com/), (or any other similar MVC-ish frameworks that utilize generators and the command line), you will feel right at home :).

![Ember.js Homepage](/content/images/2014/11/Fullscreen_11_18_14__10_26_AM.png)

## Quick Start - Copy/Paste (bad!)

Assuming you are already setup with `node`, `ember` (ember-cli), and `bower`.

Recommended: Head on over the my [Ember.js w/ Bootstrap (SASS) Example App](https://github.com/erikthedeveloper/emberjs-bootstrap3-starter-app#quick-start) Quick Start instructions.

_At the time of this writing:_

```bash
# Clone the repo and change directories
git clone https://github.com/erikthedeveloper/emberjs-bootstrap3-starter-app.git MyEmberApp && cd MyEmberApp
# Because we never work/commit on master ... right? ;)
git checkout -b feature/my_first_feature
# Install the dependencies (package.json && bower.json)
npm install && bower install
# Fire up the ember-cli server
ember server
# Done. See that wasn't so bad, was it?

# (optionally in a new tab)
open http://localhost:4200
```

Now you should be able to browse to: [http://localhost:4200](http://localhost:4200) and be up and running with Ember.js and Bootstrap 3!

It should look a bit like this:

![](https://cloud.githubusercontent.com/assets/1240178/5063715/e19a5b76-6dae-11e4-86cc-d32bc233908d.png)

and from there you have a decent starting point to start learning and experimenting with many of Ember.js's features/concepts such as: 

- [Handlebars Templates](http://emberjs.com/guides/templates/the-application-template/)
- [Routing](http://emberjs.com/guides/routing/)
- [Components](http://emberjs.com/guides/components/)
- [Controllers](http://emberjs.com/guides/controllers/)
- [Models](http://emberjs.com/guides/models/)
- [Views](http://emberjs.com/guides/views/)
- Customizing your SASS and leveraging Bootstrap within `app/styles/**/*.scss`

---

## The Long Version - Step-by-Step

... Although very short long version :)

### Step 0: Required Tools:

##### Install [node.js](http://nodejs.org/)

If you don't already have node.js installed on your system, you will need to start here. If you search for "How to install node.js on [YOUR OPERATION SYSTEM]" you will come across 100 different methods on how to do just that. 

The simplest way is the just head on over to [nodejs.org](http://nodejs.org/) and download the one click installer.

I've found I have a much better time (and would recommend you take this route) using [`nvm` (Node Version Manager)](https://github.com/creationix/nvm)

Their [quick install instructions](https://github.com/creationix/nvm#install-script) are pretty straightforward. Just make sure to set `stable` as your `default` `alias`.

```bash
# Download and setup nvm
curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash

# Now install and activate the most recent "stable" node
nvm install stable
nvm alias default stable

# At this point you should be golden (try these to verify...)
which node
which npm
```

##### Install [ember-cli](http://www.ember-cli.com/) and [bower](http://bower.io/)

```bash
npm install -g ember-cli
npm install -g bower
```

*Note: if you have to use `sudo` for any `npm install -g [...]` commands then your `node` is likely not installed correctly. If you installed via `nvm` this should be a non-issue :)*

### Step 1: Scaffold Default Ember App via `ember-cli`

```bash
$ ember new my-first-ember-app
$ cd my-first-ember-app
$ ember server
```

At this point you should be able to browse to: [http://localhost:4200/](http://localhost:4200/) ...

If your are running into problems... well, try try again ;)

### Step 2: Add Some Basic Routes/Templates

If you are new to `ember-cli`, then you will want to head over and checkout the [ember-cli Generator docs](#).

Some blurb here... Yay! ember-cli so great...



```bash
$ ember generate template login
```

Declare the route in your `router.js` for `"/login"`



```javascript
// app/router.js - Router.map
Router.map(function() {
  this.route('login');
});
```

**And for good measure,** let's throw in some Bootstrap specific markup so we can verify that the Bootstrap 3 assets (including glyphicons/fonts) are setup correctly.


```html
// app/templates/login.hbs
<!-- Note: this is vanilla HTML. TODO: Emberify!-->
<h2>Login</h2>

<form class="form" action="#">

  <label for="email" class="sr-only">Email</label>
  <input type="email" class="form-control input-lg" name="email" id="email" placeholder="Email"/>

  <br/>

  <label for="password" class="sr-only">Password</label>
  <input type="password" class="form-control input-lg" name="password" id="password" placeholder="Password"/>

  <hr/>

  <button class="btn btn-lg btn-primary">
    <span class="glyphicon glyphicon-cog"></span> Log Me In!
  </button>

</form>
```
### Step 3: Add Dependencies for Bootstrap and SASS

```bash
$ bower install --save-dev bootstrap-sass-official
$ npm install --save-dev broccoli-sass
```

*Note: bootstrap-sass is not the bootstrap-sass you are looking for!*
> [...] `bootstrap-sass` is taken so make sure you use the command above.

#### Step 3b: Enable Bootstrap Assets



```javascript
// Brocfile.js
app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
```

**Rename `app.css` to `app.scss`**

```bash
mv app/styles/app.css app/styles/app.scss
```

**Import Bootstrap**

Now you could import directly from the `bower_components/[...]/bootstrap.scss`, but I like to have a little more control/visibility over my imports (especially since the `bower_components`'s Bootstrap is not tracked in the git repository).

- Add a `@import "bootstrap_imports";` to the top of your `app.scss`.
- Within the `app/styles/` add a `bootstrap_imports.scss`
- Load the page. Your new app should be Bootstrap-ified!

#### Step 3c: Using Bootstrap Glyphicons with ember-cli and Broccolli (fonts path)

Some blurb here....

**Add this to your `Brocfile.js`**



```javascript
// Brocfile.js
app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {
  destDir: 'fonts/bootstrap/'
});
```

#### Step 3c: Start Customizing Bootstrap!

- Add a `bootstrap_variables.scss` to declare/override Bootstrap's defaults. Why? [Read this article on `!default`](http://robots.thoughtbot.com/sass-default) for an explanation.



```scss
// bootstrap_imports.scss

// Our custom variables
@import "bootstrap_variables";

// Core variables and mixins
@import "bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/variables";

// Other import statements below here
// [...]
```

Any variables you declare in this new file will take precedence over those declared in the deafult `_variables.scss` included by Bootstrap.

## In Closing...

Well. That about sums it up for now :)

I plan to refine and update my [Ember.js w/ Bootstrap (SASS) Example App](https://github.com/erikthedeveloper/emberjs-bootstrap3-starter-app#quick-start) repo as I plan to use it from time to time.

By the time you read this, the repo will likely be much more up to date, relevant, and useful. Please let me know of any suggestions/alternatives/resources as at the time of this writing I am fairly new to the land of [Broccoli](https://github.com/broccolijs/broccoli) and [Ember.js](http://emberjs.com/) myself!
