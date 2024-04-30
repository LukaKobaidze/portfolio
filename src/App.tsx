import BackgroundGrid from './components/BackgroundGrid';
import CursorBackgroundGlow from './components/CursorBackgroundGlow';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToBeginning from './components/ScrollToBeginning';
import Copyright from './components/Copyright';
import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <BackgroundGrid />
      <CursorBackgroundGlow />

      <Header />
      <main className={styles.main}>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <footer>
        <ScrollToBeginning className={styles.scrollToBeginning} />
        <Copyright />
      </footer>
    </>
  );
}
