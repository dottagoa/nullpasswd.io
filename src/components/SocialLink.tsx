import Link from 'next/link';
import styles from './SocialLink.module.scss';

export default function SocialLink(props: any) {
  let extraItems, descContent;

  if (props.children) extraItems = props.children;
  if (props.body) descContent = <div className={styles.socialDesc}>{props.body}</div>;

  let linkContent = (
    <a>
      <div>{props.name}</div>
      {descContent}
    </a>
  );

  if (props.newTab)
    linkContent = (
      <a target='_blank'>
        <div>{props.name}</div>
        {descContent}
      </a>
    );

  return (
    <li className={`${styles.socialLink} ${!props.body ? styles.noDesc : ''}`}>
      <Link href={props.href}>{linkContent}</Link>
      {extraItems}
    </li>
  );
}
