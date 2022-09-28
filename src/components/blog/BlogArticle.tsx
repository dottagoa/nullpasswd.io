import Link from 'next/link';

import styles from './BlogArticle.module.scss';

export default function BlogArticle(props: any) {
  return (
    <div
      className={styles.article}
      key={props.id}
    >
      <Link href={`/blog/${props.slug}`}>
        <a>
          <h1 className={styles.title}>{props.title}</h1>
        </a>
      </Link>
      <p className={styles.summary}>{props.summary}</p>
    </div>
  );
}
