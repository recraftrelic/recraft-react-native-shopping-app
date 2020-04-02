import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterNavigation from '../Footer/Index';
import useTheme from "../../hooks/useTheme";

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

const typeList = ["Woman", "Man", "Kids"]

// @ts-ignore
const ImagePath = require("../../shopping.jpg")

const Home: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();

    const goToLogin = () => {
        history.push('/login')
    }

    const backButton = () => {
        history.push('/')
    }

    return (
        <View style={style.mainContainer}>
            <View style={style.fistView}>
                <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
                    <View style={style.fistViewContent}>
                        <Text style={[style.fistViewText, { color: theme.labelBgColor }]}>{constants.homePage.labelFashion}</Text>
                        <Text style={[style.fistViewText, { color: theme.labelBgColor }]}>{constants.homePage.labelSave}</Text>
                        <RoundButton buttonStyle={[style.fistViewButton, { backgroundColor: theme.dangerColor, borderColor: theme.dangerColor }]} labelStyle={{ fontSize: 17, color: theme.labelBgColor }} label={constants.labelCheck} onPress={goToLogin} />
                    </View>
                </ImageBackground>
            </View>

            <View style={style.secondView}>
                <View style={style.typeList}>
                    {typeList.map(res => {
                        return <RoundButton buttonStyle={[style.typeListTab, { backgroundColor: theme.activeColor, borderColor: theme.activeColor }]} labelStyle={{ fontSize: 17, color: theme.highlightTextColor }} label={res} onPress={goToLogin} />
                    })}
                </View>
                <View style={style.newItemList}>
                    <View style={style.newItemListLabel}>
                        <Text style={[style.leftLabel, { color: theme.labelBgColor }]}>{constants.homePage.productLabel}</Text>
                        <Text style={[style.rightLabel, { color: theme.activeColor }]}>{constants.homePage.labelViewAll}</Text>
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
            </View>
            <FooterNavigation history={history} />
        </View>
    )
};

export default Home;

interface Style {
    itemTitleView: ViewStyle;
    itemTitleText: TextStyle;
    newItemBox: ViewStyle;
    mainContainer: ViewStyle;
    fistView: ViewStyle;
    secondView: ViewStyle;
    fistViewButton: ViewStyle;
    fistViewText: TextStyle;
    fistViewContent: ViewStyle;
    typeList: ViewStyle;
    newItemListLabel: ViewStyle;
    newItemList: ViewStyle;
    typeListTab: ViewStyle;
    newItem: ViewStyle;
    leftLabel: TextStyle;
    rightLabel: TextStyle;
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
    secondView: {
        flex: 2,
        justifyContent: 'flex-start',
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
        paddingBottom: 70,
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
