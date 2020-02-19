import React from 'react';
import { ApplicationConfig, defaultConfig } from './DefaultConfig';

const ConfigContext: React.Context<ApplicationConfig> = React.createContext<ApplicationConfig>(defaultConfig)

export default ConfigContext
