import NavBar from './NavBar';

import useDarkMode from '../useDarkMode';

import type Props from '../types/Props';

export default function Layout({ children }: Props) {
  useDarkMode();

  return (
    <>
      <main>
        <NavBar />
        {children}
      </main>
    </>
  );
}
