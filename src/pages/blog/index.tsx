import fs from 'fs';
import matter from 'gray-matter';
import { v4 as uuid } from 'uuid';

import useDarkMode from '../../useDarkMode';

import Head from 'next/head';
import BlogArticle from '../../components/blog/BlogArticle';

export default function BlogHome(props: { blogs: any[] }) {
  useDarkMode();

  let noPostsText;
  if (props.blogs.length < 1) noPostsText = <p dangerouslySetInnerHTML={{ __html: 'No posts yet... :(' }}></p>;

  return (
    <>
      <Head>
        <title>J.D.&apos;s Braindump</title>
      </Head>

      <header>
        <h1>J.D.&apos;s Braindump</h1>
        <p>
          Personal blog for personal doings <i className='twa twa-memo' />
        </p>
      </header>

      {noPostsText}
      {props.blogs.map((blog: any) => {
        return (
          <BlogArticle
            key={blog.id}
            slug={blog.slug}
            title={blog.title}
            summary={blog.summary}
          />
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/src/doc`, 'utf-8');

  const blogs = files
    .filter((fn) => fn.endsWith('.md'))
    .filter((fn) => !fn.startsWith('_'))
    .map((fn) => {
      const path = `${process.cwd()}/src/doc/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { blogs },
  };
}
