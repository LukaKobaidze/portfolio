import { useEffect, useState } from 'react';
import styles from './MobileMenu.module.scss';
import { navSections } from './header.data';
import ResumeButton from './ResumeButton';
import Logo from '../Logo/Logo';
import SocialButton from '../SocialButton';

interface Props {
  activeSection: number;
}

export default function MobileMenu({ activeSection }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`${styles.menuButton} ${
          isOpen ? styles.menuButtonClose : styles.menuButtonOpen
        }`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className={styles.menuButtonLinesWrapper}>
          <span className={`${styles.menuButtonLine} ${styles.menuButtonLineA}`} />
          <span className={`${styles.menuButtonLine} ${styles.menuButtonLineB}`} />
          <span className={`${styles.menuButtonLine} ${styles.menuButtonLineC}`} />
        </span>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <Logo className={styles.logo} />
        <nav
          className={styles.nav}
          style={{ '--active-section': activeSection } as React.CSSProperties}
        >
          {navSections.map((section) => (
            <a
              key={section.id}
              href={'#' + section.id}
              className={styles.navAnchor}
              onClick={() => setIsOpen(false)}
            >
              {section.name}
            </a>
          ))}
        </nav>

        <SocialButton
          type="GitHub"
          className={`${styles.button} ${styles.githubButton}`}
        />
        <SocialButton type="Linkedin" className={styles.button} />
        <div className={styles.seperator} />
        <ResumeButton className={`${styles.button} ${styles.resumeButton}`} />
      </div>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
