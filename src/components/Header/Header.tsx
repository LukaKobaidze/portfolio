import { useContext, useEffect, useState } from 'react';
import { navSections } from './header.data';
import ContentWrapper from '@/components/ContentWrapper';
import Navigation from './Navigation';
import styles from './Header.module.scss';
import MobileMenu from './MobileMenu';
import ResumeButton from './ResumeButton';
import Logo from '../Logo/Logo';
import { ViewportContext } from '@/context/viewport.context';

export default function Header() {
  const { viewportWidth, viewportHeight } = useContext(ViewportContext);
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
  }, [viewportWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionPositions.length === 0) {
        return updateSectionPositions();
      }

      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        viewportHeight / 2;

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
  }, [sectionPositions, viewportHeight]);

  const menuBreakpoint = 600;

  return (
    <header className={styles.header}>
      <ContentWrapper className={styles.wrapper}>
        {viewportWidth <= menuBreakpoint && (
          <MobileMenu activeSection={activeSection} />
        )}
        <Logo className={styles.logo} />
        {viewportWidth > menuBreakpoint && (
          <Navigation activeSection={activeSection} />
        )}
        <ResumeButton className={styles.resumeButton} />
      </ContentWrapper>
    </header>
  );
}
