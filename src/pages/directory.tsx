import Head from 'next/head';
import Link from 'next/link';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';

export default function PageDirectory() {
  return (
    <>
      <Head>
        <title>Directory :: J.D. &quot;npw&quot;</title>
      </Head>

      <header>
        <h1>Directory</h1>
        <p>
          Every way you can reach out to me <i className='twa twa-love-letter'></i>
        </p>
      </header>

      <Section>
        <h1>All sites (with a domain)</h1>
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

      <Section noBorder>
        <h2>Social sites</h2>
        <ul>
          <SocialLink
            href='https://twitter.com/nullpasswd'
            name='Twitter'
            body='@nullpasswd'
            newTab
          />
          <SocialLink
            href='https://discord.gg/4zJ8xqV'
            name='Discord'
            body='.gg/4zJ8xqV'
            newTab
          >
            <ul>
              <li>@nullpasswd#9001</li>
            </ul>
          </SocialLink>
          <SocialLink
            href='https://steamcommunity.com/id/rhearmas'
            name='Steam'
            body='Box (rhearmas)'
            newTab
          />
        </ul>
      </Section>

      <Section noBorder>
        <h2>Dev platforms</h2>
        <ul>
          <SocialLink
            href='https://github.com/nullpasswd'
            name='GitHub'
            body='@nullpasswd'
            newTab
          />
          <SocialLink
            href='https://replit.com/@npw'
            name='Replit'
            body='@npw'
            newTab
          />
        </ul>
      </Section>
    </>
  );
}
