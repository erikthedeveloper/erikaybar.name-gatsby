---
title: "Setting Up Mac OS X Mavericks for Web Development: Getting Started"
slug: preparing-os-x-mavericks-for-web-development
date: "2014-08-19"
tags: ["workflow", "OS X"]
---

Over the last week or two, I have had the opportunity of setting up several OS X machines for development. It had been a while since I sat down to set up a fresh Mac OS X account, and I hadn't quite realized how far I had come along in the last year or so and how many little adjustments and programs had added up in that time.

> As a developer, you spend a significant chunk of your life immersed in your development machine. It should be as refined and as pleasant as possible. Spending a few hours now to save tens or hundreds of hours later is just a no brainer. Not to mention the fun you'll have along the way ;)

> \- Me

I set out to semi-document the process from start-to-finish of setting up a fresh Mac OS X Mavericks account as a primary web development/programming machine - leaning towards modern PHP development, but also enabling a slew of other web development related goodies.

A bit of an early preview:

![](/content/images/2014/Aug/Screen_Shot_2014_08_19_at_7_04_02_AM.png)

Some of the major highlights will be:

* General clean up and refinement of OS X defaults and settings
* Installing and setting up a number of Apps to aid with speeding up workflow and general happiness
* Getting development specific applications and utilities installed and configured
	* IDE's
    * Command line configuration and utilities
    * Development environment(s)
    * etc...
* and of course, whatever else jumps out at me during the process...
    
    
## Configure the OS

Some of these settings may be opinionated, but I've found that Mac OS X Mavericks ships with a few quirky defaults. I'm sure there are plenty of things I've missed on this list, but I feel like it is a decent starting point.

**Trackpad**

* "Fix" the default scrolling... setting since it is backwards ;) 
    * `> Scroll & Zoom > Scroll Direction` -> Uncheck
* `> Point & Click > Tap to Click` -> Check

This next one is my #1 gripe with the OS X team. Enable "Double tap and hold to drag" ... This is buried pretty deep so here we go ;)

* `Accessibility > Mouse & Trackpad > Trackpad Options > Enable Dragging without Drag Lock` -> Check this box
* Show date, day, time, and name/user on menu bar

![](/content/images/2014/Aug/TRACKPAD_OPTIONS_and_sheet_C15A95B4_871C_4C3B_912D_AB3DACDB1F16.png)


**Mission Control**

* uncheck "Show Dashboard as a Space"
* uncheck "Rearrange Spaces..."
* disable both "Mission Control" and "Application Windows" keyboard shortcuts ... they tend to clash with some crucial IDE shortcuts...

![](/content/images/2014/Aug/Mission_Control_and_Ghost_Admin.png)

* Hot Corners (bottom left)
    * Top Left: Desktop "Show Desktop"
    * Top Right: Application Windows "Show me all windows open for [ACTIVE APPLICATION]"
    * Bottom Left: Mission Control "Show all Spaces/etc..."
    * Bottom Right: Mission Control "Show all Spaces/etc..."

![](/content/images/2014/Aug/Mission_Control.png)

...And of course, don't forget to change the desktop to some awesome picture that makes you feel great inside.

##### General Workflow/Spaces

Spaces, Desktops, or whatever the kids are calling them these days have become an essential part of my workflow. I call them "Spaces".

My workflow is generally using 3 Spaces.

* 1.) Primary/General Use - Usually Chrome w/ some unhealthy number of tabs open
* 2.) IDE - SublimeText or PHPStorm depending on what I had for breakfast
* 3.) More specific/occassional use such as Sequel Pro, or some other thing that I need open but am not really using much

![](/content/images/2014/Aug/Screen_Shot_2014_08_19_at_7_04_02_AM.png)

To switch between them I either stick with the default `^ + left` or `^ + right` or ... by hitting the bottom left/right Hot Corners to zoom out to Mission Control... or ... by switching Applications...

To switch applications and see what you have running: `⌘ + tab`

