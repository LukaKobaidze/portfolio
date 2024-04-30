import { useContext, useEffect, useState } from 'react';
import { ViewportContext } from '@/context/viewport.context';
import { navSections } from '@/components/Header/header.data';
import projectsData from '@/components/Projects/projects.data';

export default function useScrollState() {
  const { viewportWidth, viewportHeight } = useContext(ViewportContext);
  const [sectionPositions, setSectionPositions] = useState<number[]>([]);
  const [projectPositions, setProjectPositions] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeProjectProgress, setActiveProjectProgress] = useState(0);

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
    updateProjectPositions();
    updateSectionPositions();
  }, [viewportWidth, viewportHeight]);

  useEffect(() => {
    const handleSection = () => {
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

    const handleProject = () => {
      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        viewportHeight / 2;

      if (
        projectPositions.length > 0 &&
        (centerPos < projectPositions[0] ||
          centerPos > projectPositions[projectPositions.length - 1])
      ) {
        setActiveProject(null);
      } else {
        const index = projectPositions.findIndex((pos) => {
          return centerPos < pos;
        });

        if (index !== -1) {
          setActiveProject(index - 1);

          setActiveProjectProgress(
            (centerPos - projectPositions[index - 1]) /
              (projectPositions[index] - projectPositions[index - 1])
          );
        }
      }
    };

    const onScroll = () => {
      handleSection();
      handleProject();
    };

    onScroll();

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionPositions, projectPositions]);

  const onScrollToProject = (activeProject: number) => {
    window.scroll({
      top:
        projectPositions[activeProject] +
        (projectPositions[activeProject + 1] - projectPositions[activeProject]) / 2 -
        viewportHeight / 2,
    });
  };

  return {
    activeSection,
    activeProject,
    activeProjectProgress,
    onScrollToProject,
  };
}
