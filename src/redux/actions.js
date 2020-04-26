import { INCREMENT, DECREMENT, RESET, ASYNC_MULTI, ASYNC_DIV, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function reset() {
    return {
        type: RESET
    }
}

export function asyncMulti() {
    return function(dispatch) {
        dispatch({ type: DISABLE_BUTTONS })
        setTimeout(() => {
            dispatch({ type: ASYNC_MULTI })
            dispatch({ type: ENABLE_BUTTONS })
        }, 3000)
    }  
}

export function asyncDiv() {
    return function(dispatch) {
        dispatch({ type: DISABLE_BUTTONS })
        setTimeout(() => {
            dispatch({ type: ASYNC_DIV })
            dispatch({ type: ENABLE_BUTTONS })
        }, 3000)
    }  
}

export function changeTheme() {
    return {
        type: CHANGE_THEME
    }
}

