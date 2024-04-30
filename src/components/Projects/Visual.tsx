import { useEffect, useRef, useState } from 'react';
import projectsData from './projects.data';
import ImageResponsive from '@/components/ImageResponsive';
import styles from './Visual.module.scss';
import ContentWrapper from '../ContentWrapper';
import ProgressBar from './ProgressBar';

interface Props {
  activeProject: number | null;
  activeProjectProgress: number;
  onScrollToProject: (projectIndex: number) => void;
}

export default function Visual(props: Props) {
  const { activeProject, activeProjectProgress, onScrollToProject } = props;

  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadedMetadata = () => setIsVideoLoaded(true);

  useEffect(() => {
    setIsVideoLoaded(false);
    videoRef.current?.load();
  }, [activeProject]);

  return (
    <>
      <ContentWrapper className={styles.visualBackgroundWrapper}>
        {projectsData.map((project, indexLocal) => (
          <div
            key={indexLocal}
            className={styles.visualBackground}
            style={{
              backgroundImage: `radial-gradient(
            
              rgb(${project.color}),
              rgba(0, 0, 0, 0)
            )`,
              opacity: indexLocal === activeProject ? 1 : 0,
              animation: indexLocal !== activeProject ? 'none' : undefined,
            }}
          />
        ))}
      </ContentWrapper>

      <div
        className={styles.container}
        style={
          activeProject !== null
            ? ({
                '--rgb-border-color': projectsData[activeProject].color,
              } as React.CSSProperties)
            : undefined
        }
        ref={ref}
      >
        <ProgressBar
          activeProject={activeProject}
          activeProjectProgress={activeProjectProgress}
          onScrollToProject={onScrollToProject}
          className={styles.progressBar}
        />
        {activeProject !== null && <div className={styles.overlay} />}
        <a
          href={activeProject !== null ? projectsData[activeProject].demo : ''}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          <div className={styles.imagesContainer}>
            {projectsData.map((project, index) => (
              <ImageResponsive
                key={index}
                desktop={{ path: `/${project.image}` }}
                tablet={
                  project.imageTablet
                    ? {
                        path: `/${project.imageTablet}`,
                        breakpoint: 900,
                      }
                    : undefined
                }
                alt=""
                className={`${styles.image} ${
                  index !== activeProject ? styles['image--hide'] : ''
                }`}
              />
            ))}
          </div>
          {activeProject !== null && projectsData[activeProject].video && (
            <video
              ref={videoRef}
              className={`${styles.video} ${isVideoLoaded ? styles.show : ''}`}
              onLoadedMetadata={handleLoadedMetadata}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={`/${projectsData[activeProject].video}`}
                type="video/mp4"
              />
            </video>
          )}
        </a>
      </div>
    </>
  );
}
