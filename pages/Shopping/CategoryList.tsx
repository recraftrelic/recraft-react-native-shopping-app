import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TextStyle, Image, Text, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import useTheme from "../../hooks/useTheme";

interface Props extends RouteComponentProps {}

const typeList = ["Woman", "Man", "Kids"]

// @ts-ignore
const ImagePath = require("../../shopping.jpg")


const CategoryList: React.FunctionComponent<Props> = ({}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    return (
        <View style={style.container}>
            <ScrollView style={style.typeList} horizontal={true} showsHorizontalScrollIndicator={false}>
                {typeList.map((res, index) => {
                    return <RoundButton key={index} buttonStyle={[style.typeListTab, { backgroundColor: theme.activeColor, borderColor: theme.activeColor }]} labelStyle={{ fontSize: 17, color: theme.highlightTextColor }} label={res} onPress={() => {alert(res)}} />
                })}
            </ScrollView>
        </View>
    )
};

export default CategoryList;

interface Style {
    container: ViewStyle;
    typeList: ViewStyle;
    typeListTab: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
 
    container: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    typeList: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    typeListTab: {
        minWidth: 120,
        marginRight: 20,
    }
});
