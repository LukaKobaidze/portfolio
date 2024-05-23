import emailjs from '@emailjs/browser';
import useForm from '@/hooks/useForm';
import Field from '../Field';
import Button from '../Button/Button';
import ContentWrapper from '../ContentWrapper';
import SocialButton from '../SocialButton/SocialButton';
import stylesButton from '@/components/Button/Button.module.scss';
import styles from './Contact.module.scss';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

const EMAIL_ADDRESS = 'lukakobaidze.dev@gmail.com';

export default function Contact() {
  const { fields, error, onFieldChange, validateEmpty, clearFields } = useForm([
    'email',
    'subject',
    'message',
  ]);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSendMessageLoading(true);
    try {
      validateEmpty();

      emailjs
        .sendForm('service_to5xmlt', 'template_vg7imyr', formRef.current, {
          publicKey: '2-mN4-OK3Q5AhpnHe',
        })
        .then(() => {
          clearFields();
          setSendMessageSuccess(true);
        })
        .finally(() => {
          setSendMessageLoading(false);
        });
    } catch (err) {
      setSendMessageLoading(false);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (sendMessageSuccess) {
      timeout = setTimeout(() => {
        setSendMessageSuccess(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [sendMessageSuccess]);

  return (
    <ContentWrapper id="contact" className={styles.container}>
      <SectionHeading backgroundGlow>Contact</SectionHeading>
      <div className={styles.contactWrapper}>
        <form
          ref={formRef}
          className={`${styles.form} ${styles.subWrapper}`}
          onSubmit={handleFormSubmit}
        >
          <h3 className={styles.subHeading}>Message Me</h3>
          <p className={styles.subParagraph}>
            Send me a quick message using this form, I will contact you back to your
            email.
          </p>

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.field}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            value={fields.email}
            onChange={(e) => onFieldChange(e, 'email')}
            error={error?.field === 'email'}
          />

          <label className={styles.label} htmlFor="subject">
            Subject
          </label>
          <Field
            className={styles.field}
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject..."
            value={fields.subject}
            onChange={(e) => onFieldChange(e, 'subject')}
            error={error?.field === 'subject'}
          />

          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <Field
            className={styles.field}
            type="textarea"
            id="message"
            name="message"
            placeholder="Your message..."
            value={fields.message}
            onChange={(e) => onFieldChange(e, 'message')}
            error={error?.field === 'message'}
          />
          <div className={styles.message}>
            {error?.message ? (
              <p className={styles.messageError}>{error.message}</p>
            ) : sendMessageSuccess ? (
              <p className={styles.messageSuccess}>Message sent successfully!</p>
            ) : null}
          </div>
          <Button
            className={styles.button}
            type="submit"
            loading={sendMessageLoading}
          >
            Send Message
          </Button>
        </form>
        <div className={styles.or}>or</div>
        <div className={styles.subWrapper}>
          <h3 className={styles.subHeading}>Email Me</h3>
          <p className={styles.subParagraph}>
            Email me manually to my email address below!
          </p>
          <Field
            className={`${styles.field} ${styles.fieldCopy}`}
            type="copy"
            value={EMAIL_ADDRESS}
          />
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${stylesButton.button} ${styles.button}`}
          >
            Email Me!
          </a>

          <div className={styles.line} />

          <h3 className={`${styles.subHeading} ${styles.subHeadingSocials}`}>
            My Socials
          </h3>
          <p className={styles.subParagraph}>You can also visit my socials!</p>
          <SocialButton type="Linkedin" />
          <SocialButton type="GitHub" className={styles.githubButton} />
        </div>
      </div>
    </ContentWrapper>
  );
}
