import { SvgKeyboardArrowUp } from '@/assets';
import Tooltip from '../Tooltip';
import styles from './ScrollToBeginning.module.scss';

interface Props {
  className: string;
}

export default function ScrollToBeginning({ className }: Props) {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Tooltip
      position="top"
      text="Scroll to the beginning!"
      showOnHover
      className={className || ''}
    >
      <button className={styles.button} onClick={handleButtonClick}>
        <SvgKeyboardArrowUp className={styles.buttonIcon} />
        <SvgKeyboardArrowUp className={styles.buttonIcon} />
      </button>
    </Tooltip>
  );
}
