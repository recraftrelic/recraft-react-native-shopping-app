import React from 'react';
import { ViewProps, SafeAreaView, StyleProp, ViewStyle, StatusBar } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import { ThemeKey } from '../../config/themes';
import useConstants from '../../hooks/useConstants';

interface Props extends ViewProps {
  children: React.ReactChild;
  style?: any;
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, ...restProps } = props;

  const { selectedTheme }: AppConstants = useConstants();

  const selectedStatusBar = selectedTheme == ThemeKey.dark ? "light-content" : "dark-content"

  const themeColorStyle: StyleProp<ViewStyle> = [{backgroundColor: theme.backgroundColor}];

  const newStyle: StyleProp<ViewStyle> = themeColorStyle.concat(style)

  return (
    <SafeAreaView style={newStyle} {...restProps}>
      <StatusBar barStyle={selectedStatusBar} backgroundColor={theme.backgroundColor}/>
      {props.children}
    </SafeAreaView>
  )
};

export default ThemedView;