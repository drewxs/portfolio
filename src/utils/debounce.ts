/**
 * Debounce utility function.
 *
 * @param callback - callback function
 * @param timeout - debounce timeout in milliseconds
 */
export const debounce = (callback: (...args: unknown[]) => unknown, timeout: number) => {
  let timer: NodeJS.Timeout;

  return (...args: unknown[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(args);
    }, timeout);
  };
};
