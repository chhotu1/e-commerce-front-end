import { combineReducers } from 'redux';
import categoryReducer  from './CategoryReducer';
import ProductReducer  from './ProductReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
   category: categoryReducer,
   user: userReducer,
   product:ProductReducer,
});

export default rootReducer;