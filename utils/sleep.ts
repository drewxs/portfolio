/**
 * Delay for a given number of milliseconds.
 *
 * @function
 * @param ms - time in milliseconds
 * @returns promise that resolves after ms milliseconds
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
