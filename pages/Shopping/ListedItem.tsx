import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TextStyle, Image, Text, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";

interface Props extends RouteComponentProps { }

const typeList = ["Woman", "Man", "Kids"]

// @ts-ignore
const ImagePath = require("../../shopping.jpg")


const Shopping: React.FunctionComponent<Props> = ({
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    return (
        <View style={style.newItemList}>
            <View style={style.newItemListLabel}>
                <Text style={[style.leftLabel, { color: theme.labelBgColor }]}>{constants.homePage.productLabel}</Text>
            </View>
            <View style={style.newItemBox}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {typeList.map((res, index) => {
                        return (<View key={index}>
                            <Image style={[style.newItem]} source={ImagePath} />
                            <View style={[style.itemTitleView, { backgroundColor: theme.labelBgColor }]}>
                                <Text style={[style.itemTitleText, { color: theme.highlightTextColor }]}>{constants.homePage.productLabel}</Text>
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
    itemTitleView: ViewStyle;
    itemTitleText: TextStyle;
    newItemBox: ViewStyle;
    secondView: ViewStyle;
    typeList: ViewStyle;
    newItemListLabel: ViewStyle;
    newItemList: ViewStyle;
    typeListTab: ViewStyle;
    newItem: ViewStyle;
    leftLabel: TextStyle;
    rightLabel: TextStyle;
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
    },
    newItemListLabel: {
        flex: 1,
        flexDirection: 'row',
    },
    leftLabel: {
        flex: 1,
        fontSize: 25,
        fontWeight: '700',
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
    newItemBox: {
        flex: 5,
        flexDirection: 'row',
        fontSize: 25,
        fontWeight: '900',
        marginTop: 5,
        borderRadius: 15,
        overflow: 'hidden',
    },
    newItem: {
        marginLeft: 6,
        marginRight: 6,
        width: 150,
        height: '100%',
        borderRadius: 15
    },
    itemTitleView: {
        position: 'absolute',
        top: 15,
        left: 15,
        borderRadius: 15,
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemTitleText: {
        fontWeight: '700',
    }
});
