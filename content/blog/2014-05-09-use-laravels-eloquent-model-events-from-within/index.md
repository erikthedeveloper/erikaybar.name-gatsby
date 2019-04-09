---
title: "[WIP] How to Use Laravel's ActiveRecord Eloquent Model Events ... from within the Model"
slug: use-laravels-eloquent-model-events-from-within
date: "2014-05-09"
tags: ["Links for Thought", "Laravel", "modern php"]
---

##### *[WIP] (i.e. not complete)*

If you have been developing any type of modern PHP applications over the past several years, chances are you have at least had a glimpse at [Laravel 4+](http://laravel.com). For those who haven't ... In a nutshell it is a web framework that opens up a whole world of awesomeness, best practices, and most-importantly .... *drumroll* **enjoyment and [community](https://laracasts.com/lessons/laravel-community-crash-course) to PHP development**.

Not to say that Laravel is the only way to go or that it is perfect in any way. However, I dare say that any self-respecting PHP developer should at the least take the time to put together a few hello world, if not full-blown, web applications. *Yeah, that wasn't opiniated at all...*

If you end up hating it, great. But I promise you will come away with a new perspective on modern PHP development.

I won't go over how to [install Laravel 4](http://laravel.com/docs/installation#install-laravel), but here is one take on getting you past the basic `laravel new MyApp`  from a more seasoned pro [Fideloper's Application Setup](http://fideloper.com/laravel-4-application-setup-app-library-autoloading)

## Eloquent's Model Based Events

From the [Eloquent Model Event Docs](http://laravel.com/docs/eloquent#model-events)

> Eloquent models fire several events, allowing you to hook into various points in the model's lifecycle using the following methods: creating, created, updating, updated, saving, saved, deleting, deleted, restoring, restored.

and....

>Whenever a new item is saved for the first time, the creating and created events will fire. If an item is not new and the save method is called, the updating / updated events will fire. In both cases, the saving / saved events will fire.

Thank you copy/paste ;)...

Anyhow, what this means for you and I as PHP web application developers is that we have now been granted the power of [Event Driven Programming](https://laracasts.com/lessons/model-events).


## Other (better) Write-Ups on the Matter

I can't pretend to even begin covering what can be accomplished via Laravel's ActiveRecord model events, so I will point you to some more powerful/complete content on the matter.

* [Jason Lewis on Laravel Events](http://jasonlewis.me/article/laravel-events)
* [Philip Brown (Culttt)](http://culttt.com/2014/03/10/using-events-laravel-4/)
* [Using Model Observers](http://matthewhailwood.co.nz/laravel-model-validation-using-observers/)
* [Laracasts q?=event](https://laracasts.com/search?q=event)
* [The Docs](http://laravel.com/docs/eloquent#model-events)


### The Scenario....

What I will be covering is how to cleanly/easily utilize these events from within your `Model` class.

> And ... it's time for work ;) [WIP]

For example, you may have a **User** model ...


### The Solution....

Is this....

### The Code...

Is here... [GitHub Repo](https://github.com/erikthedeveloper/tutsource-laravel-eloquent-model-events)

```
# And some snippets....
```

### The End...

Yep...
