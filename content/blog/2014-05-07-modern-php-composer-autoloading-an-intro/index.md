---
title: "PHP Autoloading with Composer (an intro)"
slug: modern-php-composer-autoloading-an-intro
date: "2014-05-07"
tags: ["php", "modern php", "composer"]
---

This is going to be a simplified, high-level look at:

* ~~Using [Composer](https://getcomposer.org/) for dependency management in PHP projects~~
* Using [Composer](https://getcomposer.org/)'s beautiful autoload directive
* ~~Possibly a glimpse of getting started with [PHPUnit](http://phpunit.de/) for unit testing our application~~

We will be building a simple ~~Calculator app~~ Useless application...

The examples illustrated here are admittely useless, but imagine building an application with hundreds of classes and a complex directory structure. Would you really want to maintain a disgusting amount of `require 'the/path/to/my/Class.php';` statments?

I thought not. Hence Composer.

**The source:** [GitHub Repo](https://github.com/erikthedeveloper/tutsource-php-autoloading-with-composer)

## Setup

#### Install Composer
First, we need to install composer. This is an extremely simple process outlined in [The Composer Docs](https://getcomposer.org/doc/00-intro.md#globally). I recommend following the global installation instructions so you can use the command in any project/directory

```language-bash
$ curl -sS https://getcomposer.org/installer | php
$ mv composer.phar /usr/local/bin/composer
$ # Yes... that is all :)
```

#### Setup our development directory

```language-bash
mkdir OurDirectory; cd OurDirectory
git init
touch README.md
git add .
git commit -m "Initial Commit"
git checkout -b develop
```




#### The First Steps with Composer

For now, we are going to stick strictly with Composer's autoloading feature. If you've been developing modern PHP applications, chances are you've either been using Composer's autoloading feature or you've been resorting to methods of which I will refrain from comment.

We could do this all manually... in fact, since it is so simple, we will. Just know that a simple `composer init` would generate such a file.

In our project's root, we will create a `composer.json` file that looks something like this...

**composer.json**
```language-javascript
{
    "autoload": {

    }
}
```

Now run `composer install`

and!... well, not a whole lot happened. Baby steps...

![Composer generates some files...](/content/images/2014/May/composer_json_b___composer_autoloading_and_phpunit_an_intro.png)


Now fast forward a bit...

![](/content/images/2014/May/LoadMe_php_b___composer_autoloading_and_phpunit_an_intro.png)

* Create src/classmap_dir
 * Create a class to test our autloading `LoadMe.php`
* Add 'classmap' directive to our composer's autoload directive

[Composer's Autoloading Reference](https://getcomposer.org/doc/04-schema.md#autoload)


#### Now Fire it Up!

For simplicity's sake I will be using PHP's built in web server.

>PHP's built in web server?!

In case you didn't know (and I wish I would have known earlier). A nifty feature baked in since ... oh, 5.4-ish. You can use
    
    php -S localhost:8080

This will set the document root to the current directory.

In my case I am using
    
    php -S localhost:8080 -t src
    # -t sets the document root to ... in this case 'src'
    
I've put together a simple `index.php` for us to use as a playground environment. I've instantiated our new `LoadMe` class, fired it up and! ...

>Fatal error: Class 'LoadMe' not found in...

Ok, so we skipped a step. That magic "Autoloading" that everyone keeps talking about... we need to somehow implement that. Now this isn't the best way (in fact it may be the worst), but let's start at the basics.

We will go ahead and `require '../vendor/autoload.php';` in our `index.php` and!...

>Fatal error: Class 'LoadMe' not found in...

Ok, so we have one more step *(I promise, we are doing this the hardway to begin with...)*

Go ahead and type `composer dump-autoload` into your fancy terminal and!...

> Hello Sir

**Houston, we have autoloading.**

So at this point we are utlizing the `classmap` directive in our autoloading and now we can simply

* Add a class (i.e. `MyClass.php`) to our `src/classmap_dir`
* Run `composer dump-autoload`
* Instantiate our class as needed throughout our ~~awesome application~~ *index.php file*

### And we end up with...

The beautiful end result
![](/content/images/2014/May/Composer_Playground.png)

A snapshot of our file structure and what we have set up so far
![](/content/images/2014/May/Hangouts_and_index_php_b___composer_autoloading_and_phpunit_an_intro.png)

**The source:** [GitHub Repo](https://github.com/erikthedeveloper/tutsource-php-autoloading-with-composer)

**Note to reader:** Using `classmap` is not ideal. Just skip straight to using `PSR-4` in place of `classmap`. I will do my best to continue this series ... I may not. I'm sure you can figure it out ;).

If you are working with PHP **at all** it is definitely worth your time. Great resource [Google "php autoloading with composer"](https://www.google.com/search?q=php+autoloading+with+composer)

[Read More about Autoloading and PSR autloading here](https://getcomposer.org/doc/04-schema.md#autoload)

