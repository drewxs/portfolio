/**
 * Throttle utility function.
 *
 * @param callback - callback function
 * @param timeout - throttle timeout in milliseconds
 */
export const throttle = (callback: Function, timeout: number): Function => {
	let ready: boolean = true;

	return (...args: any) => {
		if (!ready) return;
		ready = false;
		callback(...args);

		setTimeout(() => {
			ready = true;
		}, timeout);
	};
};
