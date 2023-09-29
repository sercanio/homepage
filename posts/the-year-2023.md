---
title: The Year 2023
tags:
  - general
date: 2023-09-29
excerpt: 2023 definetely going to be most unforgatable year in my life. The Earthquake and and some other things completely changed my life.
---

2023 definetely going to be most unforgatable year in my life. The Earthquake<Bibliography
  mode='input'
  num={1}
  source='https://google.com'
  style={{ color: 'white' }}
/> and and some other things completely changed my life.

## What happened?

The biggest motivation to build a web page is having a web page. I find this very cool. Imagine you are in a crowded street and walking by watching the shop windows.
You may be the only person on the street who has a web page. Think about it, you may be the one!

<Figure
  src="/images/earthquake/earthquake-map.jpeg"
  width={640}
  height={640}
  alt={"A map of central Turkey that shows Earthquake zones."}
  caption={"A map of central Turkey that shows Earthquake zones."}
  quality={75}
  className="mx-auto py-2"
  source={"https://wikipedia.org"}
/>

Having a digital garden in the big internet world is easy. You can simply sign up Twitter and start to listen those peaceful, sweet tweets. You can start vlogging on YouTube or share photos on Instagram... These are good, simple gardens in the internet world. But having your own domain and a space in that world feels much more independency. It's like a difference between owning an apartment and owning a detached house. Some peaople may own both of them, of course. If you have a webpage people does not have to signup some social platform to see your posts. Simply they can type your domain to the browser's address bar and they are in and You are much more reachable.

Unlike a social media platform you can re-design your webpage, you can adjust how things should look like. That is your place! you can do everything you want. At this point the biggest struggle is perfectionism or _perfecto-virus_ which can infect anybody and paralyze infected body and mind. The cure is doing, just doing. As **Benedict Cumberbatch** advices here:

<YouTube id="U1NtMRguvno" className="" />

## What about blogging platforms?

When you think about blogging your toughts you can start to publish your posts in several platforms like [Medium](https://medium.com), [Dev.to](https://dev.to), [Wordpress](https://wordpress.org) etc. In 2023 blogging is easy and super fast. But As I've mentioned before, this is about owning your own garden. If you just want to share some articles signup medium, write and publish! Super easy. But these platforms looks a little messy to me.

## What tech stack I used?

This web page deployed to [vercel](https://vercel.com). I used [Nextjs](https://nextjs.org) which is [React](https://reactjs.org) based meta framework. For styling [TailwindCSS](https://tailwindcss.com) helped me a lot. And finally my blog posts stored in [MDX](https://mdxjs.com/) files and Nextjs fetches them in build time, creates static web pages and serves to client. This is small, eficient tech stack that every tool works with each other very well.

Lots of different tools may be used to build a website. I is possible to make a backend service with django, express or laravel and serve static html files. We can use a CMS to upload content to our webpage. Besides all these possibilities, the reason why I chose this technology stack is that I only know this stack. I know react and tailwindcss this ise a huge plus. I just watched some videos ([**Leigh Halliday**'s video is super helpful](https://www.youtube.com/watch?v=J_0SBJMxmcw)) to make MDX based blog pages, voala! I have blog page.

## Page structure

In my homepage, at this time, you must see a post list that contains my posts with their titles, excerpts, tags and publish dates. On the right side there must be "All Tags" and the "Archive" sections. I collect all the tags in my posts and serve in the "All Tags" section on behalf of seperation of concerns. The "Archive" sections very simple, I just gropued posts with their publish year. So till the end of 2023 there will be just one option (2023) in there.

In my postpage there is post itself and the "Sections" section that has links to headings in posts, so the reader can easily navigate inside the text. Finally if there are at least two posts that related each other the "Related" section will appear at the right side. Simply, list of posts related with the current post.

That's it.

## Links and sources
---
<Bibliography
  mode='print'
/>