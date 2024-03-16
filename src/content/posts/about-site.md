---
title: About this site
description: A blog post explaining exactly how this website was made!
date: 2024-03-16
---

In this blog post I will be explaining how this website was made.

This blog was made using the *[Astro Framework](https://astro.build)*. Each blog post is written in markdown.

I started off by creating a new blank astro project. Then I started working on the Navbar. When I was working on the Navbar I ran into a issue. Google Fonts wasn't working. I did some research and discovered *[Fontsource](https://fontsource.org)*. Using *Fontsource* I managed to load the font I wanted (*Quicksand*.)

Then I began work on setting up the content and markdown. I loaded up the *Astro* Docs and figured how to use the `[...slug].astro` syntax to load the markdown in the content directory. With the posts pages done I needed a way to navigate to them. I started to create cards that would link to each blog post:

```astro
---
/* src/components/Card.astro */

import styles from '../styles/Card.module.css';

interface Props {
    title: string;
    postId: string;
    description: string;
    date: string;
}

const { title, postId, description, date } = Astro.props;
---

<a class={styles.card} href={`/blog/posts/${postId}`}>
    <span class={styles.title}>{title}</span>
    <span class={styles.description}>{description}</span>
    <span class={styles.date}>{date}</span>
</a>
```

```css
/* src/styles/Card.module.css */

.card {
    background: #30303d;
    width: 15rem;
    padding: 1.5rem;
    border-radius: 0.75rem;
    min-height: 10rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    position: relative;
}

.title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.date {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    color: #8a8a97;
}
```

Then all I had to do was loop over all the blog posts and generate cards for them.

That was a basic overview of how my blog was made and I'll see you in the next one.
