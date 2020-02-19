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
        <View style={[style.childContainer, style.centerContainer]}>
          <ThemedText styleKey="textColor" style={style.title}>{constants.chatTitle}</ThemedText>
        </View>
        <View style={[style.childContainer, style.leftContainer]}>
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
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  searchContainer: ViewStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  centerContainer: {
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  searchContainer: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
