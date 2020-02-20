import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, StatusBar } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';

interface Props {
    label: string;
    onButtonPress?: (event: GestureResponderEvent) => void
};

const ButtonItem: React.FunctionComponent<Props> = ({
    onButtonPress,
    label,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <TouchableOpacity onPress={onButtonPress}>
            <View style={style.container}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {borderColor: theme.lightBottomColor}]}>{label}</ThemedText>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonItem;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "center",
    },
    userNameStyle: {
        fontWeight: "bold",
        borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
    }
})
