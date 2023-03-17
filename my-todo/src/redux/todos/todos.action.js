import axios from "axios";
import { todo_error, todo_loaading, todo_sucess } from "./todos.action.types";

export const Acess_Todos  = (query) => async(dispatch) => {
    dispatch({type: todo_loaading});
    try{
        
        let res =  await axios.get(`https://jsonplaceholder.typicode.com/todos?q=${query}`)
            dispatch({type:todo_sucess ,payload:res});
                return res;
        }
        catch(e) {
            dispatch({type: todo_error});
        }
}