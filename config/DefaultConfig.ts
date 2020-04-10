import { ThemeKey } from "./themes";
import { LanguageKey } from "./languages";

export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  buyButtonLink: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
  labelBgColor: string,
  activeColor: string,
  dangerColor: string,
  appColor: string,
  facebookColor: string,
  googleColor: string,
  inputColor: string,
  inputBorderColor: string,
}

export interface HomePageType {
  productLabel: string,
  labelViewAll: string,
  labelFashion: string,
  labelSave: string,
}

export interface advertisementType {
    label1: string,
    label2: string,
    labelBuy: string,
}

export interface AppConstants {
    selectedTheme: ThemeKey,
    selectedLanguage: LanguageKey,
    title: string,
    recraftLogo: string,
    labelLogin: string,
    createAccountLabel: string,
    labelCheck: string,
    homePage: HomePageType,
    advertisement: advertisementType,
    labelAddToCard: string,
    labelBuyNow: string,
    labelBag: string,
    labelDelivery: string,
    labelTotal: string,
    labelSuccess: string,
    demoCartMsg: string,
    labelSubTotal: string,
    labelCheckout: string,
    shipLabel: string,
    labelPlace: string,
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

export interface ApplicationConfig {
    constants?: AppConstants
}

// @ts-ignore
const Logo = require("../images/recraftshoping-app-logo2.png")

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.en,
      title: "RecraftShoppify",
      recraftLogo: Logo,
      labelLogin: "Login",
      createAccountLabel: "Create your Account",
      labelCheck: "CHECK",
      homePage: {
        productLabel: "NEW",
        labelViewAll: "View All",
        labelFashion: "FASHION",
        labelSave: "SALE",
      },
      advertisement: {
        label1: "SHOP",
        label2: "NOW",
        labelBuy: "BUY",
      },
      labelAddToCard: "ADD TO CARD",
      labelBuyNow: "BUY NOW",
      labelBag: "My Bag", 
      labelDelivery: "Delivery",
      labelTotal: "Total",
      labelSuccess: "SUCCESS !",
      demoCartMsg: "1 item added in your cart",
      labelSubTotal: "Sub-Total",
      labelCheckout: "Checkout",
      labelPlace: "PLACE ORDER",
      shipLabel: "PROCEED TO SHIPPING",
      labelMethod: "Payment Method",
      labelCard: "ADD CARD",
      labelName: "Name",
      labelEmail: "Email",
      labelUser: "Username",
      labelPass: "Password",
      labelCheckAcc: "Already have an account?",
      labelChoice: "Or Login With",
      labelSubmit: "SUBMIT",
      namePlaceholder: "Enter Name",
      emailPlaceholder: "Enter Email",
      userPlaceholder: "User Name",
      passPlaceholder: "Enter Password",
      labelForget: "Forget your password?",
    },
}
