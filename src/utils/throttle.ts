/**
 * Throttle utility function.
 *
 * @param callback - callback function
 * @param timeout - throttle timeout in milliseconds
 */
export const throttle = (callback: (...args: unknown[]) => unknown, timeout: number) => {
  let ready = true;

  return (...args: unknown[]) => {
    if (!ready) return;
    ready = false;
    callback(args);

    setTimeout(() => {
      ready = true;
    }, timeout);
  };
};
