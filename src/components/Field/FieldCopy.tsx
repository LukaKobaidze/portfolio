import { useEffect, useState } from 'react';
import fieldStyles from './Field.module.scss';
import Tooltip from '../Tooltip';
import { SvgCopy } from '@/assets';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function FieldCopy({ className, ...restProps }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!restProps.value) return;

    navigator.clipboard.writeText(String(restProps.value)).then(() => {
      setCopied(true);
    });
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <div className={`${fieldStyles.copyWrapper} ${className || ''}`}>
      <input
        className={`${fieldStyles.field} ${fieldStyles.copy}`}
        readOnly
        {...restProps}
      />
      <Tooltip
        position="top"
        text={copied ? 'Copied!' : 'Copy'}
        showOnHover
        className={fieldStyles.copyButtonWrapper}
      >
        <button
          className={fieldStyles.copyButton}
          aria-label="Copy"
          onClick={() => handleCopy()}
        >
          <SvgCopy className={fieldStyles.copyButtonIcon} />
        </button>
      </Tooltip>
    </div>
  );
}
