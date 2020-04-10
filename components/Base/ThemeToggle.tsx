import React, { useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, Switch, StatusBar } from 'react-native';
import { AppTheme, lightTheme, darkTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props {
  updateTheme: (theme: AppTheme) => void
}

const ThemeToggle: React.FunctionComponent<Props> = ({
  updateTheme
}: Props) => {
  const theme: AppTheme = useTheme();

  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    updateTheme(isDarkTheme ? darkTheme : lightTheme)
  }, [isDarkTheme]);

  return (
    <View>
      <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} translucent={true} />
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
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
});
