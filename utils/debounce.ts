/**
 * Debounce utility function.
 *
 * @param callback - callback function
 * @param timeout - debounce timeout in milliseconds
 */
export const debounce = (callback: Function, timeout: number) => {
  let timer: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
