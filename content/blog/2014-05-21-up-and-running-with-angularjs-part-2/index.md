---
title: "Up And Running with AngularJS - Part 2"
slug: up-and-running-with-angularjs-part-2
date: "2014-05-21"
tags: ["AngularJS"]
---

Ok, so in my [intro to AngularJS](http://erikaybar.name/up-and-running-with-angularjs-part-1/) I covered the absolute basics of how to get started with AngularJS and went only as far as loading the AngularJS library into the page, setting up a basic controller, and using some 2-way data binding. Absolute basics only....

Here, I am going to fast forward quite a bit and see if I can crank out a more complete example which I will then build on (eventually building out the RESTful backend API and using the AngularJS front end to consume and interact with the data).

## We will be building...

If there is one lesson I've learned over my time experimenting with side projects such as this, it is that nailing down a concrete "idea" and sticking with it from concept to product is easier said than done. Having said that I am going to keep this example application as simple as possible.

[GitHub Repository](https://github.com/erikthedeveloper/up-and-running-with-angularjs)

### TODO app

Focusing only on the first iteration of the front end AngularJS components, this app will:

* Allow a project to have multiple tasks
* Where Tasks may:
    * Have a title
	* Have a due date
    * Have a complete status
    * Be marked as complete
    * Be deleted
    * *~ Have comments left on them*
* Utilize hard coded data in place of retreiving data from the API



Some pieces that I will leave for future development:

* Drag/Drop functionality
* Allow a user to have multiple projects
* Implement login/authentication


## Kick start the development process

For now, I will continue working out of the up-and-running-with-angularjs repository we created last time (part-2)

As I said, I am going to fast forward a bit. I won't worry too much about the installation of these requirements, but I will try to list them out completely.

* git
* [node.js/npm](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Yeoman](http://yeoman.io/)
* [Yeoman AngularJS Generator](https://github.com/yeoman/generator-angular)

First things first, get the above installed, up, and running.


Now let's get a glimpse of the magic that Yeoman provides us.

```bash
$ yo angular TodoYoAngular
```

![Run Yo AngularJS Generator](/content/images/2014/May/1__yo_angular_TodoYoAngular__sh_.png)

Looking a bit closer at what just happened, we can see Yeoman generated quite a few files for us

```bash
$ tree -L 2 -I node_module*

├── Gruntfile.js
├── app
│   ├── 404.html
│   ├── bower_components
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── robots.txt
│   ├── scripts
│   ├── styles
│   └── views
├── bower.json
├── karma-e2e.conf.js
├── karma.conf.js
├── package.json
└── test
    ├── runner.html
    └── spec

$ # Fire up the Grunt server
$ grunt serve
```

And like magic!...

![](/content/images/2014/May/1__grunt_serve__node__and_127_0_0_1_9000___.png)


### [WIP]

[GitHub Repository](https://github.com/erikthedeveloper/up-and-running-with-angularjs)
