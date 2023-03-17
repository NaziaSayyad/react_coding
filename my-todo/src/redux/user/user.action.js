import axios from "axios";
import { user_error, user_loaading, user_sucess } from "./user.action.types";

export const Acess_User  = (id) => async(dispatch) => {
    dispatch({type: user_loaading});
    try{
        console.log(id, "in-redux")
        let res =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type:user_sucess ,payload:res.data});
                return res;
        }
        catch(e) {
            dispatch({type: user_error});
        }
}