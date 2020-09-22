import counterReducer from "./counter"
import userReducer from "./user"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  counterReducer,
  userReducer
})

export default allReducers
