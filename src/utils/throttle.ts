/**
 * Throttle utility function.
 *
 * @param callback - callback function
 * @param timeout - throttle timeout in milliseconds
 */
export const throttle = (callback: Callback, timeout: number): Callback => {
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
