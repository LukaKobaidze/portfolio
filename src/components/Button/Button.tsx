import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  loading,
  disabled,
  children,
  className,
  ...restProps
}: Props) {
  return (
    <button
      className={`${styles.button} ${loading ? styles.loading : ''} ${className}`}
      disabled={loading || disabled}
      {...restProps}
    >
      {loading && <LoadingSpinner className={styles.loadingSpinner} />}
      {children}
    </button>
  );
}
