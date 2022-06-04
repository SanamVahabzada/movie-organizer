import { combineReducers } from "redux";
import listReducer from './reducer/listReducer';

const rootReducer = combineReducers({
    list: listReducer,
});

export default rootReducer;