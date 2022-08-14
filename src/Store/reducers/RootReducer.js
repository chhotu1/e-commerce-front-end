import { combineReducers } from 'redux';
import categoryReducer  from './CategoryReducer';
import ProductReducer  from './ProductReducer';
import userReducer from './UserReducer';
import leave from './LeaveReducer';
import notification from './NotificationReducer';
import timer from './TimerReducer';
import holidays from './HolidaysReducer';

const rootReducer = combineReducers({
   category: categoryReducer,
   user: userReducer,
   product:ProductReducer,
   leave,
   notification,
   timer,
   holidays
});

export default rootReducer;