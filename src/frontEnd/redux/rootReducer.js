import { combineReducers } from 'redux'
import { coinReducer } from './currencyList/currencyListReducer';


const rootReducer = combineReducers({
    coinState : coinReducer
})

export default rootReducer;