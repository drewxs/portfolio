import clsx from 'clsx';
import { ReactElement, useState } from 'react';

/**
 * Input wrapper component.
 *
 * @param props - Component props
 */
export const Input = (props: InputProps): ReactElement => {
  const [focused, setFocused] = useState(false);
  const { type, value, name, label, required, fullwidth, multiline, ...rest } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    if (!value) setFocused(false);
  };

  return (
    <div className={clsx('input', props.className, { focused, fullwidth })}>
      <label className='input-label' htmlFor={name}>
        {label}
        <span>{required && ' *'}</span>
      </label>
      <div className='input-base'>
        {!multiline ? (
          <input
            className='input-field'
            type={type}
            value={value}
            {...rest}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : (
          <textarea className='input-field' value={value} {...rest} onFocus={handleFocus} onBlur={handleBlur} />
        )}
      </div>
    </div>
  );
};
