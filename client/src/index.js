import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //provider going to keep track of store which is that global state and that allows us to access that store from anywhere inside of the app,we dont have to be exactly in a parent component or in a child component , we can access any state from anywhere.
import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css';
const store =createStore(reducers,compose(applyMiddleware(thunk)));
ReactDOM.render(
<Provider store={ store} ><App /></Provider>,
document.getElementById('root'));// for connecting dev id to the root
