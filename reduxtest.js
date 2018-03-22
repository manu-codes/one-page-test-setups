

console.log('\n\n\n***************************START***************************\n\n')
const { createStore, combineReducers, applyMiddleware } = require('redux')

const aReducer = (state, action) => {
    switch (action.type) {
        case 'A':
            {
                return { ...state };
            }
        default: return state;
    }
    return state;
}

const bReducer = (state, action) => {
    switch (action.type) {
        case 'B':
            {
                return { ...state };
            }
        default: return state;
    }
    return state;
}

const configureStore = (initialState) => {


    let rootReducer = combineReducers({ a: aReducer, b: bReducer });
    console.log('configureStore', initialState);
    const str = createStore(aReducer, initialState);
    return str;
};


const store = configureStore({});

console.log('store', store);

store.subscribe(() => {

    console.log(store.getState());

});
