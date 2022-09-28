import useDarkMode from '../useDarkMode';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div className={styles.themeToggle}>
        <button
          type='button'
          onClick={() => (colorTheme === 'light' ? setTheme('light') : setTheme('dark'))}
        >
          {/* {colorTheme === 'light' ? '🌙' : '🔆'} */}
          <i className={`twa twa-${colorTheme === 'light' ? 'crescent-moon' : 'bright-button'}`} />
        </button>
      </div>
    </>
  );
}
