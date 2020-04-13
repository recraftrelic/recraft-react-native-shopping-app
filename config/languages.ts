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
  labelLogin: string,
  createAccountLabel: string,
  labelCheck: string,
  labelAddToCard: string,
  labelBuyNow: string,
  labelBag: string,
  labelProfile: string,
  labelDelivery: string,
  labelTotal: string,
  labelSuccess: string,
  demoCartMsg: string,
  labelSubTotal: string,
  labelCheckout: string,
  labelPlace: string,
  shipLabel: string,
  labelMethod: string,
  labelCard: string,
  labelName: string,
  labelEmail: string,
  labelUser: string,
  labelPass: string,
  labelCheckAcc: string,
  labelChoice: string,
  labelSubmit: string,
  namePlaceholder: string,
  emailPlaceholder: string,
  userPlaceholder: string,
  passPlaceholder: string,
  labelForget: string,
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
