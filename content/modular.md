---
title: Modular Code
date: 2021-04-24T21:46:55+01:00
description: This is a blog post. There are tags, images and image ALT text in the Front Matter
tags: 
- modular
- css
- bem
images: 
- https://res.cloudinary.com/growdigital/image/upload/v1617310463/gorse-210401.jpg
imageAlt:
- Yellow flowers
draft: false
---

## 1. Frontend build

* Modular CSS is a way of organising your CSS, and other assets, into discrete and re‑usable chunks.
* The individual chunks are concatenated and optimised.
* Godular uses [Hugo Pipes](https://gohugo.io/hugo-pipes/) with [PostCSS](https://gohugo.io/hugo-pipes/postcss/).

## 2. Code organisation

The code organisation is based on [Inverted Triangle CSS](https://github.com/itcss) by [Harry Roberts](https://twitter.com/csswizardry), from the most applicable styles (variables, base) to specific modules (objects and components) and to very specific trumping [utilities](https://github.com/suitcss/utils) and [shameful hacks](https://csswizardry.com/2013/04/shame-css/).

![Inverted code triangle showing organisation of modules](https://res.cloudinary.com/growdigital/image/upload/v1620509891/code-triangle.png)

1. **Variables**: global variables and site-wide settings eg `responsive.css`
2. **Base**: unclassed HTML elements eg `a {}`
3. **Objects**: cosmetic-free objects, abstractions, and design patterns eg `o-media.css`
4. **Components**: discrete, complete chunks of UI eg `button.css`
5. **Utilities**: high-specificity, very explicit selectors that trump everything else. Overrides and helper classes eg .`u-hiddenvisually {}`
6. **Shame**: temporarily disorganised CSS lives in `shame.css`

**All files relating to a particular module go in that module folder**: eg JavaScript, PNGs, JPEGs, SVGs, CSS, template snippet for styleguide etc.

