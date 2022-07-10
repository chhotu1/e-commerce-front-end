import { combineReducers } from 'redux';
import categoryReducer  from './CategoryReducer';
import postReducer from './PostReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
   category: categoryReducer,
   post: postReducer,
   user: userReducer
});

export default rootReducer;