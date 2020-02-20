import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet, Switch, TextStyle, StatusBar } from 'react-native';
import { AppTheme, lightTheme, darkTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import useConstants from '../../hooks/useConstants';

interface Props {
  updateTheme: (theme: AppTheme) => void
}

const ThemeToggle: React.FunctionComponent<Props> = ({
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
      <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} translucent={true} />
      <View style={style.topContainer}>
        <View style={style.childContainer}>
          <ThemedText styleKey="textColor" style={style.title}>{constants.title}</ThemedText>
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

export default ThemeToggle;

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
