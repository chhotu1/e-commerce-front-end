import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  
export default store;
