import { createStore, combineReducers } from "redux";
import configReducer from "./reducers/config";

const reducer = combineReducers({
    configReducer
})

const store = createStore(
    reducer
)

export default store;
