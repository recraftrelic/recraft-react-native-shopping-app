import { en } from './languages/en';
import { fr } from './languages/fr';
import { gr } from './languages/gr';
import { sp } from './languages/sp';
import { ch } from './languages/ch';

export enum LanguageKey {
  en = "en",
  fr = "fr",
  gr = "gr",
  sp = "sp",
  ch = "ch",
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
  [LanguageKey.gr]: gr,
  [LanguageKey.sp]: sp,
  [LanguageKey.ch]: ch,
}
