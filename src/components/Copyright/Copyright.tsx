import styles from './Copyright.module.scss';

interface Props {}

export default function Copyright(props: Props) {
  return <div className={styles.copyright}>&copy; 2024 Luka Kobaidze</div>;
}
