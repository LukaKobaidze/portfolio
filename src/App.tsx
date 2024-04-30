import BackgroundGrid from './components/BackgroundGrid';
import CursorBackgroundGlow from './components/CursorBackgroundGlow';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToBeginning from './components/ScrollToBeginning';
import Copyright from './components/Copyright';
import styles from './App.module.scss';
import useScrollState from './hooks/useScrollState';

export default function App() {
  const { activeSection, activeProject, activeProjectProgress, onScrollToProject } =
    useScrollState();

  return (
    <>
      <BackgroundGrid />
      <CursorBackgroundGlow />

      <Header activeSection={activeSection} activeProject={activeProject} />
      <main className={styles.main}>
        <AboutMe />
        <Projects
          activeProject={activeProject}
          activeProjectProgress={activeProjectProgress}
          onScrollToProject={onScrollToProject}
        />
        <Contact />
      </main>
      <footer>
        <ScrollToBeginning className={styles.scrollToBeginning} />
        <Copyright />
      </footer>
    </>
  );
}
