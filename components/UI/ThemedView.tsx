import React from 'react';
import { ViewProps, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props extends ViewProps {
  children: React.ReactChild
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, ...restProps } = props;

  const themeColorStyle: StyleProp<ViewStyle> = [{backgroundColor: theme.backgroundColor}];

  const newStyle: StyleProp<ViewStyle> = themeColorStyle.concat(style)

  return <SafeAreaView style={newStyle} {...restProps}>{props.children}</SafeAreaView>
};

export default ThemedView;