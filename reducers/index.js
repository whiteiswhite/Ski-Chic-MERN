import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    errors: errorReducer
});
