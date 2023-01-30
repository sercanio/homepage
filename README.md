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
All headings should start with two #'s. The '##' is top level of heading inside body of the MDX document. Because, site title has already h1 element, document title is h2 and rest of the text context should have at least h2 level heading for SEO optimization. Do not use single #, which means h1 tag.

### Meta

Every MDX document should have this meta section on the top of document. only 'image' is optional. When you add related articles, it is simple, the title of the article, and the url. The url is simply name of mdx file: /name-of-mdx-file/

```text

---
title: Qui Sapiente Sed Sun
tags:
  - javascript
  - object oriented programming
date: 2023-01-09
excerpt: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, magnam tempora id reprehenderit facere, quae voluptatibus molestias possimus molestiae nemo libero a doloremque dicta commodi, nihil consequuntur iure quibusdam autem!
Cumque esse delectus voluptatum mollitia maiores obcaecati aut
related:
  - title: Lorem ipsum dolor?
    url: /lorem-ipsum-dolor/
---
```

### Example File
See /EXAMPLE.mdx for general usage.