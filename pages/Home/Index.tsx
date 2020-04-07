import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, ImageBackground, Text, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import FooterNavigation from '../Footer/Index';
import useTheme from "../../hooks/useTheme";
import HomePageProducts from './HomePageProducts';

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
    const theme: AppTheme = useTheme();

    const gotoProducts = () => {
        history.push('/shopping')
    }
 
    return (
        <View style={style.mainContainer}>
            <View style={style.fistView}>
                <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
                    <View style={style.fistViewContent}>
                        <Text style={[style.fistViewText, { color: theme.labelBgColor }]}>{constants.homePage.labelFashion}</Text>
                        <Text style={[style.fistViewText, { color: theme.labelBgColor }]}>{constants.homePage.labelSave}</Text>
                        <RoundButton buttonStyle={[style.fistViewButton, { backgroundColor: theme.dangerColor, borderColor: theme.dangerColor }]} labelStyle={{ fontSize: 17, color: theme.labelBgColor }} label={constants.labelCheck} onPress={gotoProducts} />
                    </View>
                </ImageBackground>
            </View>
            <HomePageProducts history={history}/>
            <FooterNavigation history={history} />
        </View>
    )
};

export default Home;

interface Style {
    mainContainer: ViewStyle;
    fistView: ViewStyle;
    fistViewButton: ViewStyle;
    fistViewText: TextStyle;
    fistViewContent: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
    },
    fistView: {
        flex: 3,
        height: '100%',
    },
    fistViewText: {
        fontSize: 35,
        fontWeight: '900',
    },
    fistViewButton: {
        maxWidth: 180,
        textAlign: 'center',
        minWidth: 230,
    },
    fistViewContent: {
        position: 'absolute',
        bottom: 30,
        left: 20,
    },
});
