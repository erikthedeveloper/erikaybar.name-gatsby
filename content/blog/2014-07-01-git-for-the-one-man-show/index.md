---
title: "Git, GitHub, and Pull Requests for the One Man Development Team"
slug: git-for-the-one-man-show
date: "2014-07-01"
tags: ["git", "workflow"]
---

I've been getting much more time in with Git, [GitHub](https://github.com/), and [BitBucket](https://bitbucket.org/) lately, and it has definitely given a huge boost to my development productivity.

Thinking back, I remember when Git seemed to me like some archaic voodoo that only programmers could learn to wield after years of rigorous training. Now, as I use Git on a daily basis for both personal and professional projects, I'm starting to truly appreciate the power that it offers and the benefits it can provide to a team of developers (yes... even if that "team" is really just one developer).

Every few weeks, I'll look back and comb through my git log. This is always one of those good news/bad news scenarios. The bad news being, my previous code/history could really use some work (*bad past me!*). The good news being that my code/history today looks worlds better than that of the past. *... and several weeks from now, I will surely look back and think...*

Some of the more useful information I've soaked up over the past year or so...

**Must Read Git Workflow Articles**

- [A Successful Git Model](http://nvie.com/posts/a-successful-git-branching-model/) is really what got me started on the git path. If you are just starting out or trying to get a better grasp on how to use git as a beginner, this is a great starting point.
- [sandofsky's Understanding Git Workflow](https://sandofsky.com/blog/git-workflow.html) is a bit more advanced, but has probably had the largest influence on how I currently think about public vs. private branches/history

> The no-ff band-aid, broken bisect, and blame mysteries are all symptoms that you’re using a screwdriver as a hammer. - @sandofsky

**More Awesome Git Resources**

- I think of [git-scm](http://git-scm.com/documentation) as basically the Git bible.
- Atlassian's [Git Workflow Docs/Guide](https://www.atlassian.com/git/workflows)
- CodeSchool has some [pretty awesome interactive Git Courses](https://www.codeschool.com/paths/electives)
- [Ghost Documentation Git Workflow](https://github.com/TryGhost/Ghost/wiki/Git-workflow) has some good recommendations
- And never forget [to search Stack Overflow: Git Workflow](http://stackoverflow.com/search?tab=votes&q=git%20workflow)...

Some key thoughts I've taken away from it all...

## Getting Started with Pull Requests

Inspired by some recent posts over at the [nerds.airbnb.com Engineering Blog](http://nerds.airbnb.com/testing-at-airbnb/), I decided it was time I put some time into the art of using [Pull Requests](https://help.github.com/articles/using-pull-requests).

> **From the AirBNB post:**  Adoption of pull requests held a number of advantages for our team. It improved our stylistic consistency, gave us a forum to discuss code structure and architectural decisions, and increased the likelihood that typos and logical errors would be caught before they reached our users. By acting as a channel through which all new code must pass, it also gave individuals on the team much greater visibility into what was shipping. This increased visibility, in turn, enabled us to begin a cultural transformation around testing.

Don't get me wrong, I've been using Git for some time now, but as a one man development team I never felt the need to use many of the features that GitHub and/or BitBucket provides. After the past few weeks, I can attest that structuring my git workflow like so has led to:

- A huge boost in development focus (i.e. not straying from building "Feature A" and mixing in "Bug Fix B" and "Refactor C")
- Cleaner code
- More logical/sequential commit history
- Much more confidence that the changes introduced did not break anything 

*On a side note: I've finally made the leap to writing some automated testing outside of my "experiments/throwaway projects" and it has seriously been awesome to see the effect it had on an existing project. ... more on that to come ;)*

## And So Much More... 

As I began writing this, I realized that there is so much to possibly cover when it comes to Git (hence the numerous articles, tutorials, and videos available all over the internet). 

Proper Branching

```bash
master # Only affected through PRs on origin
develop
feature/foo_a
feature/foo_b
refactor/bar_a
bugfix/baz_c
```

Merging and Rebasing

```bash
git checkout develop
git pull --rebase
git checkout feature/foo_b
git rebase -i develop
# rearrange/squash commits as needed
git push origin feature/foo_b
# Submit pull request (feature/foo_b -> develop)
# Code Review, Changes/Commits, Merge, Delete feature/foo_b
```

diff/log branches

```bash
# Show differences between working HEAD (or branch) and another branch. Add the '-p' option for patch info
git diff HEAD --not develop --stat

# Show commit log difference between branches
git log HEAD --not develop --stat

```

* tagging releases
* issue tracker
* resolving/mentioning issues and pull requests in commit messages
* GitHub and BitBucket code review features
* `git mergetool` for resolving merge conflicts
* and the list goes on...


I would love to hear how you and/or your team is using git and what type of workflow approach you find works best. I'm sure several months from now, I will look back and realize that even now I was doing things a bit ... hacky ;)

I guess that is what I get for being a web programmer. A life of never ending learning and feeling like I'm only touching the tip of the iceberg!  
