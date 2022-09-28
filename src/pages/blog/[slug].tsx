import React from 'react';

import fs from 'fs';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import { unified } from 'unified';
import markdown from 'remark-parse';
import matter from 'gray-matter';

import useDarkMode from '../../useDarkMode';
import Head from 'next/head';

export default function BlogPostPage(props: { blog: any }) {
  useDarkMode();

  return (
    <>
      <Head>
        <title>{props.blog.title} :: J.D.&apos;s Braindump</title>
      </Head>
      <header>
        <h1>{props.blog.title}</h1>
        <div className='flex-break'></div>
        <p>Posted on {props.blog.date}</p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: props.blog.content }}></section>
    </>
  );
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const path = `${process.cwd()}/src/doc/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: 'utf-8',
  });

  const { data, content } = matter(rawContent);

  const result = await unified().use(markdown).use(highlight).use(html).process(content);

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const fs = require('fs');

  const path = `${process.cwd()}/src/doc`;
  const files = fs.readdirSync(path, 'utf-8');

  const markdownFileNames = files.filter((fn: string) => fn.endsWith('.md')).map((fn: string) => fn.replace('.md', ''));

  return {
    paths: markdownFileNames.map((fileName: any) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}
