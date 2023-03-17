import { legacy_createStore, combineReducers,applyMiddleware, compose } from "redux";
import { Todo_Reducer } from "./todos/todos.reducer";
import thunk from "redux-thunk";


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
        todos: Todo_Reducer
  });
 export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));

  