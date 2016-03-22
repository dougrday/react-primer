import * as TYPES from "./TYPES";
import { AsyncAction } from "./base";

export function load() {
	return AsyncAction(TYPES.DATA.LOAD, () => {
		// Simulate loading test data asynchronously
		return new Promise((resolve, reject) => {
			// Simulate a 3-second delay in loading
			window.setTimeout(() => resolve("test data"), 3000);
		});
	});
}

export function save(data) {
	return AsyncAction(
		TYPES.DATA.SAVE,
		// No simulated delay here, just pass the data through
		() => data,
		// Validation
		state => {
			// An example of disallowing numbers in the data
			if (/\d/g.test(data)) {
				return { error: "Sorry, numbers are not allowed." };
			}
			return true;
		}
	);
}
