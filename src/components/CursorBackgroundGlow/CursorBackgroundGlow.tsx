import { useEffect, useState } from 'react';
import styles from './CursorBackgroundGlow.module.scss';

export default function CursorBackgroundGlow() {
  const [fadeOut, setFadeOut] = useState(true);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeout);
      setCoords({ x: e.clientX, y: e.clientY });
      setFadeOut(false);

      timeout = setTimeout(() => {
        setFadeOut(true);
      }, 500);
    };

    const handleTouchMove = (e: TouchEvent) => {
      clearTimeout(timeout);

      const touch = e.touches[0] ?? e.changedTouches[0];

      setCoords({ x: touch.clientX, y: touch.clientY });
      setFadeOut(false);

      timeout = setTimeout(() => {
        setFadeOut(true);
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(timeout);
    };
  }, []);

  if (!coords) return null;

  return (
    <div
      className={`${styles.backgroundGlow} ${fadeOut ? styles.fadeOut : ''}`}
      style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }}
    />
  );
}
