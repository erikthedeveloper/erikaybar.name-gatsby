---
title: "Git Tip: Deleting Old Local Branches"
slug: git-deleting-old-local-branches
date: "2017-01-31"
tags: ["git", "command line"]
---

> How can I clean up all these old local git branches?

Stale/unused git branches build up rather quickly, and this is something that has resurfaced a number of times in our team chat at work. I figure it's time I make a note of it here for others (and myself) to reference in the future!

This is how dirty my branches were this morning:
```bash
> git branch | wc -l
205

# *magic*

> git branch | wc -l
56
```

**For those of you looking for that magic one liner!**

*First, be sure to prune your remote branches*
```bash
git remote prune origin 
```
*and then ✨🎩🐇*
```bash
git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}' | xargs git branch -d
```

---

Now let's walk through it a bit...

## 0) Prune remote branches

```bash
git remote prune origin
```

[Read more about `git remote prune` here](https://git-scm.com/docs/git-remote#git-remote-empruneem)
> Deletes all stale remote-tracking branches under <name>. These stale branches have already been removed from the remote repository referenced by <name>, but are still locally available in "remotes/<name>".

## 1) List local git branches

[`git branch -vv` will list all local branches along with some additional information](http://) such as their related upstream/remote branch and latest commit message

```bash
> git branch -vv
#...
feature/some-local-only-feature cba8191 Some commit message
feature/some-old-feature cba2191 [origin/feature/some-old-feature: gone] Some commit message about some old feature
feature/some-active-feature wba2191 [origin/feature/some-active-feature: ahead 40, behind 10] Some active feature branch
#...
```

## 2) Filter git branches down to only those with deleted upstream/remote counterparts

Next, we pipe the output from `git branch -vv` into `grep 'origin/.*: gone]'`. This filters our list down to only lines that match the regex `origin/.*: gone]` leaving us with

```bash
> git branch -vv | grep 'origin/.*: gone]'
#...
feature/some-old-feature cba2191 [origin/feature/some-old-feature: gone] Some commit message about some old feature
#...
```

Read more about [using regular expressions with `grep` here](https://www.cyberciti.biz/faq/grep-regular-expressions/).


>#### Random, useful `grep` tip : Invert Match
I [just came across](http://stackoverflow.com/a/10411661/2644281) `grep`'s `-v` (short for `--invert-match`) `grep -v 'some pattern'` that filters lines down to those **not** matching any of the specified patterns. 

## 3) Pluck out branch names from output

Piping that into `awk '{print $1}'` cleans up our output so we end up with a branch name per line.

```bash
> git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}'
#...
feature/some-old-feature
#...
```
This is because `$1` translates into the 1st item in each line (items being separated by space(s)) which is the branch name. Example:

* `$1`: `feature/some-old-feature`
* `$2`: `cba2191`
* `$3`: `[origin/feature/some-old-feature:`
* `$4`: `gone]`
* `$5`: `First`
* `$6`: `words`
* `$7`: `in_commit_message...`
* ...

## 4a) Delete the branches!

Next, we pipe our filtered down, cleaned up git branches list into [`git branch -d` (short for `--delete`)](https://git-scm.com/docs/git-branch#git-branch---delete) and say our final goodbyes.

```bash
> git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}' | xargs git branch -d
```

The `xargs` portion results in the equivalent of manually typing out each of the branch names as subsequent arguments such as

```bash
git branch -d branch01 branch02 branch03 # ...
``` 

## 4b) Review/edit list before deleting

If you want to review and/or edit the list of branches before deleting them. One way to accomplish this is to pipe the branch names into your clipboard via `pbcopy`, paste them into your favorite editor, and then pipe them into `git branch -d` yourself. Example:

- Pipe list into your clipboard via `git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}' | pbcopy`
- Paste into editor. Review. Edit as needed.
- Copy the edited list back into your clipboard.
- Pipe clipboard into commmand via: `pbpaste | xargs git branch -d`

---

That's it!

I know I'll be referencing this from time to time myself. If you find this useful or have any alternative suggestions, let me know in the comments below or ping me [@erikthedev_](https://twitter.com/)!

