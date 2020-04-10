import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Text, View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../hooks/useTheme';

interface Props extends RouteComponentProps {
    history?: any
}

// @ts-ignore
const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png")

const FooterNavigation: React.FunctionComponent<Props> = ({
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

    const goToShopping = () => {
        history.push('/shopping')
    }

    const goToBag = () => {
        history.push('/bag')
    }

    const goToDetails = () => {
        history.push("/productDetails")
    }

    const goToProfile = () => {
        history.push("/profile")
    }

    return (
        <View style={[style.container, {borderColor: theme.lightBottomColor, backgroundColor: theme.backgroundColor}]}>
            <TouchableOpacity onPress={backButton}>
                <View style={style.iconContainer}>
                    <Icon name="home" size={30} color={theme.appColor} style={[style.Icon]} />
                    <Text style={[style.IconTitle, { color: theme.appColor }]}>{"Home"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToShopping}>
                <View style={style.iconContainer}>
                    <Icon name="shopping-cart" size={30} color={theme.lightTextColor} style={[style.Icon]} />
                    <Text style={[style.IconTitle, {color: theme.lightTextColor}]}>{"Shop"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToBag}>
                <View style={style.iconContainer}>
                    <Icon name="shopping-bag" size={30} color={theme.lightTextColor} style={style.Icon} />
                    <Text style={[style.IconTitle, {color: theme.lightTextColor}]}>{"Bag"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert("favorites")}}>
                <View style={style.iconContainer}>
                    <Icon name="heart" size={30} color={theme.lightTextColor} style={[style.Icon]} />
                    <Text style={[style.IconTitle, {color: theme.lightTextColor}]}>{"Favorites"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProfile}>
                <View style={[style.iconContainer, { backgroundColor: 'transparent' }]}>
                    <Icon name="user" size={30} color={theme.lightTextColor} style={style.Icon} />
                    <Text style={[style.IconTitle, {color: theme.lightTextColor}]}>{"Profile"}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default FooterNavigation;

interface Style {
    IconTitle: TextStyle;
    container: ViewStyle;
    title: TextStyle;
    Icon: TextStyle;
    iconContainer: ViewStyle;
    containerBg: ViewStyle;
    containerImage: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        position: 'absolute',
        paddingTop: 8,
        paddingBottom: 8,
        bottom: 0,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 2,
    },
    iconContainer: {
        alignItems: 'center'
    },
    Icon: {
        fontSize: 30,
    },
    IconTitle: {
        fontSize: 12,
    }
});
