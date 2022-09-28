import styles from './Section.module.scss';

export default function Section(props: any) {
  return <section className={`${styles.section} ${props.noBorder ? styles.noBorder : ''}`}>{props.children}</section>;
}
