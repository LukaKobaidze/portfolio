import styles from './LoadingSpinner.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  classNameSpinner?: string;
}

export default function LoadingSpinner({
  classNameSpinner,
  className,
  ...restProps
}: Props) {
  return (
    <div className={`${styles.wrapper} ${className || ''}`} {...restProps}>
      <div className={`${styles.loadingSpinner} ${classNameSpinner || ''}`} />
    </div>
  );
}
