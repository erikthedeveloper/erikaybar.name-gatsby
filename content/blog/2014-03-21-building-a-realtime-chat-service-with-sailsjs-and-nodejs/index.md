---
title: "Building a Realtime Chatroom Application with SailsJS (a node.js MVC Framework)"
slug: building-a-realtime-chat-service-with-sailsjs-and-nodejs
date: "2014-03-21"
tags: ["SailsJS", "node.js", "MVC", "Open Source (github)"]
---

***Disclaimer:** This article is currently under construction. More details and follow up posts in the works...*

Let me begin by saying that up until now I have *experimented lightly* with **node.js** at best. I've picked it up a on-and-off a few times over the past year or two and never had the chance to really dug my heels in.

After sitting down and spending my first hour with **SailsJS**, I think it is safe to say that will be changing as of today.

**A little background on me:** I have been heavily focused on MVC/PHP/Laravel 4 development for the past 8 months or so (and **more** than happy with the experience) had my eye on spending some time with node.js for some time now and have 

I've seen SailsJS pop up more and more in conversations recently, so when I was tasked with creating a web development tutorial I thought, "Why not?!".

## What is SailsJS?

![](/content/images/2014/Mar/Sails_js___Realtime_MVC_Framework_for_Node_js.png)

*From the SailsJS Homepage*

> Sails.js make it easy to build custom, enterprise-grade Node.js apps. It is designed to mimic the MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with scalable, service-oriented architecture. It's especially good for building chat, realtime dashboards, or multiplayer games.

## What will we be building today?

**SailsCall**: A node.js Real-Time Web-Based Chat Application built using the SailsJS MVC framework.

>*In other words, something pretty damn cool using nothing but JavaScript ;)*

Here is a peak

![](/content/images/2014/Mar/SailsCall___A_Realtime_Chat_Application_Built_on_node_js_with_SailsJS.png)

![](/content/images/2014/Mar/SailsCall_2.png)

![](/content/images/2014/Mar/Sails_and_Sails_and_Sails.png)

Want to dig into some code?

I thought so: [SailsJS Codebase Hosted on GitHub](https://github.com/erikthedeveloper/sailsjs-the-first-voyage)

## Installation & System Requirements

I am by no means going to cover from ground up development environment setup, installation of node.js, and all of that other good stuff.

* Preferably a *nix environent (... Vagrant?!)
* node.js installed
* SailsJS
* Your ~~IDE~~ weapon of choice (which of course is Sublime Text :) )

However once your initial dev machine is setup it really just boils down to this:
```bash
sudo npm -g install sails
sails new testProject
cd testProject
sails lift
# You're golden
```

[From the docs](http://sailsjs.org/#!getStarted)

## Let's get started

~~A whirlwind overview of what MVC is or isn't~~... for now, just think of it as a *way* that you **can** structure your code. Loosely put it is simply a coding convention that just so happens to rock and SailsJS is based around it.

> A grossly simplified overview on an extremely subjective topic.

#### **M**odel
Think of this as your data. These files are located in the `ProjectName/api/models` directory

##### Model: ChatRoom
```javascript
// ProjectName/api/models/ChatRoom.js
/**
 * ChatRoom
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    title : {
        type: 'string',
        required: true
    },
    slug  : {
        type: 'string',
        required: true,
        unique: true,
        regex: '^[a-z-]+'
    }

  }

};
```

##### Model: StatusUpdate
```javascript
// ProjectName/api/models/StatusUpdate.js
/**
 * StatusUpdate
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    chatroom_id: {
        type: 'integer',
        required: true
    },

    username: {
        type: 'string',
        required: true
    },

    content: {
        type: 'string',
        required: true
    }

  }

};

```
* Chat Rooms
* Status Updates

#### **V**iew
Think of this as the end result you see in the browser (i.e. HTML, templates, etc...)

* Home Page
* Chat Room

#### **C**ontroller
Think of this as the traffic director.

* One Primary Controller
* One controller per Model (RESTful API)



## Ok, Enough With the Details...

**Here is what SailsCall SHOULD be able to do**

* A user can create a public chat room *(based on a unique "slug" such as "vt3000-presentation")
* A user can input a "slug" on the homepage and be redirected to a valid chat room
* Users can set their "Nickname" to whatever they fancy (G-rated of course)
* ... and yes. Users can chat amongst each other until pigs fly.

Sounds simple enough right?

**About the code**... let's take a peak shall we?

[SailsJS Codebase Hosted on GitHub](https://github.com/erikthedeveloper/sailsjs-the-first-voyage)

*Commence Whirlwind tour of...*

* Routes
* Models
* Views
* Controllers

#### Routes
```javascript
// routes.js

module.exports.routes = {

  '/': {
    view: 'home/index'
  },

  'post /redirect': 'ChatRoomController.redirect',

  '/chat/:chat_slug': {
    controller: 'ChatRoomController',
    action: 'render'
  }
}
  
```

## One More Thing... the Demo!
Of course: [Link to SailsCall Demo](http://sailscall.erikaybar.name/chat/from-blog-post)

**Note that you can click the link in the header, create a new chatroom with a slug of your choice, and invite others there.**

**Also:** this is in an extremely untested state. Beware of any mysterious errors that ~~may~~ occur.

*My pre-emptive apologies for the day that this demo link is down*

Want to run it yourself? Just remember (roughly)

```bash
git clone
cd ProjectDirectory
npm install
sails lift
```

*Comments/Links

* [Inspired Partially By](https://github.com/sethetter/sails-chat)
