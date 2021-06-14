import { UPDATE_TOKEN, ActionType } from './types';

export function AccessTokenReducer(state: string = localStorage.getItem('immunify_token') || "", action: ActionType) {
    if (action.type === UPDATE_TOKEN) {
        localStorage.setItem('immunify_token', action.payload);
        return action.payload;
    }

    return state;
}