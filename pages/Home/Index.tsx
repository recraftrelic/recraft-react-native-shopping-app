import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { AppConstants } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterNavigation from '../Footer/Index';

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

// @ts-ignore
const ImagePath = require("../../shopping.jpg")

const Home: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();

    const goToLogin = () => {
        history.push('/login')
    }

    const backButton = () => {
        history.push('/')
    }

    return (
        <View style={style.mainContainer}>
            <View style={style.fistView}>
                <ImageBackground source={ImagePath} style={{ width: '100%', height: 500 }} >
                    <RoundButton buttonStyle={style.fistViewButton} labelStyle={{fontSize: 17}} label="CHECK" onPress={goToLogin} />

                </ImageBackground>
            </View>
            <View style={style.secondView}>
                <Text style={style.secondViewText}>{"Pending Listing"}</Text>
            </View>
            <FooterNavigation />
        </View>

    )
};

export default Home;

interface Style {
    mainContainer: ViewStyle;
    fistView: ViewStyle;
    secondView: ViewStyle;
    fistViewButton: ViewStyle;
    secondViewText: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        height: '100%',
        width: '100%',
        padding: 0,
        margin: 0,
    },
    fistView: {
        height: '50%',
        width: '100%'
    },
    secondView: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
    },
    secondViewText : {
        fontSize: 27
    },
    fistViewButton: {
        backgroundColor: '#e13e3d',
        maxWidth: 170,
        borderColor: '#e13e3d',
        textAlign: 'center',
        minWidth: 170,
        position: 'absolute',
        left: 20,
        top: 400
    }
});
