import { useContext, useMemo } from 'react';
import styles from './BackgroundGrid.module.scss';
import { ViewportContext } from '@/context/viewport.context';

const boxSize = 110;

export default function BackgroundGrid() {
  const { viewportWidth, viewportHeight } = useContext(ViewportContext);

  const generatedBoxes = useMemo(() => {
    const output: JSX.Element[] = [];

    const boxesAmount =
      Math.floor(viewportWidth / boxSize) * Math.floor(viewportHeight / boxSize);

    for (let i = 0; i < boxesAmount; i++) {
      output.push(<div key={i} className={styles.box} />);
    }

    return output;
  }, [viewportWidth, viewportHeight]);

  return <div className={styles.container}>{generatedBoxes}</div>;
}
