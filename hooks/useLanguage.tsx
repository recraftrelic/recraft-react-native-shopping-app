import { AppConstants } from '../config/DefaultConfig';
import useConstants from './useConstants';
import { AppLanguage, languages } from '../config/languages';

const useLanguage = (): AppLanguage => {
  const { selectedLanguage }: AppConstants = useConstants()

  return languages[selectedLanguage];
}

export default useLanguage;
