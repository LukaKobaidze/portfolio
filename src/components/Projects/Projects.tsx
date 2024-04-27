import { useEffect, useRef, useState } from 'react';
import projectsData from './projects.data';
import Description from './Description';
import Visual from './Visual';
import ContentWrapper from '@/components/ContentWrapper';
import styles from './Projects.module.scss';

interface Props {
  windowWidth: number;
  windowHeight: number;
}

export default function Projects(props: Props) {
  const { windowWidth, windowHeight } = props;

  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const [projectPositions, setProjectPositions] = useState<number[]>([]);
  const [projectProgress, setProjectProgress] = useState(0);
  const sectionRef = useRef<HTMLTableSectionElement>(null);

  const updateProjectPositions = () => {
    const firstProject = document.getElementById(projectsData[0].id)!;

    const firstProjectPos =
      firstProject.getBoundingClientRect().top + document.documentElement.scrollTop;

    const positions: number[] = [
      firstProjectPos,
      firstProjectPos + firstProject.clientHeight,
    ];

    for (let i = 1; i < projectsData.length; i++) {
      const project = document.getElementById(projectsData[i].id)!;

      positions.push(
        project.getBoundingClientRect().top +
          document.documentElement.scrollTop +
          project.clientHeight
      );
    }

    setProjectPositions(positions);
  };

  useEffect(() => {
    if (projectPositions.length !== 0) {
      updateProjectPositions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (projectPositions.length === 0) {
        updateProjectPositions();
      }

      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        windowHeight / 2;

      if (
        projectPositions.length > 0 &&
        (centerPos < projectPositions[0] ||
          centerPos > projectPositions[projectPositions.length - 1])
      ) {
        setProjectIndex(null);
      } else {
        const index = projectPositions.findIndex((pos) => {
          return centerPos < pos;
        });

        if (index !== -1) {
          setProjectIndex(index - 1);

          setProjectProgress(
            (centerPos - projectPositions[index - 1]) /
              (projectPositions[index] - projectPositions[index - 1])
          );
        }
      }
    };

    handleScroll();

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [projectPositions, windowHeight]);

  return (
    <section id="projects" className={styles.container} ref={sectionRef}>
      <div
        className={styles.projectBackground}
        style={{
          backgroundColor:
            projectIndex !== null
              ? projectsData[projectIndex].colorLight
              : 'transparent',
        }}
      />

      <ContentWrapper className={styles.wrapper}>
        <div className={styles.title}>
          {projectIndex === null && <div className={styles.titleBackground} />}
          <h2 className={styles.titleText}>Projects</h2>
        </div>
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
                isActive={index === projectIndex}
                className={styles.description}
              />
            ))}
          </div>
          <Visual
            projectIndex={projectIndex}
            projectProgress={projectProgress}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
          />
        </div>
      </ContentWrapper>
    </section>
  );
}