I am pretty generous when it comes to creating/deleting new Spaces as needed and generally try dedicate each Space to a specific task/role. 

I find once I get into the 5-6 range, my productivity usually plummets and I have to close everything and start fresh :)

##### The Dock

Another thing I consistently find myself doing on a fresh OS X install is gutting the Dock. There is just something about having all of those giant, default App Icons glaring at me, filling the entirety of the bottom of my screen. 

Drag. Drop. Poof. Until we are down to basically nothing

Also

* Add "Applications" directory to dock
* Change all directories in dock to display as folder and view content as list
* Reduce dock size
* Enable magnification
* Remember `⌘ + ⌥ + d` to hide/show the dock
* Add Dock spacers

To add the spacers to your OS X dock ...

```language-bash
# Do this twice
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'
# and then..
killall Dock
```

... we will revisit this a bit later. Until then you will be left wondering "why do I have this odd gaping hole in my Dock?"...

Here is a bit of a preview:

![](/content/images/2014/Aug/Screenshot_8_19_14__6_51_AM.png)


##### Security

Just be smart.

Enable require password on sleep, screensaver, etc...

Remember Alfred can easily "lock" your screen by simply typing `lock` ... more on Alfred in a bit ;)


## Install Goodies - General

#### [Chrome](https://www.google.com/intl/en/chrome/browser/)

If you are not currently using Chrome as your primary web browser... actually, we won't even go there ;) 

I will say that as a developer I highly recommend it and no matter how many times I try, I simply can not get myself to use Firefox for development. It just does not work for me :)

... and yes... as a web developer you probably "should" install all of those other web browsers. You know for that "browser compatibility" thing I keep hearing about...

* Chrome Extensions
	* ...
	* ...

##### [Alfred - `⌥ + Space` -> Do Anything](http://www.alfredapp.com/)

![](/content/images/2014/Aug/Alfred_App___Productivity_App_for_Mac_OS_X.png)

Alfred is one of those apps that I wish I had discovered years ago. Ever since converting over to Mac OS X years ago as I began my journey into web development, I have grown to love the `⌘ + Space` -> "search for and launch anything" that Mac OS X's Spotlight provides. 

Think of Alfred of being just like this... but on steroids. I have yet to unlock the power pack, but the free version has kept me plenty happy... I do know some developers who have gone with the upgrade and swear by it. ... one of these days :)

##### [Skitch - Quick Screenshots (markup, share, etc...)](http://evernote.com/skitch/)

![](/content/images/2014/Aug/Skitch___Evernote.png)

- `⌘ + ⇧ + 5` - Selection
- `⌘ + ⇧ + ⌥ + 5` - Timed Selection
- `⌘ + ⇧ + 6` - Full Screen

WIP ...

##### [Mou - Markdown Editor](http://mouapp.com/)

![](/content/images/2014/Aug/Mou___Markdown_editor_for_web_developers__on_Mac_OS_X.png)

WIP ...

##### And a slew of others...

* [Skype](http://www.skype.com/en/)
* [Spotify](https://www.spotify.com/us/download/mac/) ... or whatever music player you prefer. Just make sure you have something ;)
* Dropbox
* Google Drive	
* ...



## An Evolving Process


I always love hearing about and learning from others' setups and/or workflows. Feel like I missed something crucial? Have a step or two to add? Let me know in the comments below or find me at [@erikthedev\_](https://twitter.com/erikthedev_) and I will consider adding it here.

Hopefully this first step was a bit helpful... the next step/entry we will be diving into setting up the actual development essentials:

* IDE's (Sublime Text 3 and PHPStorm)
* Terminal (Iterm2 + Oh My Zsh + rupa/z)
* Installing node.js, Composer, etc...
* and of course... whatever else finds its way into my ramblings ;)

*Random Side Note:*

*For those of you (and myself) wanting to use Mac OS X Keyboard characters... Copy/Paste at will!*

# ⌘ ⌥ ^ ⏎ ⇧
