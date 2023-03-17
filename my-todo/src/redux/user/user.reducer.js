import { user_error, user_loaading, user_sucess } from "./user.action.types";

const intialstate = {
    loading: false,
    data:[],
    error: false
};
export const User_Reducer = (state=intialstate,{type,payload}) =>{
    switch(type){
        case user_loaading:{
            return { ...state, loading: true, error: false };
        }

        case user_sucess :{
            return{
                ...state,
               data :payload,
               loading:false,
               error:false
            }
        }
        case user_error:{
            return { ...state, loading: false, error: true };
            
        }

        default:{
            return state;
        }
    }
}