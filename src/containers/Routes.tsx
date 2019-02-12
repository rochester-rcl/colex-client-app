import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from './App';
import history from '../utils/history';

const Routes = () => (
    <Router history={history}>
        <div className="colex-app-container">
            <Route exact path="/" component={App} />
        </div>
    </Router>
);

export default Routes;