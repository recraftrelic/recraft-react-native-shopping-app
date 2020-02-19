import React, { useContext } from 'react';
import { AppConstants, ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';

const useConstants = (): AppConstants => {
  const { constants }: ApplicationConfig = useContext(ConfigContext)

  return constants;
}

export default useConstants;
