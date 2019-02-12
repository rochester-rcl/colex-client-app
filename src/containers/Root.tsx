import React, { Component } from 'react';

import { Provider } from 'react-redux';
import Routes from './Routes';
import { IState } from '../constants/types';
import { Store } from 'redux';

export default class Root extends Component<{store: Store}> {
    readonly state: IState = {};
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}