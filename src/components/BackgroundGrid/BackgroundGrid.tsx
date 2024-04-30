import { useContext, useMemo } from 'react';
import styles from './BackgroundGrid.module.scss';
import { ViewportContext } from '@/context/viewport.context';

export default function BackgroundGrid() {
  const { viewportWidth, viewportHeight } = useContext(ViewportContext);

  const boxSize = viewportWidth <= 675 ? viewportWidth / 6 : 130;

  const generatedBoxes = useMemo(() => {
    const output: JSX.Element[] = [];

    const boxesAmount =
      Math.floor(viewportWidth / boxSize) * Math.floor(viewportHeight / boxSize);

    for (let i = 0; i < boxesAmount; i++) {
      output.push(<div key={i} className={styles.box} />);
    }

    return output;
  }, [viewportWidth, viewportHeight, boxSize]);

  return (
    <div
      className={styles.container}
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${boxSize}px, 1fr))` }}
    >
      {generatedBoxes}
    </div>
  );
}
