// Action 

export const increase = () =>{
    return{
        type: "INCREASE",
        payload: 2
    }
} 

// Dispatch  actionの受け取りとstoreへ送る
import {useDispatch} from 'react-redux'

const dispatch = useDispatch();

const countUp = () => {
    dispatch(increase());
}
<button onClick={countUp}>countUp</button>

// Reducer 

export const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case "INCREASE":
        return state + action.payload;
        case "DECREASE":
        return state - action.payload;
        default:
        return state;
    }
}

// store 
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        count: counterReducer,
        todo: todoReducer
    }
});

export default store;

// Provider

import Counter from "./components/Counter";
import { Provider } from 'react-redux';
import store from "./store"

const App = () => {
    return(
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}
export default App;

// Selector

import {useSelector} from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.count);

    return <div>{count}</div>
} 

export default Counter