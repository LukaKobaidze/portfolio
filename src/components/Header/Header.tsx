import { useEffect, useState } from 'react';
import { navSections } from './header.data';
import ContentWrapper from '@/components/ContentWrapper';
import Navigation from './Navigation';
import styles from './Header.module.scss';
import MobileMenu from './MobileMenu';
import ResumeButton from './ResumeButton';

interface Props {
  windowWidth: number;
  windowHeight: number;
}

export default function Header({ windowWidth, windowHeight }: Props) {
  const [sectionPositions, setSectionPositions] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<number>(0);

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

  const menuBreakpoint = 600;

  return (
    <header className={styles.header}>
      <ContentWrapper className={styles.wrapper}>
        {windowWidth <= menuBreakpoint && (
          <MobileMenu activeSection={activeSection} />
        )}
        <h2>LukaKobaidze</h2>
        {windowWidth > menuBreakpoint && (
          <Navigation activeSection={activeSection} />
        )}
        <ResumeButton className={styles.resumeButton} />
      </ContentWrapper>
    </header>
  );
}
