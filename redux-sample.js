const redux =  require('redux');
const createStore = redux.createStore;
const initialState = {
  counter : 0
};


//Reducer - performs the action to modify the store
const reducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

//Store
const store = createStore(reducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('Sub', store.getState());
})

//Dispatcher
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());

