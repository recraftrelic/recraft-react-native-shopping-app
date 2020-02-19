import React from 'react';
import { TextStyle, View, ViewStyle, StyleSheet } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';

interface Props {
    notificationCount: number;
}

const NotificationDot: React.FunctionComponent<Props> = ({
    notificationCount
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
      <View style={[style.container, { backgroundColor: theme.highlightColor }]}>
          <ThemedText styleKey="highlightTextColor" style={style.text}>{notificationCount}</ThemedText>
      </View>
    )
};

export default NotificationDot;

interface Style {
    container: ViewStyle,
    text: TextStyle,
}

const style: Style = StyleSheet.create<Style>({
    container: {
        width: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 10
    }
})
