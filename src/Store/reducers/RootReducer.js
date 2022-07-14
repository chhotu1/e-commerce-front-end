import { combineReducers } from 'redux';
import categoryReducer  from './CategoryReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
   category: categoryReducer,
   user: userReducer
});

export default rootReducer;