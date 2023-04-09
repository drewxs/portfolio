/**
 * Debounce utility function.
 *
 * @param callback - callback function
 * @param timeout - debounce timeout in milliseconds
 */
export const debounce = (callback: Callback, timeout: number) => {
  let timer: NodeJS.Timeout;

  return (...args: unknown[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(args);
    }, timeout);
  };
};
