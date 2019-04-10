---
title: "Updating an Outdated GitHub Fork"
slug: git-updating-an-outdated-github-fork
date: "2014-11-14"
tags: ["git", "github"]
---

Scenario: 

- You forked some great repository
- It has been a while
- Your repo/fork is severely out of date
- You want it to be up to date

To begin, let us ask 

> GitHub, why is this feature not baked in?

For this post we will assume a few things: 

- We will refer to the **original source repository as "source"**
- In this context **our fork is "origin"**
- We are working on and submitting a PR **to the branch "develop"**
- You have your ssh key set up to use the `git@github` urls. Otherwise just use the `https://` urls in their place.

## The Short Version

```bash
$ git remote add source git@github.com:owner/some_great_repo.git
$ git fetch source
# Hopefully fast forward (via "--ff-only")
# Otherwise rebase/merge/resolve as needed
$ git checkout develop
$ git merge source/develop --ff-only
$ git push
# voila
```

## The Very Short (Cheater) Version

- Delete your fork on GitHub.
- Refork a fresh fork from "source".
- Done.

## The Longer Version...

### Add the "source" repository as a remote

This enables you to pull/fetch from the original source repository on GitHub. This allows you to compare your fork (origin) with the source (source)

```bash
# Display all remotes currently set up (you will likely only have "origin")
$ git remote -v
origin  git@github.com:myusername/some_great_repo.git (fetch)
origin  git@github.com:myusername/some_great_repo.git (push)
# Add a new remote with the name "source" located at "git@github.com:owner/some_great_repo.git"
$ git remote add source git@github.com:owner/some_great_repo.git
# Verify that it worked :)
$ git remote -v
origin  git@github.com:myusername/some_great_repo.git (fetch)
origin  git@github.com:myusername/some_great_repo.git (push)
source  git@github.com:owner/some_great_repo.git (fetch)
source  git@github.com:owner/some_great_repo.git (push)
```

### Fetch the newly added remote ("source")

```bash
# This will fetch the source repository allowing you to examine/interact with it
$ git fetch source
remote: Counting objects: 20, done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 20 (delta 10), reused 1 (delta 0)
Unpacking objects: 100% (20/20), done.
From github.com:owner/some_great_repo
 * [new branch]      develop     -> source/develop
```

### You probably want to examine the diff/log...

```bash
$ git log develop...source/develop
$ git diff develop...source/develop
# List all branches (including remotes "-a")
$ git branch -a
* develop
  remotes/origin/HEAD -> origin/develop
  remotes/origin/develop
  remotes/source/develop
```

### Update your "local" branch using the "source" branch

Assuming a fast forward is possible, do this. Otherwise you will need to rebase/merge and possibly resolve any conflicts which is a whole topic on its own.

```bash
$ git checkout develop
$ git merge --ff-only source/develop
Updating 22c5306..859b79c
Fast-forward
 README.md | 8 +++++++-
 1 file changed, 7 insertions(+), 1 deletion(-)
```

### Push to update your fork

```bash
# Same as: "git push origin develop"
$ git push
Counting objects: 24, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (20/20), done.
Writing objects: 100% (20/20), 2.39 KiB | 0 bytes/s, done.
Total 20 (delta 11), reused 0 (delta 0)
To git@github.com:myusername/some_great_repo.git
   22c5306..859b79c  develop -> develop
```

### Congratulations. Your fork is now updated.

I would be interested to hear any thoughts or alternative methods from those more experienced. Let me know in the comments below or find me at [@erikthedev_](https://twitter.com/erikthedev_)
