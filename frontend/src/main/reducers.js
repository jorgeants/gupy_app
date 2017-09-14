import { combineReducers } from 'redux'
import starshipReducer from '../starship/starshipReducer'

const rootReducer = combineReducers({
    starship: starshipReducer
})

export default rootReducer