import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet, Switch, TextStyle } from 'react-native';
import { AppTheme, lightTheme, darkTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import useConstants from '../../hooks/useConstants';

interface Props {
  updateTheme: (theme: AppTheme) => void
}

const ChatTitleBar: React.FunctionComponent<Props> = ({
  updateTheme
}: Props) => {
  const theme: AppTheme = useTheme();
  const constants: AppConstants = useConstants();

  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    updateTheme(isDarkTheme ? darkTheme : lightTheme)
  }, [isDarkTheme]);

  return (
    <View>
      <View style={style.topContainer}>
        <View style={style.childContainer}>
          <ThemedText styleKey="textColor" style={style.title}>{constants.chatTitle}</ThemedText>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.childContainer}>
          <Switch trackColor={{
            false: theme.lightTextColor,
            true: theme.lightTextColor
          }} thumbColor={theme.textColor} value={isDarkTheme} onValueChange={toggleDarkTheme} />
        </View>
      </View>
    </View>
  )
};

export default ChatTitleBar;

interface Style {
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 250,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
