import { useEffect, useRef, useState } from 'react';
import styles from './NavigationAnchor.module.scss';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  text: string;
  active: boolean;
}

export default function NavigationAnchor({
  text,
  active,
  className,
  ...restProps
}: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverCoordinateX, setHoverCoordinateX] = useState<number | null>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setHoverCoordinateX(
        e.clientX - anchorRef.current!.getBoundingClientRect().left
      );
    };

    if (anchorRef.current && isHovering) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <a
      ref={anchorRef}
      className={`${styles.anchor} ${active ? styles.active : ''} ${
        className || ''
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...restProps}
    >
      <span className={styles.anchorText}>{text}</span>

      <span className={styles.anchorGlowEffect} />
      <span
        className={styles.anchorMouseGlowEffect}
        style={
          isHovering
            ? { opacity: 1, transform: `translateX(${hoverCoordinateX}px)` }
            : { opacity: 0, transform: `translateX(${hoverCoordinateX}px)` }
        }
      />
    </a>
  );
}
