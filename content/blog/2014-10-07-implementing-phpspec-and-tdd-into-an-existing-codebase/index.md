---
title: "Implementing TDD and PHPSpec into an Existing Codebase - Also, My First Shot at a Screencast..."
slug: implementing-phpspec-and-tdd-into-an-existing-codebase
date: "2014-10-07"
tags: ["tdd", "phpspec"]
---

**Disclaimer: This is my first attempt at a screencast.**

This is party me getting to know [ScreenFlow](http://www.telestream.net/screenflow/overview.htm), party me getting to know [PHPSpec](http://phpspec.net/) and having a bit of fun with [PHPStorm](http://www.jetbrains.com/phpstorm/), and partly me getting past the fear of actually putting out a screencast ;)

<iframe src="//player.vimeo.com/video/108170482" width="500" height="313" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/108170482">Getting Started with PHPSpec and TDD in an Existing PHP Codebase</a> from <a href="http://vimeo.com/user25010079">Erik Aybar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

And of course the GitHub repo: https://github.com/erikthedeveloper/a-bit-of-fun-with-vanilla-php



## The Gist of It

**See the [Pull Request Containing The Up to Date Feature/Etc... Here (#1)](https://github.com/erikthedeveloper/a-bit-of-fun-with-vanilla-php/pull/1)**

- Bring composer into our existing PHP codebase
- Install PHPSpec using Composer
- Configure PHPSpec to work with my existing directory structure `phpspec.yml`
- Writing our first, basic test to verify the existing behavior of the validation feature
- Introduce new featured and desired behavior/usage
- Write a test that uses new feature (test first)
- Update the validation class/methods to satisfy the test.
  - *May include high levels of rambling and/or figuring things out as I go ;)*
- Some minor refactoring
- Test~~s all~~ green!

### A Glimpse of the End Result (updated from video)

![](/content/images/2014/Oct/1__erikaybar_Battle_Station____Erik_School_CS4000_my_public_html__zsh__and_ValidatorSpec_php___my_public_html______Erik_School_CS4000_my_public_html_.png)

### And for some code to sum it all up :)

```language-php

<?php
// Old/Current behavior vs. New/Desired behavior

/**
 * This is the old way. Using an ugly regexes. Bad developer!
 */
$rules = [
    'email'    => "/\w+/",
    'password' => "/\w+/"
];

/**
 * This is what we want. An array of readable/sensible validation rules. Better developer!
 */
$rules = [
    'email'    => ['email'],
    'password' => ['password', 'confirmed']
];

/**
 * - - - - - - - - - - - - - - - - - - - -
 * Everything Below Here Remains the Same
 * - - - - - - - - - - - - - - - - - - - -
 */
$data = [
    'email'            => '',
    'password'         => 'foobar',
    'password_confirm' => 'not_foobar'
]
$this->validate($rules, $data)
```

The Tests look a bit like this (actually.. this is the test suite in its entirety ;))

```language-php
<?php

// ValidatorSpec.php

<?php

namespace spec\MyClasses\Validation;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

/**
 * Class ValidatorSpec
 * @package spec\MyClasses\Validation
 * @author  Erik Aybar
 * @mixin \MyClasses\Validation\Validator // Nifty little trick for subject autocompletion :)
 */
class ValidatorSpec extends ObjectBehavior
{

    /**
     * Used to verify old/existing behavior/usage
     * @deprecated skipping test by prepending method name with "old_"
     */
    function old_it_validates_using_the_old_ugly_method()
    {
        $this->validate(
            [
                'email'    => "/\w+/",
                'password' => "/\w+/"
            ],
            [
                'email'    => '',
                'password' => 'foobar'
            ]
        )->shouldHaveErrors();
    }

    function it_validates_each_field_with_a_given_array_of_callables()
    {
        $this->validate(
            [
                'email'    => ['not_empty'],
                'password' => ['not_empty']
            ],
            [
                'email'    => '',
                'password' => 'foobar'
            ]
        )->shouldHaveErrors();
    }

    function it_validates_an_email_address()
    {
        $this->validate(
            ['email' => ['email']],
            ['email' => 'joe@joe.com']
        )->shouldHaveValidData();
    }

    function it_allows_multiple_validation_rules_per_field()
    {
        $this->validate(
            ['email' => ['not_empty', 'email']],
            ['email' => '']
        )->shouldHaveErrors();
        $this->clearValidations();
        $this->validate(
            ['email' => ['not_empty', 'email']],
            ['email' => 'not_an_email here']
        )->shouldHaveErrors();
        $this->clearValidations();
        $this->validate(
            ['email' => ['not_empty', 'email']],
            ['email' => 'joe@joe.com']
        )->shouldHaveValidData();
    }
}

```

And that about sums it up for now. Again, this screencast was totally a test run and I'm hoping to get some higher quality ones together.... sometime?

Let me know what you think! I'm definitely just scratching the surface on TDD and using testing tools like PHPSpec, Behat, PHPUnit, etc... but it is already having a largely positive impact on the way I think and the quality of the code I write.
