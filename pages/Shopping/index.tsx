import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, ImageBackground, Text } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import FooterNavigation from '../Footer/Index';
import useTheme from "../../hooks/useTheme";
import HomePageProducts from '../Home/HomePageProducts';
import CategoryList from './CategoryList'
import ListedItem from './ListedItem'

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

// @ts-ignore
const ImagePath = require("../../shopping.jpg")

const Shopping: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    const goToLogin = () => {
        history.push('/login')
    }

    return (
        <View style={style.mainContainer}>
            <CategoryList />
            <ListedItem />
            <ListedItem />
            <ListedItem />

            <ListedItem />
            <FooterNavigation history={history} />
        </View>
    )
};

export default Shopping;

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
