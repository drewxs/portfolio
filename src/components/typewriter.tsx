'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { sleep } from '@/utils';

type TypewriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  linger?: boolean;
  lingerDuration?: number;
};

/**
 * Animates typewriter effects on given text.
 *
 * @param text - The text to type
 * @param delay - Initial delay before typing
 * @param speed - Typing speed in milliseconds
 * @param delay - Animation start delay in milliseconds
 * @param linger - Whether to keep the caret after the text is finished
 * @param lingerDuration - How long to keep the caret after the text is finished
 */
export const Typewriter = ({
  text,
  speed = 50,
  delay = 200,
  linger = false,
  lingerDuration = 1000,
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const type = async () => {
      if (currentText.length < text.length) {
        if (!isTyping) {
          await sleep(delay);
          setIsTyping(true);
        }
        await sleep(speed);
        setCurrentText(text.slice(0, currentText.length + 1));
      }
      if (currentText.length === text.length) {
        await sleep(lingerDuration);
        if (!linger) setIsTyping(false);
      }
    };

    type().catch((err) => console.log(err));
  }, [currentText.length, text, speed, delay, isTyping, linger, lingerDuration]);

  return (
    <>
      <span className={clsx('typewriter', { typing: isTyping })}>{currentText}</span>
      <br />
    </>
  );
};
