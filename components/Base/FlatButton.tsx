import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import RoundButton from './RoundButton';

interface Props {
    label: string;
    onPress?: (event: GestureResponderEvent) => void,
    buttonStyle?: any,
    labelStyle?: any,
};

const FlatButton: React.FunctionComponent<Props> = ({
    onPress,
    label,
    buttonStyle,
    labelStyle,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <RoundButton label={label} onPress={onPress} buttonStyle={[style.container, buttonStyle]} labelStyle={labelStyle}/>
    );
};

export default FlatButton;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        borderRadius: 5,
        minWidth: 230
    },
})
