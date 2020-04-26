import './styles.css'
import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, reset, asyncMulti, asyncDiv, changeTheme } from './redux/actions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const container = document.querySelector('.container')
const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const resetBtn = document.getElementById('reset');
const asyncMultiBtn = document.getElementById('asyncMulti');
const asyncDivBtn = document.getElementById('asyncDiv');
const themeBtn = document.getElementById('theme');

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

container.addEventListener('click', (event) => {
    switch (event.target) {
        case addBtn: 
            store.dispatch(increment())
            break
        case subBtn: 
            store.dispatch(decrement())
            break
        case resetBtn: 
            store.dispatch(reset())
            break
        case asyncMultiBtn:
            store.dispatch(asyncMulti())
            break
        case asyncDivBtn:
            store.dispatch(asyncDiv())
            break
        case themeBtn:
            store.dispatch(changeTheme())
    }
})

store.subscribe(() => {
    const state = store.getState()

    counter.textContent = state.counter;
    document.body.className = state.theme;
    [addBtn, subBtn, asyncMultiBtn, asyncDivBtn, resetBtn].forEach((btn) => {
        if (state.buttons.disabled === false) {
            btn.removeAttribute('disabled')
        } else {
            btn.setAttribute('disabled', state.buttons.disabled)
        }
    })
})

store.dispatch({ type: "__INIT-APP__" })