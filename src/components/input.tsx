"use client";

import clsx from "clsx";
import { HTMLProps, useState } from "react";

type Props = HTMLProps<HTMLInputElement> &
  HTMLProps<HTMLTextAreaElement> & {
    type: string;
    fullwidth?: boolean;
    multiline?: boolean;
  };

export const Input = ({ type, label, required, fullwidth, multiline, ...props }: Props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (!props.value) setFocused(false);
  };

  return (
    <div className={clsx("input", props.className, { focused, fullwidth })}>
      <label className="input-label" htmlFor={props.name}>
        {label}
        <span className="input-label__required">{required && " *"}</span>
      </label>
      <div className="input-base">
        {!multiline ? (
          <input
            id={props.name}
            className="input-field"
            type={type}
            {...props}
            onChange={(e) => {
              props.onChange?.(e);
              if (!focused) setFocused(!!e.target.value);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : (
          <textarea
            id={props.name}
            className="input-field"
            {...props}
            onChange={(e) => {
              props.onChange?.(e);
              if (!focused) setFocused(!!e.target.value);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
      </div>
    </div>
  );
};
