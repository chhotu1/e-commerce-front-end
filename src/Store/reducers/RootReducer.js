import { combineReducers } from 'redux';
import categoryReducer  from './CategoryReducer';
import ProductReducer  from './ProductReducer';
import userReducer from './UserReducer';
import leave from './LeaveReducer';
import notification from './NotificationReducer';

const rootReducer = combineReducers({
   category: categoryReducer,
   user: userReducer,
   product:ProductReducer,
   leave,
   notification
});

export default rootReducer;