import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import FooterNavigation from '../Footer/Index';
import useTheme from "../../hooks/useTheme";
import CategoryList from './CategoryList'
import ListedItem from './ListedItem'
import ProductAdvertisement from './ProductAdvertisement';

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

// @ts-ignore
const advertisementImage = require("../../images/shoppingFlipkart.jpg")

const Shopping: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    return (
        <View style={style.mainContainer}>
            <View style={style.firstView}>
                <CategoryList />
            </View>
            <View style={style.secondView}>
                <ScrollView style={style.listingItem}>
                    <View style={style.items}>
                        <ListedItem history={history}/>
                    </View>
                    <View style={style.items}>
                        <ListedItem history={history}/>
                    </View>
                    <View style={style.items}>
                        <ProductAdvertisement
                            imageUrl={advertisementImage}
                            label1={constants.advertisement.label1}
                            label2={constants.advertisement.label2}
                            labelBuy={constants.advertisement.labelBuy}
                            onPress={() => {alert("buy")}}
                        />
                    </View>
                    <View style={style.items}>
                        <ListedItem history={history}/>
                    </View>
                    <View style={style.items}>
                        <ListedItem history={history}/>
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
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingLeft: 15,
        paddingRight: 15,
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
