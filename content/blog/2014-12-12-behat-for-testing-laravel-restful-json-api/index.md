---
title: "Using Behat for Building and Testing a RESTful JSON API (Laravel)"
slug: behat-for-testing-laravel-restful-json-api
date: "2014-12-12"
tags: ["Laravel", "Testing", "Behat"]
---

## Testing

Testing. This has been a topic I have been chipping away at for some time now. At first, it seems so foreign, has such a steep learning curve, and causes more pain than anything else. However painful the process has been, I have stuck with it and am now beginning to see much of the light that many seasoned developers and testing advocates seem to swear by. I feel like investing this time into learning testing is beginning to pay off immensely in my growing as a developer; this is felt even in projects that aren't using any form of testing. I got a nice kickstart in learning testing (among many other things) with [Code School's Ruby and Rails Courses](https://www.codeschool.com/paths/ruby) and [RSpec](https://www.codeschool.com/courses/testing-with-rspec) along with **many hours** spent with Jeffery Way over at [Laracasts](https://laracasts.com/collections/testing-in-php). It really opened my eyes to the possibility of working in a development environment where code quality really matters and eventually gave my career a very nice boost in the right direction :)

Some of the tools related to testing that I have grown to really like in the land of PHP are:

- [PHPSpec](http://phpspec.net/docs/introduction.html#matchers)
- [Behat](http://docs.behat.org/en/v3.0/)
- [Factory Muffin](https://factory-muffin.thephpleague.com/usage/examples/)

Rather than rambling too much about my opinions and experiences regarding testing, here are some links that I have found very useful during my journey.


## So You Want to Learn Testing and Behat? What to Build... an API of course!

*Following up from [An Earlier Post](http://erikaybar.name/building-and-testing-a-restful-api-using-behat-phpunit-and-laravel-part-1/)*

**In this post, we will be focusing on using Behat in the context of building a RESTful JSON API built with Laravel 4.x.** We will also throw in an assortment of other related testing tools and goodies such as Guzzle for issuing HTTP requests, PHPUnit for making assertion, and Factory Muffin rather than fixtures.

### A Sneak Peak

**Some Output from Running Our "Muffins" Feature Tests/Scenarios**
![](/content/images/2014/12/Fullscreen_12_12_14__7_00_AM.png)

Some items to take note of from above.

- How readable and easy to understand the test output is...
- ... The output is nearly identical to the actual ~~test~~ feature

Following are some snippets from our `muffins.feature`.

```language-gherkin

Background:
  Given there are 7 "Muffin"s
  And the "Muffin" with id 3 has attributes:
  """
  {
  "title": "Chocolate Bliss"
  }
  """
  
# ...

  Scenario: muffins.show Get a listing of muffins (w/ pagination and query string goodness)!
    When I send a GET request to "/muffins?page=2&per_page=5"
    Then the response should contain json:
    """
    {
    "page": 2,
    "per_page": 5,
    "page_results": 2,
    "total_results": 7
    }
    """
    And the response json's "items" key should be of type "array"
    
# ...

  Scenario: muffins.destroy Destroy a muffin!
    When I send a DELETE request to "/muffins/3"
    Then the response should contain json:
    """
    {
    "deleted": true
    }
    """
    When I send a GET request to "/muffins/3"
    Then the response code should be 404
    When I send a DELETE request to "/muffins/3"
    Then the response code should be 404

```

You can see from reading the above scenarios that we are able to make a lot of assumptions. Example:

- Issuing HTTP requests and being able to interact with the response
- Setting the stage for our scenarios with the `Background: ...` statement
- Being able to say **"There are 5 muffins"** and so on...

Using [Gherkin](http://docs.behat.org/en/latest/guides/1.gherkin.html), allows us to write these features and scenarios nearly in plain English and abstract away the actual functionality to ... *some magic place*.

Explanation using above examples...

```language-gherkin
# Let's seed some data!
Given there are 7 "Muffin"s
# Specificy some attributes on a specific model
And the "Muffin" with id 3 has attributes:
"""
{ "title": "Chocolate Bliss" }
"""
```

And to define these two steps from above...

```language-php
// ApiFeatureContext.php

/**
 * @Given /^there are (\d+) "([^"]*)"s$/
 * Example: Given there are 7 "Muffin"s
 */
public function thereAreSomeNumberOfModel($num, $model_name)
{
    FactoryMuffin::seed($num, $model_name);
}

/**
 * @Given /^the "([^"]*)" with id (\d+) has attributes:$/
 * Example: And the "Muffin" with id 3 has attributes: """{"some_key":"some_data", ...}"""
 */
public function theModelWithIdHasAttributes($model_name, $model_id, \Behat\Gherkin\Node\PyStringNode $jsonString)
{
    $attributes = json_decode($this->replacePlaceHolder($jsonString->getRaw()), true);
    $model_name::findOrFail($model_id)->update($attributes);
}
```

And again... even at this level, we have abstracted nearly all of the functionality out into reusable pieces. 

## **Writing in Progress**

I have found if I wait until a post is finished and "ready" to be published ... well, let's just say it's either this or nothing ;). The [repository containing the code referenced in this write up is living here on GitHub](https://github.com/erikthedeveloper/le-testing-api-with-behat-laravel) and I try to keep my commit history and Pull Requests grouped fairly logically. Feel free to check it out, do some code review, or just leave a comment.

Until next time...


## Initial Setup/Config

Until next time...

- [behat.yml](https://github.com/erikthedeveloper/le-testing-api-with-behat-laravel/blob/master/behat.yml)
- [features/bootstrap/ApiFeatureContext.php](https://github.com/erikthedeveloper/le-testing-api-with-behat-laravel/blob/master/features/bootstrap/ApiFeatureContext.php)
- [tests/factories/all.php](https://github.com/erikthedeveloper/le-testing-api-with-behat-laravel/blob/master/tests/factories/all.php)

And detecting the testing environment for HTTP requests within my `bootstrap/start.php`

```language-php
$env = $app->detectEnvironment( function () {
    if (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] == 'behat-api.test')
        return 'testing';
    if (getenv('APP_ENV'))
        return getenv('APP_ENV');
});
```

## Links and Stuff...

#### Links (Tools)
- [Behat](http://docs.behat.org/en/v3.0/)
- [Laravel](http://laravel.com/docs/4.2)
- [Gherkin](http://docs.behat.org/en/latest/guides/1.gherkin.html)
- [Behat's WebApiExtension](https://github.com/Behat/WebApiExtension)
- [Factory Muffin](https://factory-muffin.thephpleague.com/usage/examples/)
- [Guzzle](http://guzzle.readthedocs.org/en/latest/quickstart.html)
- [PHPUnit](https://phpunit.de/manual/current/en/testing-practices.html)

#### Links (Learning)
- [RSpec](https://www.codeschool.com/courses/testing-with-rspec)
- [Laracasts](https://laracasts.com/collections/testing-in-php)
- [AirBnb on Testing](http://nerds.airbnb.com/testing-at-airbnb/)
