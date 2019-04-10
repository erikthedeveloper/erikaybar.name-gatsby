---
title: "Setting Up Mac OS X Mavericks for Web Development: Development Essentials"
slug: setting-up-mac-os-x-web-development-machine-the-essentials
date: "2014-08-26"
tags: ["workflow", "OS X"]
---

##### [Iterm2 - Replacement/Improvement for Mac OS X Terminal](http://iterm2.com/)

* Global Keyboard Shortcut
	* Right click in dock. `Options > Assign to All Desktops`
	* Set global keyboard shortcut in Iterm2 settings (I use " ^ + ` " CNTRL + Backtick )
* Font -> Ubuntu Mono -> 18 pt -> Increase both horizontal and vertical spacing
	* ... yeah. Just wait till we talk about my IDE font size/spacing ;)

**A bit of Terminal Config...**

* Set global keyboard shortcut (I prefer "CNTRL + `")
* Assign to All Desktops
* 18 pt. [Ubuntu Font](http://font.ubuntu.com/) w/ extra horizontal/vertical spacing
* Opacity/Blur for background

![](/content/images/2014/Aug/Preferences_and_1__bash_and_Ghost_Admin_and_Setting_Up_Mac_OS_X_Mavericks_for_Web_Development__Getting_Started.png)

This global shortcut + all desktops settings has been a huge timesaver/productivity boost for me.

**Oh My ZSH**

Something I do on all machines related to development. Makes my life a lot easier. Simply head on over to https://github.com/robbyrussell/oh-my-zsh and follow the instructions. Actually... here they are. So simple ;)

One liner:

`curl -L http://install.ohmyz.sh | sh`

#### Ooop! We forgot the command line developer tools

![](/content/images/2014/Aug/1__bash_and_robbyrussell_oh_my_zsh_B7_GitHub.png)

Yep... as soon as you try to pull any type of command line wizardy you are sure to get the popup warning "Command Line Tools Required" ... 

Click install. Wait. Proceed with your life.

This installs

* git
* ... WIP


And..... here we are

![](/content/images/2014/Aug/1__erikaybar_Battle_Station_____zsh_.png)

### IDE(s)

#### Sublime Text 3

**Customizing Sublime Text's look and feel**

https://github.com/erikthedeveloper/my-developer-goodies-stash

![](/content/images/2014/Aug/Fullscreen_8_26_14__8_25_AM.png)

WIP ...

#### PHPStorm (EAP 8)

Download the PHPStorm EAP 8 here: http://confluence.jetbrains.com/display/PhpStorm/PhpStorm+Early+Access+Program

**Gutting PHPStorm, hiding 90% of the features, and making it look and feel better**

https://laracasts.com/series/how-to-be-awesome-in-phpstorm

![](/content/images/2014/Aug/Fullscreen_8_26_14__8_27_AM.png)

WIP ...

#### node.js

**Installing node.js with nvm from start to finish in 3 steps**

```bash
# 1.) Install instructions per the nvm github install instructions... One liner!
➜  ~  curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  3442  100  3442    0     0   3238      0  0:00:01  0:00:01 --:--:--  3241
=> Downloading nvm from git to '/Users/erikaybar/.nvm'
=> Cloning into '/Users/erikaybar/.nvm'...
# ...
=> Appending source string to /Users/erikaybar/.zshrc
# 2.) Now reload your .zshrc or .bashrc ... or just quit terminal and reload
➜  ~  . ~/.zshrc
➜  ~  which node
node not found
# 3.) Install your desired version of node.js
➜  ~  nvm install 0.10
######################################################################## 100.0%
Now using node v0.10.30
➜  ~  which node
/Users/erikaybar/.nvm/v0.10.30/bin/node
```

```bash
nvm alias default 0.10
```

* [nvm GitHub](https://github.com/creationix/nvm)
* https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps
* http://nodejs.org/

#### [Vagrant](http://www.vagrantup.com/downloads.html), [Virtual Box](https://www.virtualbox.org/wiki/Downloads), and [Homestead](http://laravel.com/docs/homestead) - Escaping MAMP ;)

* https://www.virtualbox.org/wiki/Downloads



* http://www.vagrantup.com/downloads.html
	* [Browse Available Vagrant Boxes](https://vagrantcloud.com/search?order=desc&page=1&q=ubuntu&sort=favorites&utf8=%E2%9C%93)
    
![](/content/images/2014/Aug/Vagrant.png)

* [laravel/homestead](http://laravel.com/docs/homestead#installation-and-setup) (your new favorite Vagrant box)

> Laravel Homestead is an official, pre-packaged Vagrant "box" that provides you a wonderful development environment without requiring you to install PHP, a web server, and any other server software on your local machine. 

>No more worrying about messing up your operating system! Vagrant boxes are completely disposable. If something goes wrong, you can destroy and re-create the box in minutes!

Homestead runs on any Windows, Mac, and Linux, and includes the Nginx web server, PHP 5.5, MySQL, Postgres, Redis, Memcached and all of the other goodies you need to develop amazing Laravel applications.


Virtual Box and Vagrant are simple Mac OS X installs...

To install the homestead Vagrant box: `vagrant box add laravel/homestead` (this will take a bit to download...) All the Homestead box is is a pre configured fully ready to go development box that is geared towards PHP development. It includes a handful of super useful things such as:

* Ubuntu 14.04
* PHP 5.5
* Nginx
* MySQL
* Postgres
* Node (With Bower, Grunt, and Gulp)
* Redis
* Memcached
* Beanstalkd
* Laravel Envoy
* Fabric + HipChat Extension

* [Vaprobash makes setting up new Vagrant boxes easy](http://fideloper.github.io/Vaprobash/)

#### [Composer](https://getcomposer.org/doc/00-intro.md#globally)



https://getcomposer.org/doc/00-intro.md#globally

```bash
curl -sS https://getcomposer.org/installer | php
# For global installation
mv composer.phar /usr/local/bin/composer
```

	

#### So many other things...

Until I feel ready to take this on... a bullet list will have to suffice. Running out of steam here ;)

* ...
* ...
* ...

**Back to the terminal...**

`subl` [Set up Sublime Text 3 for command line usage](https://www.sublimetext.com/docs/3/osx_command_line.html) 

`brew` [Homebrew - Brew.sh](http://brew.sh/)

```bash
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

`tree`

## Setup for Development

**The `Projects` Directory**

`mkdir ~/Projects`

Now keep your #$%@ organized ;)

* ...
* ...
* ...


## ... WIP ...


I always love hearing/learning from others' setups and/or workflows. Let me know in the comments below or find me at [@erikthedev\_](https://twitter.com/erikthedev_)


--- 

For those of you (and myself) wanting to use Mac OS X Keyboard characters...

# ⌘ ⌥ ^ ⏎ ⇧
