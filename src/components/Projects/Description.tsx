import Tag, { TagType } from '../Tag';
import { SvgCode, SvgWeb } from '@/assets';
import buttonStyles from '@/components/Button/Button.module.scss';
import styles from './Description.module.scss';

interface Props {
  id: string;
  title: string;
  description: string | string[];
  tags: TagType[];
  code: string;
  demo: string;
  color: string;
  isActive: boolean;
  className?: string;
}

export default function Description(props: Props) {
  const { id, title, description, code, demo, tags, color, isActive, className } =
    props;

  return (
    <div
      id={id}
      className={`${styles.project} ${
        isActive ? styles.projectActive : ''
      } ${className}`}
    >
      <h3
        className={`${styles.title} ${
          title === 'Rock Paper Scissors' ? styles['title--rockpaperscissors'] : ''
        }`}
      >
        {title === 'Rock Paper Scissors'
          ? title.split(' ').map((word, index) => (
              <span key={word}>
                {index !== 0 ? ' ' : ''}
                {word}
              </span>
            ))
          : title}
      </h3>
      <div className={styles.tags}>
        {tags.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>
      {Array.isArray(description) ? (
        <ul className={styles.description}>
          {description.map((text, i) => (
            <li key={i} className={styles['description__list-item']}>
              {text}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.description}>{description}</p>
      )}
      <div className={styles.links}>
        <a
          className={`${buttonStyles.button} ${styles.anchor}`}
          style={{ '--color': `rgb(${color})` } as React.CSSProperties}
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          <SvgCode className={styles['anchor__icon']} />
          <span>Code</span>
        </a>
        <a
          className={`${buttonStyles.button} ${styles.anchor}`}
          style={{ '--color': `rgb(${color})` } as React.CSSProperties}
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          <SvgWeb className={styles['anchor__icon']} />
          <span>Live Site</span>
        </a>
      </div>
    </div>
  );
}
