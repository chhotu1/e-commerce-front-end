import { combineReducers } from 'redux';
import categoryReducer  from './CategoryReducer';
import ProductReducer  from './ProductReducer';
import userReducer from './UserReducer';
import leave from './LeaveReducer';

const rootReducer = combineReducers({
   category: categoryReducer,
   user: userReducer,
   product:ProductReducer,
   leave
});

export default rootReducer;