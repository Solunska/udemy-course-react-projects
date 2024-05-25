import { createStore } from 'redux';

export const INCREMENT = 'increment';

const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        };
    }

    return state;
}

const store = createStore(counterReducer);

export default store;