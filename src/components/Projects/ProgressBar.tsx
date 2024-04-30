import projectsData from './projects.data';
import styles from './ProgressBar.module.scss';

interface Props {
  activeProject: number | null;
  activeProjectProgress: number;
  onScrollToProject: (projectIndex: number) => void;
  className?: string;
}

export default function ProgressBar(props: Props) {
  const { activeProject, activeProjectProgress, onScrollToProject, className } =
    props;

  return (
    <div className={`${styles['progress']} ${className || ''}`}>
      {projectsData.map((project, i) => (
        <div
          key={i}
          className={`${styles['progress__bar']} ${
            activeProject !== null
              ? i === activeProject
                ? styles['progress__bar--active']
                : ''
              : ''
          }`}
          style={
            i < (activeProject || 0)
              ? { backgroundColor: `rgb(${project.color})` }
              : undefined
          }
          onClick={() => onScrollToProject(i)}
        >
          <span className={styles['progress__bar-title']}>{project.title}</span>
          <div className={styles['progress__bar-fill-wrapper']}>
            {i === activeProject && (
              <div
                className={styles['progress__bar-fill']}
                style={
                  {
                    '--filled': activeProjectProgress,
                    backgroundColor: `rgb(${project.color})`,
                  } as React.CSSProperties
                }
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
