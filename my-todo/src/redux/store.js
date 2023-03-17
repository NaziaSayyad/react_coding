import { legacy_createStore, combineReducers,applyMiddleware, compose } from "redux";
import { Todo_Reducer } from "./todos/todos.reducer";
import thunk from "redux-thunk";
import { User_Reducer } from "./user/user.reducer";


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
        todos: Todo_Reducer,
        user: User_Reducer,
  });
 export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));

  