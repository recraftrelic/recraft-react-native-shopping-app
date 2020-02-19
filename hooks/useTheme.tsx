import React, { useContext } from 'react';
import { AppTheme, ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';

const useTheme = (): AppTheme => {
  const { theme }: ApplicationConfig = useContext(ConfigContext)

  return theme;
}

export default useTheme;
