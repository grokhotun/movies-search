import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ErrorBoundry } from '@components';

import App from './components/App/App';

import store from './redux/store';

import '@/styles/index.scss';

ReactDOM.render( 
    <Provider store={store}>
        <ErrorBoundry>
            <App/>
        </ErrorBoundry>
    </Provider>, document.querySelector('#root'));

