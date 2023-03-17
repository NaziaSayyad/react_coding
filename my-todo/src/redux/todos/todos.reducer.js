import { todo_error, todo_loaading, todo_sucess } from "./todos.action.types";


const intialstate = {
    loading: false,
    data:[],
    error: false
};
export const Todo_Reducer = (state=intialstate,{type,payload}) =>{
    switch(type){
        case todo_loaading:{
            return { ...state, loading: true, error: false };
        }

        case todo_sucess :{
            return{
                ...state,
               data :payload,
               loading:false,
               error:false
            }
        }
        case todo_error :{
            return { ...state, loading: false, error: true };
            
        }

        default:{
            return state;
        }
    }
}