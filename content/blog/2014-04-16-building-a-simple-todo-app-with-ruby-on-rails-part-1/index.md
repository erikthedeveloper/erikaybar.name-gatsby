---
title: "Building a simple TODO app with Ruby on Rails - part 1"
slug: building-a-simple-todo-app-with-ruby-on-rails-part-1
date: "2014-04-16"
tags: ["MVC", "Open Source (github)"]
---

Recently, I took a dive into the world of Ruby on Rails. Overall it was an awesome experience, I've come away from it with a ton of new concepts, and it has had a positive impact on my php development (which I use at my job).

A super quick overview of this simple TODO app I threw together with Ruby on Rails:

Visit the: [Github Repo](https://github.com/erikthedeveloper/rails-todo-app-simple)

* Multi-Level ORM relationships between
 * Users
 * Projects
 * Tasklists
 * Tasks
 * Tags *Many-To-Many Tasks<->Tags*
* Ajax based CRUD operations all from the homepage dashboard
 * *With the exception of Tags.*
* A huge list of **TODO** items I have that I would love to implement once I free some time up.

Right now, this is built around using Rail's `respond to ... format.js` approach [More info on that...](http://guides.rubyonrails.org/working_with_javascript_in_rails.html)

The next step would be to convert this to an AngularJS front end which consumes a RESTful JSON API backend. Until then....

> Screenshot of the Homepage/Dashboard

![](/content/images/2014/Apr/Ruby_On_Rails_ToDo_Simple.png)

 



## From the [Github Repo](https://github.com/erikthedeveloper/rails-todo-app-simple)

#### Rails TODO App (simple)

A simple TODO app *built* **in the works** to illustrate the beauty of learning Ruby on Rails.

This will ultimately serve as a RESTful json API to be consumed by its sister project, an AngularJS SPA TODO app.

In the meantime in will take many forms.

There are a variety of relationships between users, projects, tasklists, tasks, and tags.

Oversimplified relationships: *user->projects->tasklists->tasks<->tags*

For an idea of the overall structure checkout **db/schema.rb** and the **app/models** directory

##### Features Implemented

* Basic models and ORM relationships set up
* 1st revision Ajax (using Rail's format.js method(s)) CRUD for Users, Projects, Tasklists, and Tasks (from '/' dashboard)

##### TODO

* Refine ORM relationships
* Model validation/etc...
* 1st revision json api
* Link up AngularJS TODO app

###### Installation

For now... steer clear ;). But if you must

    git clone https://github.com/erikthedeveloper/rails-todo-app-simple.git
    cd rails-todo-app-simple # project directory
    rake db:setup
    rails server
    # Head on over to http://localhost:3000
   
Visit the: [Github Repo](https://github.com/erikthedeveloper/rails-todo-app-simple)
