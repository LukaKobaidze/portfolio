import { SvgProfile } from '@/assets';
import stylesButton from '@/components/Button/Button.module.scss';
import styles from './ResumeButton.module.scss';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ResumeButton({ className, ...restProps }: Props) {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${stylesButton.button} ${styles.resumeButton} ${className || ''}`}
      {...restProps}
    >
      <SvgProfile className={styles.resumeButtonIcon} />
      <span>Resume</span>
    </a>
  );
}
