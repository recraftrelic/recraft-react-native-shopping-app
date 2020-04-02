import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, ImageBackground, Text, ScrollView } from 'react-native';
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
            <View style={style.firstView}>
                <CategoryList />
            </View>
            <View style={style.secondView}>
                <ScrollView style={style.listingItem}>
                    <View style={style.items}>
                        <ListedItem />
                    </View>
                    <View style={style.items}>
                        <ListedItem />
                    </View>
                    <View style={style.items}>
                        <ListedItem />
                    </View>
                    <View style={style.items}>
                        <ListedItem />
                    </View>
                    <View style={style.items}>
                        <ListedItem />
                    </View>
                </ScrollView>
            </View>
            <FooterNavigation history={history} />
        </View>
    )
};

export default Shopping;

interface Style {
    mainContainer: ViewStyle;
    firstView: ViewStyle;
    secondView: ViewStyle;
    items: ViewStyle;
    listingItem: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
    },
    firstView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    secondView: {
        flex: 8,
        flexDirection: 'row',
        marginBottom: 65
    },
    listingItem: {
        flexDirection: 'column',
    },
    items: {
        flexDirection: 'row',
    }
  
});
