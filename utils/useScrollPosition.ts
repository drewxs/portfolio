import { useEffect, useState } from 'react';

import { throttle } from 'utils';

/**
 * Hook that keeps track of the window scroll position.
 */
export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = (): void => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', () => throttle(updatePosition, 100));
    updatePosition();
    return () => window.removeEventListener('scroll', () => updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
