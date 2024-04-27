import useForm from '@/hooks/useForm';
import Field from '../Field';
import Button from '../Button/Button';
import ContentWrapper from '../ContentWrapper';
import stylesButton from '@/components/Button/Button.module.scss';
import styles from './Contact.module.scss';
import SocialButton from '../SocialButton/SocialButton';

interface Props {}

export default function Contact(props: Props) {
  const { fields, error, onFieldChange, setError, validateEmpty } = useForm([
    'email',
    'subject',
    'message',
  ]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ContentWrapper id="contact" className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleBackground} />
        <h2 className={styles.titleText}>Contact</h2>
      </div>
      <div className={styles.contactWrapper}>
        <form
          className={`${styles.form} ${styles.subWrapper}`}
          onSubmit={handleFormSubmit}
        >
          <h3 className={styles.subHeading}>Message Me</h3>
          <p className={styles.subParagraph}>
            Send me a quick message using this form, I will contact you back on your
            email.
          </p>

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.field}
            type="email"
            id="email"
            placeholder="Enter your email..."
          />

          <label className={styles.label} htmlFor="subject">
            Subject
          </label>
          <Field
            className={styles.field}
            type="text"
            id="subject"
            placeholder="Subject..."
          />

          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <Field
            className={styles.field}
            type="textarea"
            id="message"
            placeholder="Your message..."
          />
          <Button
            className={`${styles.button} ${styles.submitButton}`}
            type="submit"
          >
            Send Message
          </Button>
        </form>
        <div className={styles.or}>or</div>
        <div className={styles.subWrapper}>
          <h3 className={styles.subHeading}>Email Me</h3>
          <p className={styles.subParagraph}>
            Email me manually on my email address below!
          </p>
          <Field
            className={styles.field}
            type="copy"
            value="lukakobaidze.dev@gmail.com"
          />
          <a className={`${stylesButton.button} ${styles.button}`}>Email Me!</a>

          <div className={styles.line} />

          <h3 className={`${styles.subHeading} ${styles.subHeadingSocials}`}>
            My Socials
          </h3>
          <p className={styles.subParagraph}>You can also visit my socials!</p>
          <SocialButton type="Linkedin" className={styles.linkedinButton} />
          <SocialButton type="GitHub" className={styles.githubButton} />
        </div>
      </div>
    </ContentWrapper>
  );
}
