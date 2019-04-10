---
title: "Up And Running With AngularJS - Part 1"
slug: up-and-running-with-angularjs-part-1
date: "2014-05-14"
tags: ["AngularJS"]
---

[WIP]

In this post ... [AngularJS](https://angularjs.org/)

[Project GitHub Repo](https://github.com/erikthedeveloper/up-and-running-with-angularjs)

![AngularJS](/content/images/2014/May/AngularJS_b___Superheroic_JavaScript_MVW_Framework.png)

*From the Homepage*

> HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

## Quick Start - Step 1

The **bare essentials** for those who have yet to lay eyes on AngularJS code...

* Create an HTML file (part-one/index.html)
* Grab [Google's CDN link for AngularJS](https://developers.google.com/speed/libraries/devguide#angularjs)
* Throw in some [Bootstrap 3 via CDN](http://www.bootstrapcdn.com/)
* Voila

Here is the code in its entirety...

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Up and Running with AngularJS - Part One</title>
    <!-- Bootstrap 3 CSS CDN -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
</head>

<!-- Add ng-app to activate AngularJS -->
<body ng-app>

    <div class="container">
        <h1>Up and Running with AngularJS <small>Part One</small></h1>

        <!-- Declare the controller for this div. Scope hoopla. More on that later... -->
        <div ng-controller="OurController">
            <p>
                <!-- Lets play with some data binding! -->
                Here is foo: {{foo}}
            </p>
        </div>

    </div>

    <!-- AngularJS CDN     -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <!-- Some Basic AngularJS -->
    <script type="text/javascript">
        function OurController($scope) {
            // Bind foo to our scope for "OurController"
            $scope.foo = "Bar";
        }
    </script>
</body>
</html>
```

And we have **data binding**. Albeit overly simple and virtually useless.

![AngularJS Data Binding Simple Example](/content/images/2014/May/Up_and_Running_with_AngularJS___Part_One.png)

What are those `{{ }}` crazy looking curly braces you ask?

More on that to come...

[Project GitHub Repo](https://github.com/erikthedeveloper/up-and-running-with-angularjs)


*Special Note: Thank you to Dave Balmer for the Quick [Guide on setting up Syntax Highlighting with prism.js set up on the default Ghost Blog Theme](http://blog.davebalmer.com/adding-syntax-highlighting-to-ghost/)*

