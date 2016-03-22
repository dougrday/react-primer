export function ActionType(name) {
    return `nerdfest-${name}`;
}

export function AsyncActionType(name) {
    return {
        BEGIN: `nerdfest-${name}-begin`,
        SUCCESS: `nerdfest-${name}-success`,
        FAILURE: `nerdfest-${name}-failure`
    };
}
