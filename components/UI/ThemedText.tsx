import React from 'react';
import { TextProps, Text, StyleProp, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props extends TextProps {
  children: React.ReactChild,
  styleKey: string,
}

const ThemedText: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, styleKey, ...restProps } = props;

  const themeColorStyle: StyleProp<TextStyle> = [{color: theme[styleKey]}];

  const newStyle: StyleProp<TextStyle> = themeColorStyle.concat(style)

  return <Text style={newStyle} {...restProps}>{props.children}</Text>
};

export default ThemedText;