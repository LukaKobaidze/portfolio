import styles from './SectionHeading.module.scss';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  backgroundGlow?: boolean;
  classNameContainer?: string;
}

export default function SectionHeading({
  backgroundGlow,
  classNameContainer,
  className,
  children,
  ...restProps
}: Props) {
  return (
    <div className={`${styles.title} ${classNameContainer}`}>
      {backgroundGlow && <div className={styles.titleBackground} />}
      <h2 className={`${styles.titleText} ${className || ''}`} {...restProps}>
        {children}
      </h2>
    </div>
  );
}
