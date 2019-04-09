---
title: "OctoberCMS - The First Encounter"
slug: octobercms-my-first-encounter
date: "2014-07-06"
tags: ["Laravel", "OctoberCMS", "Vagrant"]
---

I have had my eye on [OctoberCMS](http://octobercms.com/) development for some time now and it was recently released to the public.

![](/content/images/2014/Jul/October___The_PHP_platform_that_gets_back_to_basics_.png)

Time to give it a shot. 

> Here we go...

# Installation

While the documentation (which at a glance looks amazingly comprehensive and user friendly) recommends using the [Easy/Wizard Installer](http://octobercms.com/docs/help/installation) let's be honest ... as a developer I had no other choice but to stick with the [CLI installation instructions](http://octobercms.com/docs/help/console#console-install)

> ... Reminiscing of my first encounters with [Installing Laravel with Composer](http://laravel.com/docs/installation#install-composer)

![Installing OctoberCMS with Composer](/content/images/2014/Jul/1__composer_create_project_october_october_october_dev_master__php_.png)

Don't forget to:

- Generate a unique key for `config.app.key` I'm guessing/hoping the wizard install covers this for you. Easy enough via `php artisan key:generate`
![](/content/images/2014/Jul/1__eaybar_Eriks_MBA____Projects_ErikAybarDigitalOcean_myoctober_dev_october__zsh__and_app_php_b___october.png)
- Make the few changes required to the config files (app, cms, database, etc...)
- *Note to Laravel developers* there is no `ProjectRoot/public` it looks as though the OctoberCMS team decided to promote those contents directly to `ProjectRoot` so make sure to set your document root correctly to `ProjectRoot`
- Thanks to @taylorotwell's brilliant [Vagrant/Homestead solution](http://laravel.com/docs/homestead) development environment, I simply had to:
    - add 4 lines to my `Homestead.yaml`
    - update my `/etc/hosts` file
    - `vagrant reload --provision`
    - browse to [http://myoctober.dev/](http://myoctober.dev/)  and..
    
![](/content/images/2014/Jul/1__eaybar_Eriks_MBA____Projects_Homestead__zsh__and_hosts_b___Homestead.png)



### ... We're in!

![](/content/images/2014/Jul/October_CMS___Demonstration.png)

... I will admint, that easier than expected on the first run. All in all (including the time it took me to put this together), I am looking at ~20 minutes. I'm assuming the wizard installer is much quicker, and had I just ran throught the process (excluding screenshots/rambling) it would have been more like a 5 - 10 minute process from discovery to browsing to "The Demo".

I'm excited to get some time in with [OctoberCMS](http://octobercms.com) both as a developer and a potential user.

As a developer, this article on [Raising the Bar of Quality](http://octobercms.com/blog/post/raising-bar-quality) got me more than excited to poke around the source code. 

> The quality of code was immediately clear and concise from even the very early Alpha stages. I was so blown away with the quality of code and forethought by Aleksey and Sam that I was literally inspired and compelled to start coding. - [ChadStrat from RadiantWeb](http://goradiantweb.com/blog)

As someone who has been spending the majority of my days with Laravel 4+ since December, I can say they definitely have some enjoyable source code and look to be 100% open to contributions.

![](/content/images/2014/Jul/Issues_B7_octobercms_october.png)


**I would be interested to hear from others' take on OctoberCMS*** who also have experience developing Laravel-based applications. 

I hope to get some time in with it... and *deep breath...* migrate this very website over to using it. We'll see how it goes...
