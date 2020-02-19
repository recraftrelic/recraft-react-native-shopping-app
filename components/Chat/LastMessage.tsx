import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import ThemedText from '../UI/ThemedText';

interface Props {
    lastMessage: string;
    isTyping?: boolean;
};

const LastMessage: React.FunctionComponent<Props> = ({
    isTyping,
    lastMessage,
}: Props) => {

    if (isTyping) {
        return <ThemedText styleKey="highlightColor" style={style.typingText}>typing...</ThemedText>
    }

    return <ThemedText styleKey="textColor" numberOfLines={1}>{lastMessage}</ThemedText>
}

export default LastMessage;

interface Style {
    typingText: TextStyle
}

const style: Style = StyleSheet.create<Style>({
    typingText: {
        fontWeight: "bold"
    }
})
