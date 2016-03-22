import * as TYPES from "../actions/TYPES";
import Immutable from "immutable";

const initialState = Immutable.fromJS({
    // NOTE: put the initial state in here

    // A simple string of text used as a sample for this demo.
    sample: null,
    // An object containing information about any errors (i.e. validation or otherwise)
    // that maybe have occurred
    error: null,
    // True if the data is being loaded, false otherwise.
    isLoading: false,
    // True if the data has been loaded, false otherwise.
    isLoaded: false
});

// NOTE: we use Immutable.js to enforce a key concept of working
// with Redux - that state should NEVER be mutated, but instead
// you should create a new state that represents the changes.
// Immutable.js enforces this immutability.
export default function data(state = initialState, action) {
    switch (action.type) {
        case TYPES.DATA.LOAD.BEGIN: {
            return state
                // Indicate that we're isLoading
                .set("isLoading", true)
                .set("isLoaded", false);
        }
        case TYPES.DATA.LOAD.FAILURE: {
            return state
                // We're done isLoading
                .set("isLoading", false)
                // Update the "error" state with the failure
                .set("error", action.error);
        }
        case TYPES.DATA.LOAD.SUCCESS: {
            return state
                // We're done isLoading
                .set("isLoading", false)
                // And we succeeded
                .set("isLoaded", true)
                // There can't be an error when we initially load
                .set("error", false)
                .set("sample", action.result);
        }
        case TYPES.DATA.SAVE.FAILURE: {
            // Update the "error" state with the failure
            return state.set("error", action.error);
        }
        case TYPES.DATA.SAVE.SUCCESS: {
            // Clear out the "error" state and set the value
            return state
                .set("error", false)
                .set("sample", action.result);
        }
    }
    // If nothing mutated the state, we can return the original state.
    return state;
}
