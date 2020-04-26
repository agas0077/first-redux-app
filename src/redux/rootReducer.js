import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, RESET, ASYNC_MULTI, ASYNC_DIV, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types";

export function counterReducer(state = 2, action) {
    switch (action.type) {
        case INCREMENT: 
            return state + 1;
        case DECREMENT: 
            return state - 1;
        case RESET: 
            return 0;
        case ASYNC_MULTI:
            return Math.floor(state * Math.random() * 10);
        case ASYNC_DIV:
            return Math.floor(state / (Math.random() * 10))
        default: return state
    }
}

const initialStateTheme = 'light'

export function themeReducer(state = initialStateTheme, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return state === 'light' ? 'dark' : 'light'
        default: return state
    }
}

const initialStateButtons = {
    disabled: false,
}

export function buttonsReducer(state = initialStateButtons, action) {
    switch (action.type) {
        case DISABLE_BUTTONS: 
            return {
                disabled: true,
            }
        case ENABLE_BUTTONS: 
            return {
                disabled: false,
            }
        default: return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    buttons: buttonsReducer,
})