import { SvgCopy } from '@/assets';
import Tooltip from '../Tooltip';
import styles from './Field.module.scss';

type Props = (
  | ({ type: 'textarea' } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({
      type: 'text' | 'email' | 'copy';
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>)
) & { error?: boolean };

export default function Field(props: Props) {
  if (props.type === 'textarea') {
    const { error, className, ...restProps } = props;

    return (
      <textarea
        className={`${styles.field} ${styles.textarea} ${
          error ? styles.error : ''
        } ${className || ''}`}
        {...restProps}
      />
    );
  } else if (props.type === 'copy') {
    const { className, ...restProps } = props;

    const handleCopy = () => {
      
    }

    return (
      <div className={`${styles.copyWrapper} ${className || ''}`}>
        <input
          className={`${styles.field} ${styles.copy}`}
          readOnly
          {...restProps}
        />
        <Tooltip
          position="top"
          text="Copy"
          showOnHover
          className={styles.copyButtonWrapper}
        >
          <button className={styles.copyButton} aria-label="Copy">
            <SvgCopy />
          </button>
        </Tooltip>
      </div>
    );
  } else {
    const { error, className, ...restProps } = props;

    return (
      <input
        className={`${styles.field} ${error ? styles.error : ''} ${className || ''}`}
        {...restProps}
      />
    );
  }
}
