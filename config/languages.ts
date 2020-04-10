import { en } from './languages/en';
import { fr } from './languages/fr';

export enum LanguageKey {
  en = "en",
  fr = "fr",
}

export interface AppLanguage {
  labelProfile: string,
}

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
}
