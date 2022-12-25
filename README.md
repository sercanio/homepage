## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Adding Content

### Headings
All headings should start with 3 three #'s. The '###' is top level of heading inside body of the MDX document. Because, site title has already h1 element, document title is h2 and rest of the text context should have at least h3 level heading for SEO optimization.

### Meta

Every MDX document should have this meta section on the top of document. only 'image' is optional. When you add related articles, it is simple, the title of the article, and the url. The url is simply name of mdx file: /name-of-mdx-file/

```text
---
title: How to use Reduce in JavaScript
tags:
  - javascript
  - fundamentals
  - arrays
  - reduce
  - functional programming
  - object oriented javascript
date: 2020-05-09
excerpt: The reduce function of an array is one of the most versatile functions in JavaScript. With it you can accomplish a lot of the functions from array and math objects.
related:
  - title: How Does SWR Work?
    url: /swr-copy-1/
  - title: How Does SWR Work?
    url: /swr-copy-2/
  - title: How Does SWR Work?
    url: /swr-copy-2-copy/
  - title: How Does SWR Work?
    url: /swr-copy-2-copy-10/
---
```