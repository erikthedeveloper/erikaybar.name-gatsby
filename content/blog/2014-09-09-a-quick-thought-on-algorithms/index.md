---
title: "A Bit of Fun with Sorting Algorithms"
slug: a-quick-thought-on-algorithms
date: "2014-09-09"
tags: ["Algorithms"]
---

I recently began my **CS2420 Algorithms and Data Structures** course as part of [Dixie State University's CIT program](http://cit.dixie.edu/). It is great to finally be back into some full time CS courses in favor of all the general courses I've been in and out of over the past several semesters.

Coincidentally, I also came across this [**Algorithms, Part I** course hosted on Coursera](https://www.coursera.org/course/algs4partI) and taught by some folks over at [Princeton's Computer Science Department](http://www.cs.princeton.edu/). It is free, made up of relatively short, consice videos, programming interview questions, and programming challenges. I would highly recommend it to anyone interested in learning more about computer science and/or algorithms.

![](/content/images/2014/Sep/Algorithms__Part_I___Coursera.png)

### Lesson One: Not all Algorithms are Equal

This is a fairly trivial example showing the performance difference between several sorting Algorithms implemented in Python.

**with 1,000 items...**

```language-bash
- - - - - - - - - - The BubbleSorter
Sort Success: True
List Size: 1,000
Time elapsed 0.546469 seconds
Comparisons: 942,057
Swaps: 243,872
- - - - - - - - - - The ShakerSorter
Sort Success: True
List Size: 1,000
Time elapsed 0.350792 seconds
Comparisons: 496,503
Swaps: 243,872
- - - - - - - - - - The SelectionSorter
Sort Success: True
List Size: 1,000
Time elapsed 0.200294 seconds
Comparisons: 500,500
Swaps: 1,000
- - - - - - - - - - The MergeSorter
Sort Success: True
List Size: 1,000
Time elapsed 0.011106 seconds
Comparisons: 8,702
Swaps: 9,976
- - - - - - - - - - The QuickSorter
Sort Success: True
List Size: 1,000
Time elapsed 0.008213 seconds
Comparisons: 10,880
Swaps: 5,919
- - - - - - - - - - The PythonBuiltInSorter
Sort Success: True
List Size: 1,000
Time elapsed 0.000211 seconds
No compare/swap data available
```

**and with 10,000 items...**

```language-bash
- - - - - - - - - - The BubbleSorter
Sort Success: True
List Size: 10,000
Time elapsed 56.599476 seconds
Comparisons: 98,950,104
Swaps: 25,014,554
- - - - - - - - - - The ShakerSorter
Sort Success: True
List Size: 10,000
Time elapsed 35.286887 seconds
Comparisons: 49,605,039
Swaps: 25,014,554
- - - - - - - - - - The SelectionSorter
Sort Success: True
List Size: 10,000
Time elapsed 19.127439 seconds
Comparisons: 50,005,000
Swaps: 10,000
- - - - - - - - - - The MergeSorter
Sort Success: True
List Size: 10,000
Time elapsed 0.147227 seconds
Comparisons: 120,503
Swaps: 133,616
- - - - - - - - - - The QuickSorter
Sort Success: True
List Size: 10,000
Time elapsed 0.115026 seconds
Comparisons: 154,918
Swaps: 81,995
- - - - - - - - - - The PythonBuiltInSorter
Sort Success: True
List Size: 10,000
Time elapsed 0.002861 seconds
No compare/swap data available
```

As you can see with a list of 1,000 any of the algorithms will perform in a reasonable amount of time. However, increasing the list size to only 10,000 starts to really show the implications of a poorly performing algorithm.

For example the Bubble Sort, which took only ~0.5 seconds to sort 1,000 items took nearly a full minute to sort 10,000 items. Why, if the list size increased by 10 times, didn't the time to sort increase by only 10 times?

Now imagine a list of size 1,000,000 ... 1,000,000,000 ... well, you get the picture :)

**...and as a bonus... with 10,000,000 items** (the bonus being, my Macbook Pro didn't melt in the process... although it sounded a bit like it might...)

Of course I had to leave the lesser performing Algorithms out of this example such as Bubble Sort, Shaker Sort, and Selection Sort since I do not have a spare 30 years or so to stick around and find out the results ;)

```language-bash
- - - - - - - - - - The MergeSorter
Sort Success: True
List Size: 10,000,000
Time elapsed 259.799965 seconds
Comparisons: 220,101,038
Swaps: 233,222,784
- - - - - - - - - - The QuickSorter
Sort Success: True
List Size: 10,000,000
Time elapsed 224.414171 seconds
Comparisons: 291,762,297
Swaps: 155,910,402
- - - - - - - - - - The PythonSorter
Sort Success: True
List Size: 10,000,000
Time elapsed 8.752154 seconds
No compare/swap data available
```

*Makes you wonder what the #$%@ Python's sort is doing under the hood ... I guess a few weeks with sorting Algorithm's doesn't quite put me on par with [Guido van Rossum](https://www.python.org/~guido/)*

That is why we have computer science of course! To sort large lists of integers ;)

That is all for now. My morning rant with coffee.
