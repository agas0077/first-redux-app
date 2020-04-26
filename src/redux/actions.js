import { INCREMENT, DECREMENT, RESET, ASYNC_MULTI, ASYNC_DIV, CHANGE_THEME } from "./types";

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
        setTimeout(() => {
            dispatch({ })
            return dispatch({ type: ASYNC_MULTI })
        }, 1000)
    }  
}

export function asyncDiv() {
    return function(dispatch) {
        setTimeout(() => {
            return dispatch({ type: ASYNC_DIV })
        }, 1000)
    }  
}

export function changeTheme() {
    return {
        type: CHANGE_THEME
    }
}

