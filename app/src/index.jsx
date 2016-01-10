import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App'
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import io from 'socket.io-client';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote:{
            pair: ['Sunshine', '28 Days Later'],
            tally: {Sunshine: 2}
        }
    }
});

const socket = io("${location.protocol}//${location.hostname}:8090");

const routes = <Route component={App}>
    <Route path="/results" component={Results} />
    <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
    //<Voting pair={pair} />,
    //<Router>{routes}</Router>,
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);