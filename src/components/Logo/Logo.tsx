import React from 'react';
import styles from './Logo.module.scss';

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Logo({ className, onClick, ...restProps }: Props) {
  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo(0, 0);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={`${styles.logo} ${className || ''}`}
      onClick={handleLogoClick}
      {...restProps}
    >
      LukaKobaidze
    </div>
  );
}
