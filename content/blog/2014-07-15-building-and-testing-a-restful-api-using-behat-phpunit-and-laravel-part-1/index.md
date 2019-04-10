---
title: "Building and Testing a RESTful API using Behat, PHPUnit, and Laravel - Part 1"
slug: building-and-testing-a-restful-api-using-behat-phpunit-and-laravel-part-1
date: "2014-07-15"
tags: ["Laravel", "RESTful API", "Testing", "Behat"]
---

**Note to reader: head on over to my follow up post [Using Behat for Building and Testing a RESTful JSON API (Laravel)](http://erikaybar.name/behat-for-testing-laravel-restful-json-api/)**

I wanted to share my experience(s) in setting up Behat to test an API I'm building using Laravel. You'll have to excuse the lack of english. Code will have to suffice for now ;)

This is meant to be an absolute minimal example to get you up and running hitting your Laravel API using GuzzlePHP with Behat and making assertions with PHPUnit. This is *not meant to be* a comprehensive "this is the right way to test" example. Enjoy.

The project that this is a part of can be found here: https://github.com/erikthedeveloper/todo-laravel-angularjs-homestead

A work in progress that includes a configured Vagrant/Homestead development environment and separate directories/sites for the JSON API we are building with Laravel and the front end web app built on AngularJS.

> Our end result? Test output from running `behat`.

![](/content/images/2014/Jul/1__eaybar_Eriks_MBA____Projects_GitHub_Repos_Misc_erikthedeveloper_todo_laravel_angularjs_homestead_TheApp_LaravelApi__zsh_.png)

## Super Brief Code Examples

#### composer.json

Install the required dependencies. In addition to Behat the composer packages required for the testing are PHPUnit for the assertions, and guzzlehttp for consuming our API.

Note that GuzzleHttp is part of the `require` rather than `require-dev`. We do have some plans to use it to consume 3rd party APIs.

```javascript
/*
...
*/

"require": {
		"laravel/framework": "4.2.*",
        
        /* To hit our API (and eventually others) */
        "guzzlehttp/guzzle": "~4.0"
	},
    "require-dev": {
        "barryvdh/laravel-ide-helper": "1.*",
        "way/generators": "2.*",
        "doctrine/dbal": "~2.3",
        "phpspec/phpspec": "~2.0",
        
        /* Behat + PHPUnit */
        "behat/behat": "2.*",
        "phpunit/phpunit": "~3.0",
        
        "benconstable/phpspec-laravel": "~1.0"
    },
   
/*
...
*/
```

#### basic api routes.feature

I began by writing out the feature. http://docs.behat.org/guides/1.gherkin.html

```php
Feature: Basic API Routes
    In order to interact with my application from the front end
    As a front end developer with no knowledge of API wizardry
    I need to have an awesomely clear API to work with

    Scenario: GET "/"
        When I send a GET request to "/"
        Then the response code should be 200
        And the JSON response should have a "message" containing "Hello World"
```


#### FeatureContext.php
```php
<?php

use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;

use GuzzleHttp\Client;

/**
 * Available auto-magically after composer install w/ phpunit/phpunit
 */
require_once 'PHPUnit/Autoload.php';
require_once 'PHPUnit/Framework/Assert/Functions.php';

/**
 * Features context.
 */
class FeatureContext extends BehatContext
{

    protected $client;

    protected $response;

    protected $base_url = 'http://api.my-todo-app.dev';

    /**
     * Initializes context.
     * Every scenario gets its own context object.
     *
     * @param array $parameters context parameters (set them up through behat.yml)
     */
    public function __construct(array $parameters)
    {
        $client_params = [
            'base_url' => $this->base_url
        ];
        $this->client = new Client($client_params);
    }

    /**
     * @When /^I send a ([A-Z]+) request to "([^"]*)"$/
     */
    public function iSendARequestTo($method, $uri)
    {
        $request        = $this->client->createRequest($method, $uri);
        $this->response = $this->client->send($request);
    }

    /**
     * @Then /^the response code should be (\d+)$/
     */
    public function theResponseCodeShouldBe($response_code)
    {
        assertEquals($response_code, $this->response->getStatusCode());
    }

    /**
     * @Given /^the JSON response should have a "([^"]*)" containing "([^"]*)"$/
     */
    public function theJsonResponseShouldHaveAContaining($var_name, $var_contain_val)
    {
        $json_data = $this->response->json();
        assertArrayHasKey($var_name, $json_data);
        assertContains($var_contain_val, $json_data[$var_name]);
    }
}

```

#### routes.php
```php
<?php

Route::get('/', function()
{
    $data = [
        "message" => "Hello World welcome"
    ];
	return Response::json($data);
});
```


Still a WIP, but this should get the point across for now. I hope this helps someone get up and running as I was unable to come across any brief, clear examples using Behat for testing a RESTful API, PHPUnit for assertions with Behat, and Laravel as an API.

... will continue writing when I get the chance. Until now, this project is under active development at: https://github.com/erikthedeveloper/todo-laravel-angularjs-homestead


**Note to reader: head on over to my follow up post [Using Behat for Building and Testing a RESTful JSON API (Laravel)](http://erikaybar.name/behat-for-testing-laravel-restful-json-api/)**
