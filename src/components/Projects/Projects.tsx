import { useContext, useRef } from 'react';
import { ViewportContext } from '@/context/viewport.context';
import projectsData from './projects.data';
import Description from './Description';
import Visual from './Visual';
import ContentWrapper from '@/components/ContentWrapper';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Projects.module.scss';
import ProgressBar from './ProgressBar';

interface Props {
  activeProject: number | null;
  activeProjectProgress: number;
  onScrollToProject: (activeProject: number) => void;
}

export default function Projects(props: Props) {
  const { activeProject, activeProjectProgress, onScrollToProject } = props;

  const { viewportWidth } = useContext(ViewportContext);
  const sectionRef = useRef<HTMLTableSectionElement>(null);

  return (
    <section id="projects" className={styles.container} ref={sectionRef}>
      <div
        className={styles.projectBackground}
        style={{
          backgroundColor:
            activeProject !== null
              ? projectsData[activeProject].colorLight
              : 'transparent',
        }}
      />

      {viewportWidth <= 800 && activeProject !== null && (
        <div
          className={styles.mobileBackgroundGlow}
          style={
            { '--rgb': projectsData[activeProject].color } as React.CSSProperties
          }
        />
      )}

      <ContentWrapper className={styles.wrapper}>
        <SectionHeading
          backgroundGlow={activeProject === null}
          classNameContainer={styles.heading}
        >
          Projects
        </SectionHeading>
        <div className={styles.projects}>
          <div className={styles.descriptions}>
            {projectsData.map((project, index) => (
              <Description
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                color={project.color}
                isActive={index === activeProject}
                projectIndex={index}
                onScrollToProject={onScrollToProject}
                className={styles.description}
              />
            ))}
          </div>

          {viewportWidth > 800 && (
            <Visual
              activeProject={activeProject}
              activeProjectProgress={activeProjectProgress}
              onScrollToProject={onScrollToProject}
            />
          )}
        </div>
      </ContentWrapper>
      {viewportWidth <= 800 && activeProject !== null && (
        <div
          className={styles.progressBarWrapper}
          style={{
            borderTop: `1px solid rgba(${projectsData[activeProject].color}, .3)`,
          }}
        >
          <ProgressBar
            activeProject={activeProject}
            activeProjectProgress={activeProjectProgress}
            onScrollToProject={onScrollToProject}
            className={styles.progressBar}
          />
        </div>
      )}
    </section>
  );
}
