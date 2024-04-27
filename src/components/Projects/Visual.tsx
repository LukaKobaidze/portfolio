import { useEffect, useRef, useState } from 'react';
import projectsData from './projects.data';
import ImageResponsive from '@/components/ImageResponsive';
import styles from './Visual.module.scss';
import { getImage } from '@/utils/image';
import ContentWrapper from '../ContentWrapper';

interface Props {
  projectIndex: number | null;
  projectProgress: number;
  windowWidth: number;
  windowHeight: number;
}

export default function Visual(props: Props) {
  const { projectIndex, projectProgress, windowWidth, windowHeight } = props;

  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadedMetadata = () => setIsVideoLoaded(true);

  useEffect(() => {
    setIsVideoLoaded(false);
    videoRef.current?.load();
  }, [projectIndex]);

  const handleScrollToProject = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    window.scroll({
      top:
        element.getBoundingClientRect().top +
        window.scrollY -
        (element.clientHeight > windowHeight ? 100 : windowHeight / 2 - 250),
    });
  };

  return (
    <>
      <ContentWrapper className={styles.visualBackgroundWrapper}>
        {projectsData.map((project, indexLocal) => (
          <div
            className={styles.visualBackground}
            style={{
              backgroundImage: `radial-gradient(
            
              rgb(${project.color}),
              rgba(0, 0, 0, 0)
            )`,
              opacity: indexLocal === projectIndex ? 1 : 0,
              animation: indexLocal !== projectIndex ? 'none' : undefined,
            }}
          />
        ))}
      </ContentWrapper>

      <div
        className={styles.container}
        style={
          projectIndex !== null
            ? { borderColor: `rgba(${projectsData[projectIndex].color}, 0.25)` }
            : undefined
        }
        ref={ref}
      >
        <div
          className={`${styles['progress']} ${
            projectIndex === null ? styles['progress--disable'] : ''
          }`}
        >
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={`${styles['progress__bar']} ${
                projectIndex !== null
                  ? i === projectIndex
                    ? styles['progress__bar--active']
                    : ''
                  : ''
              }`}
              style={
                i < (projectIndex || 0)
                  ? { backgroundColor: `rgb(${project.color})` }
                  : undefined
              }
              onClick={() => handleScrollToProject(project.id)}
            >
              <span className={styles['progress__bar-title']}>{project.title}</span>
              <div className={styles['progress__bar-fill-wrapper']}>
                {i === projectIndex && (
                  <div
                    className={styles['progress__bar-fill']}
                    style={
                      {
                        '--filled': projectProgress,
                        backgroundColor: `rgb(${project.color})`,
                      } as React.CSSProperties
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {projectIndex !== null && <div className={styles.overlay} />}
        <a
          href={projectIndex !== null ? projectsData[projectIndex].demo : ''}
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
                  index !== projectIndex ? styles['image--hide'] : ''
                }`}
              />
            ))}
          </div>
          {projectIndex !== null &&
            projectsData[projectIndex].video &&
            windowWidth > 900 && (
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
                  src={`/${projectsData[projectIndex].video}`}
                  type="video/mp4"
                />
              </video>
            )}
        </a>
      </div>
    </>
  );
}
