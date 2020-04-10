import React, { useState, useEffect } from 'react';
import { Switch } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';
import { ThemeKey } from '../../config/themes';

interface Props {
  updateTheme: (theme: ThemeKey) => void;
}

const ThemeToggle: React.FunctionComponent<Props> = ({
  updateTheme
}: Props) => {
  const theme: AppTheme = useTheme();
  const { selectedTheme }: AppConstants = useConstants();
  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(selectedTheme == ThemeKey.dark);

  useEffect(() => {
    const newSelectedTheme = isDarkTheme ? ThemeKey.dark : ThemeKey.light
    updateTheme(newSelectedTheme)
  }, [isDarkTheme]);

  return (
    <Switch trackColor={{
      false: theme.lightTextColor,
      true: theme.lightTextColor
    }} thumbColor={theme.textColor} value={isDarkTheme} onValueChange={toggleDarkTheme} />
  )
};

export default ThemeToggle;
