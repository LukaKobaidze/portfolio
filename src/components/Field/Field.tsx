import styles from './Field.module.scss';
import FieldCopy from './FieldCopy';

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
    return <FieldCopy {...props} />;
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
