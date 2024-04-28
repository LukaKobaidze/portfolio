import ContentWrapper from '../ContentWrapper';
import styles from './AboutMe.module.scss';
import SocialButton from '../SocialButton/SocialButton';
import Tools from './Tools';

export default function AboutMe() {
  return (
    <ContentWrapper id="about-me" className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>
          <span className={styles.headingSpan}>Hi, my</span>
          <span className={styles.headingSpan}>
            name is <span className={styles.headingName}>Luka</span>.
          </span>
        </h1>

        <p className={styles.paragraph}>
          <span className={styles.paragraphSpan}>
            I'm a <span className={styles.bold}>web developer</span> from
          </span>
          <span className={styles.paragraphSpan}>Tbilisi, Georgia.</span>
        </p>

        <div className={styles.socialsWrapper}>
          <SocialButton
            type="GitHub"
            className={`${styles.socialButton} ${styles.socialButtonGithub}`}
          />
          <SocialButton type="Linkedin" className={styles.socialButton} />
        </div>
      </div>

      <Tools />
    </ContentWrapper>
  );
}
