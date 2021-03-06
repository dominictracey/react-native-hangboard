import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import enhancers from './enhancers';
import middleware from './middleware';
import reducer from './reducer';
import persist from '../utils/persist'
const enhanced = [
  applyMiddleware(...middleware),
  ...enhancers,
  reduxLoop.install()
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */

const composeEnhancers = compose(__DEV__ &&
                                global.window &&
                                global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhanced);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

persist(store, () => console.log('store loaded'))

export default store;
