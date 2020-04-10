import { AppTheme, AppConstants } from '../config/DefaultConfig';
import useConstants from './useConstants';
import { themes } from '../config/themes';

const useTheme = (): AppTheme => {
  const { selectedTheme }: AppConstants = useConstants()

  return themes[selectedTheme];
}

export default useTheme;
