import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BTNS, DISABLE_BTNS } from './types'

export function increment() {
    return {
        type: INCREMENT
    }
};

export function decrement() {
    return {
        type: DECREMENT
    }
};

export function asyncIncrement() {
    return function(dispatch) {
        dispatch(disableBtns())
        setTimeout(() => {
            dispatch({ type: INCREMENT })
            dispatch(enableBtns())
        }, 2000)
    }
}; 

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme,
    }
}

export function enableBtns() {
    return {
        type: ENABLE_BTNS,
    }
}

export function disableBtns() {
    return {
        type: DISABLE_BTNS,
    }
}