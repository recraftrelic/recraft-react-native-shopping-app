import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
