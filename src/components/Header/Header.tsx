import { useContext } from 'react';
import { ViewportContext } from '@/context/viewport.context';
import ContentWrapper from '@/components/ContentWrapper';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import ResumeButton from './ResumeButton';
import Logo from '../Logo';
import styles from './Header.module.scss';

const menuBreakpoint = 600;

interface Props {
  activeSection: number;
}

export default function Header({ activeSection }: Props) {
  const { viewportWidth } = useContext(ViewportContext);

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
