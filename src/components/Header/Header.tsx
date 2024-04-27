import { SvgProfile } from '@/assets';
import Button from '../Button/Button';
import ContentWrapper from '../ContentWrapper';
import stylesButton from '@/components/Button/Button.module.scss';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

const navSections = [
  { id: 'about-me', name: 'About Me' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

interface Props {
  windowWidth: number;
  windowHeight: number;
}

export default function Header({ windowWidth, windowHeight }: Props) {
  const [sectionPositions, setSectionPositions] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<number>(-1);

  const updateSectionPositions = () => {
    const positions: number[] = [];

    for (let i = 1; i < navSections.length; i++) {
      const project = document.getElementById(navSections[i].id)!;

      positions.push(
        project.getBoundingClientRect().top + document.documentElement.scrollTop
      );
    }

    setSectionPositions(positions);
  };

  useEffect(() => {
    if (sectionPositions.length !== 0) {
      updateSectionPositions();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionPositions.length === 0) {
        return updateSectionPositions();
      }

      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        windowHeight / 2;

      if (centerPos < sectionPositions[0]) {
        setActiveSection(0);
      } else if (centerPos > sectionPositions[1]) {
        setActiveSection(2);
      } else {
        setActiveSection(1);
      }
    };
    handleScroll();

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [sectionPositions, windowHeight]);

  return (
    <header className={styles.header}>
      <ContentWrapper className={styles.wrapper}>
        <h2>LukaKobaidze</h2>
        <nav className={styles.nav}>
          {navSections.map((section, index) => (
            <a
              className={`${styles.anchor} ${
                index === activeSection ? styles.active : ''
              }`}
              href={'#' + section.id}
            >
              <span className={styles.anchorText}>{section.name}</span>
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${stylesButton.button} ${styles.resumeButton}`}
        >
          <SvgProfile className={styles.resumeButtonIcon} />
          <span>Resume</span>
        </a>
      </ContentWrapper>
    </header>
  );
}
