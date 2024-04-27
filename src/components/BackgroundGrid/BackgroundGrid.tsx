import { useMemo } from 'react';
import styles from './BackgroundGrid.module.scss';

const boxSize = 110;

interface Props {
  windowWidth: number;
  windowHeight: number;
}

export default function BackgroundGrid({ windowWidth, windowHeight }: Props) {
  const generatedBoxes = useMemo(() => {
    const output: JSX.Element[] = [];

    const boxesAmount =
      Math.floor(windowWidth / boxSize) * Math.floor(windowHeight / boxSize);

    for (let i = 0; i < boxesAmount; i++) {
      output.push(<div className={styles.box} />);
    }

    return output;
  }, [windowWidth, windowHeight]);

  return <div className={styles.container}>{generatedBoxes}</div>;
}
