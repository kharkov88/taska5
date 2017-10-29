import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory} from 'react-router';
import {Post} from './components/post'
import {syncHistoryWithStore} from 'react-router-redux'


import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redux/reducer'
import {getNews} from './redux/actions'


const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(logger,thunk)
)
const history = syncHistoryWithStore(browserHistory,store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/:dinamic" component={Post} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
