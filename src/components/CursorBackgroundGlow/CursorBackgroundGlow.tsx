import { useEffect, useState } from 'react';
import styles from './CursorBackgroundGlow.module.scss';

interface Props {}

export default function CursorBackgroundGlow(props: Props) {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  if (!coords) return null;

  return (
    <div
      className={styles.backgroundGlow}
      style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }}
    />
  );
}
