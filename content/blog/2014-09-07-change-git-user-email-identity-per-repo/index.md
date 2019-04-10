---
title: "Quick Tip/Snippet: Change Git user/email per repo"
slug: change-git-user-email-identity-per-repo
date: "2014-09-07"
tags: []
---

Recently I've found myself needing to alternate between Git user identities between my personal and work projects.

Here is a quick snippet of how I do so...

Mostly for my own reference ;) 

## Set personal Git user information

```bash
alias git_user_personal='git config user.email mypersonal@gmail.com'
# Within repo
$ git_user_personal
```

## Set work Git user information

```bash
alias git_user_work='git config user.email myemail@work.com'
# Within repo
$ git_user_work
```

That is all :)
