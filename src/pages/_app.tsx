import type { AppProps } from 'next/app';

import 'normalize.css';
import '../styles/themes/dark.css';
import '../styles/themes/light.css';
import '../styles/globals.scss';

import '../styles/twemoji-amazing.css';

import Layout from '../components/layout';

export default function Site({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    setTimeout(() => document.querySelector('html')?.classList.remove('preload'), 1);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
