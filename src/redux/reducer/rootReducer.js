import {combineReducers} from 'redux'
import ShopReducer from './ShopReducer'
import SaleReducer from './SaleReducer'

const rootReducer = combineReducers({
    SaleReducer,
    ShopReducer
})

export default rootReducer