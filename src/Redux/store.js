import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../AppReducer/reducer";
import { reducer as AuthReducer } from "../AuthReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AppReducer, AuthReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };


// function outer(a){   //5

//    return function inner(b){  // garbage collector
//         return a + b
//     }
// }

// outer(5)(4)   ==> 9

// const outer = (id,pay) = (dispatch) => {

// }