'use client';

import clsx from 'clsx';
import { HTMLProps, useState } from 'react';

type InputProps = HTMLProps<HTMLInputElement> &
  HTMLProps<HTMLTextAreaElement> & {
    type: string;
    fullwidth?: boolean;
    multiline?: boolean;
  };

export const Input = (props: InputProps) => {
  const [focused, setFocused] = useState(false);
  const { type, value, name, label, required, fullwidth, multiline, ...rest } = props;

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (!value) setFocused(false);
  };

  return (
    <div className={clsx('input', props.className, { focused, fullwidth }, { focused: value })}>
      <label className='input-label' htmlFor={name}>
        {label}
        <span className='input-label__required'>{required && ' *'}</span>
      </label>
      <div className='input-base'>
        {!multiline ? (
          <input
            className='input-field'
            type={type}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        ) : (
          <textarea className='input-field' value={value} {...rest} onFocus={handleFocus} onBlur={handleBlur} />
        )}
      </div>
    </div>
  );
};
