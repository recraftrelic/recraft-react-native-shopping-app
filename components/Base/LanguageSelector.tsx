import React, { useState, useEffect } from 'react';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';
import RNPickerSelect from 'react-native-picker-select';
import { AppLanguage } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';

interface Props {
  updateLanguage: (language: string) => void;
};

const LanguageSelector: React.FunctionComponent<Props> = ({
  updateLanguage,
}: Props) => {
  const theme: AppTheme = useTheme();
  const { selectedLanguage }: AppConstants = useConstants();
  const constant: AppLanguage = useLanguage();
  const [language, setLanguage] = useState<string>(selectedLanguage);

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'gr' },
    { label: 'Spanish', value: 'sp' },
    { label: 'Chinese', value: 'ch' },
  ];

  useEffect(() => {
    updateLanguage(language)
  }, []);

  const onChangeLanguage = (value) => {
    updateLanguage(value)
    setLanguage(value)
  }

  return (
    <RNPickerSelect style={{inputIOS:{color: theme.lightTextColor},inputAndroid:{color: theme.lightTextColor, padding: 0, paddingRight: 40}}} value={language} onValueChange={(value) => onChangeLanguage(value)} items={languages} useNativeAndroidPickerStyle={false}/>
  )
};

export default LanguageSelector;
