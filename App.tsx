import React, {useEffect} from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
Icon.loadFont()
MaterialIcon.loadFont()

const App: React.FunctionComponent = () => {

    useEffect(() => {
        SplashScreen.hide()
    },[]);

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
