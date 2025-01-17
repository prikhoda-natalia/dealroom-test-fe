import { configureStore } from '@reduxjs/toolkit'
import companiesReducer from '../../Companies/state/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
