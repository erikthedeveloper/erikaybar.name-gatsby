---
title: "Smarter Local Developement: Setting up Vagrant on Mac OS X (The Easy Way)"
slug: vagrant-on-mac-os-x-the-easy-way
date: "2014-03-04"
tags: ["Vagrant"]
---

> Hi. Meet Vagrant: Your New Best Friend

You may be among the elite few who have made the leap. I, myself, was nearly one of them a few months back. I tweaked around with installing [Vagrant](www.vagrantup.com) on my trusty MacBook Pro dev machine. Heck, I even got a few Vagrant environments up and running locallly.

Unfortunately it stopped there. I kept all of my *real development* confined to the wonderful world of [MAMP](http://www.mamp.info/en/index.html).

Today that stops. Today, I am going to "launch" ... hah, an open source project that is going to fully utilize Vagrant development and stick to it.

Enough of the pre-action rant. Let's boil this down to the easiest possible steps to get up and running.

## Step One: System Requirements

* Mac OS X
* iTerm w/ [zsh Oh-My-Zsh](https://github.com/robbyrussell/oh-my-zsh) (totally preference ;) )
* [Install Virtual Box](https://www.virtualbox.org/wiki/Downloads)
* [Install Vagrant](http://www.vagrantup.com/)

Now, my apologies if I am wrong for assuming... but I will just go ahead and assume that we are all adults here and you can manage installing the above yourself ;)

## Step Two: Install the Vagrant Instance

**Warning** Giant, lifechanging shortcut here. I will cover the nuts and bolts behind this in a later lesson.

Thanks to Jeffery Way over at [Laracasts](https://laracasts.com/lessons/get-off-mamp-now), we have someone who really knows what they're talking about to provide us with these types of gems.

Here is a little alias he has created (and it has worked wonders for me).

    alias lamp="curl -L -o 'install.sh' http://bit.ly/1hBfq57 && curl -L -o 'Vagrantfile' http://bit.ly/1mE3Qt9 && vagrant up"

Go ahead and install that alias (or just run the commands). Get a cup of coffee or two and you should be good to go.

## Done!

Wait... but there must be more, right?! 

Go ahead and hit: http://192.168.33.21/ You should be golden.

> Yes. It is that simple.

I did title this **The Easy Way** didn't I?!

Let's follow up next time with some fancy things such as configuring this to work with a better url such as http://mygreatproject.local.

### Questions?

I would love to hear any comments/questions or resources you would like to share. Let me know in the comments below or at [@ErikOnTheWeb](http://twitter.com/erikontheweb)
