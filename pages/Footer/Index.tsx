import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { Text, View, ViewStyle, StyleSheet, TextStyle, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props extends RouteComponentProps {
    history?: any
}

// @ts-ignore
const ImagePath = require("../../Recraftsoppify_aap_bg_effect.png")

const FooterNavigation: React.FunctionComponent<Props> = ({
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
        <View style={style.container}>
            <TouchableOpacity onPress={backButton}>
                <View style={[style.iconContainer, { backgroundColor: 'transparent' }]}>
                    <Icon name="home" size={30} style={[style.Icon, { color: '#2b98ea' }]} />
                    <Text style={[style.IconTitle, { color: '#2b98ea' }]}>{"Home"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert("shop") }}>
                <View style={[style.iconContainer, { backgroundColor: 'transparent' }]}>
                    <Icon name="shopping-cart" size={30} style={[style.Icon]} />
                    <Text style={style.IconTitle}>{"Shop"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert("bag") }}>
                <View style={[style.iconContainer, { backgroundColor: 'transparent' }]}>
                    <Icon name="shopping-bag" size={30} style={style.Icon} />
                    <Text style={style.IconTitle}>{"Bag"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert("favorites") }}>
                <View style={[style.iconContainer, { backgroundColor: 'transparent' }]}>
                    <Icon name="heart" size={30} style={[style.Icon]} />
                    <Text style={style.IconTitle}>{"Favorites"}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert("profile") }}>
                <View style={[style.iconContainer, { backgroundColor: 'transparent' }]}>
                    <Icon name="user" size={30} style={style.Icon} />
                    <Text style={style.IconTitle}>{"Profile"}</Text>
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
        backgroundColor: "#fff",
        position: 'absolute',
        paddingTop: 8,
        paddingBottom: 8,
        bottom: 0,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: "#b3b3b3",
    },
    iconContainer: {
        color: '#b3b3b3',
        alignItems: 'center'
    },
    Icon: {
        fontSize: 30,
        color: '#b3b3b3',
    },
    IconTitle: {
        color: '#b3b3b3',
        fontSize: 12,
    }
});
