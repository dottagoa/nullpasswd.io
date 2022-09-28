import Head from 'next/head';
import Link from 'next/link';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>J.D. &quot;npw&quot;</title>
        <meta
          name='description'
          content='nullpasswd (or J.D.) home page.'
        />
      </Head>

      <header>
        <div className='flex'>
          <h1>J.D. &quot;nullpasswd&quot;</h1>
          <div className='flex-break'></div>
          <p>
            Web human and professional screwup <i className='twa twa-singer' />
          </p>
        </div>
      </header>

      <Section>
        <p>
          I create web things from time to time. Writing is always something I enjoy doing, and I write to my <a href='blog'>blog</a> on occasion.
        </p>

        <p>Everything I do is primarily self-taught; there&apos;s only a few things I learn that rely on school classes and web lessons. (Yes, that includes React so I can make this site)</p>

        <p>I enjoy learning new things and being kind to people. So much negativity goes around on the internet, and I want to try and spread that joy to other people.</p>
      </Section>

      <Section>
        <h1>Current sites</h1>
        <p>
          All websites I&apos;ve made. A full list of everything is available{' '}
          <Link href='directory'>
            <a>here</a>
          </Link>
          .
        </p>
        <ul>
          <SocialLink
            href='https://nullpasswd.io'
            name='nullpasswd.io'
            body="Personal website. You're here right now!"
          />
          <SocialLink
            href='https://flashisdead.xyz/'
            name='Flash is dead'
            body='Now this is the story all about how, my Flash got flipped, deprecated and removed everywhere'
          />
          <SocialLink
            href='https://tinytuba.xyz'
            name='Tiny tuba'
            body='A tiny tuba for your tiny tuba needs. Plus, it makes sound when you click on it~!'
          />
        </ul>
      </Section>
    </>
  );
}
