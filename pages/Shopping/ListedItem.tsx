import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TextStyle, Image, Text, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import Product from './Product';

interface Props extends RouteComponentProps { 
    history?: any,
}

const productList = [
    {
        name: "Top heavy bag",
        price: 20,
        currency: '$'
    },
    {
        name: "Top heavy bag",
        price: 30,
        currency: '$',
    },
    {
        name: "Top heavy bag",
        price: 40,
        currency: '$',
    }
]

// @ts-ignore
const ImagePath = require("../../shopping.jpg");


const Shopping: React.FunctionComponent<Props> = ({
    history,
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const goToDetails = () => {
        history.push("/productDetails")
    }
    return (
        <View style={style.newItemList}>
            <View style={style.newItemListLabel}>
                <Text style={[style.leftLabel, { color: theme.labelBgColor }]}>{constants.homePage.productLabel}</Text>
            </View>
            <View style={style.newItemBoxContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {productList.map((res, index) => {
                        return (<View key={index}>
                            <Product 
                                imageUrl= {ImagePath}
                            />
                            <View style={style.productInfo}>
                                <Text style={style.productInfoText}>{res.name}</Text>
                                <Text style={[style.productInfoText, { color: 'red' }]}>Price {res.currency + res.price}</Text>
                            </View>
                        </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
};

export default Shopping;

interface Style {
    secondView: ViewStyle;
    typeList: ViewStyle;
    newItemListLabel: ViewStyle;
    newItemList: ViewStyle;
    typeListTab: ViewStyle;
    leftLabel: TextStyle;
    rightLabel: TextStyle;
    newItemBoxContainer: ViewStyle;
    productInfo: ViewStyle;
    productInfoText: TextStyle;
}

const style: Style = StyleSheet.create<Style>({

    secondView: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    typeList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 10,
    },
    typeListTab: {
        textAlign: 'center',
        minWidth: 120,
    },
    newItemList: {
        flex: 2,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 10,
        height: 210
    },
    newItemListLabel: {
        flex: 1,
        flexDirection: 'row',
    },
    leftLabel: {
        flex: 1,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'left',
        textTransform: 'capitalize',
        paddingLeft: 5,
    },
    rightLabel: {
        flex: 1,
        textAlign: 'right',
        justifyContent: 'center',
        paddingTop: 10,
        paddingRight: 5,
    },
    newItemBoxContainer: {
        flex: 5,
        overflow: 'hidden',
    },
    productInfo: {
        paddingLeft: 6,
        paddingRight: 8,
        fontSize: 20,
    },
    productInfoText: {
        fontSize: 16,
        fontWeight: 'normal',
    }
});
