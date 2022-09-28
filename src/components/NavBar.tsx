import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Link from 'next/link';
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
});

import styles from './NavBar.module.scss';

const links = [
  { name: 'Blog', href: '/blog' },
  { name: 'Directory', href: '/directory' },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <Link href='/'>
        <a className={router.route === '/' ? styles.current : ''}>
          <p>Home</p>
        </a>
      </Link>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
        >
          <a className={router.route.includes(link.href) ? styles.current : ''}>
            <p>{link.name}</p>
          </a>
        </Link>
      ))}
      <ThemeToggle />
    </div>
  );
}
