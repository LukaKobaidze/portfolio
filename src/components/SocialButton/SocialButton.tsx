import { SvgGithub, SvgLinkedin } from '@/assets';
import stylesButton from '@/components/Button/Button.module.scss';
import styles from './SocialButton.module.scss';

const socials = {
  GitHub: {
    url: 'https://github.com/LukaKobaidze',
    icon: <SvgGithub className={styles.buttonIcon} />,
  },
  Linkedin: {
    url: 'https://www.linkedin.com/in/lukakobaidze',
    icon: <SvgLinkedin className={styles.buttonIcon} />,
  },
};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type: keyof typeof socials;
}

export default function SocialButton({ type, className, ...restProps }: Props) {
  return (
    <a
      href={socials[type].url}
      className={`${stylesButton.button} ${styles.button} ${
        styles[`button--${type}`]
      } ${className || ''}`}
      target="_blank"
      rel="noopener noreferrer"
      {...restProps}
    >
      {socials[type].icon}
      <span>{type}</span>
    </a>
  );
}
