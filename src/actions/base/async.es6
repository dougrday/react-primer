export function AsyncAction(asyncActionType, fn, validateFn) {
    return async (dispatch, getState) => {
        // Indicate that we're beginning the asynchronous action
        dispatch({ type: asyncActionType.BEGIN });

        try {
            // Validate the action first
            let validationResult = null;
            if (typeof validateFn === "function") {
                validationResult = validateFn(getState);
            }

            // If validation succeeded...
            if (validationResult === null || validationResult === undefined || validationResult === true || validationResult.success) {
                // Execute the function and get the result
                let result = fn ? fn(dispatch, getState) : null;
                if (result !== null && typeof result.then === "function") {
                    // Result is a promise.
                    // Await the result
                    result = await result;
                }

                let action = { type: asyncActionType.SUCCESS };
                if (result !== null) {
                    action.result = result;
                }

                // Dispatch a success, with the results of the action
                return dispatch(action);
            }
            else {
                // A validation error occurred
                if (validationResult && validationResult.error) {
                    throw validationResult.error;
                }
                throw "An expected error occurred during validation.";
            }
        }
        catch (ex) {
            // Dispatch a failure, with the exception contents
            return dispatch({
                type: asyncActionType.FAILURE,
                error: ex
            });
        }
    };
}
