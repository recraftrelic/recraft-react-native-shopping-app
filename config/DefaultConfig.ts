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
}

export interface ApplicationConfig {
    theme?: AppTheme,
    constants?: AppConstants
}

export const darkTheme: AppTheme = {
  backgroundColor: "#000000",
  highlightColor: "grey",
  highlightTextColor: "#ffffff",
  buyButtonLink: "#ca2727",
  textColor: "#fff",
  lightTextColor: "#b3b3b3",
  lightBottomColor: "#666666",
  alternateMessageBackgroundColor: '#4682b4',
  labelBgColor: "#fff",
  activeColor: "activeColor",
  dangerColor: "#e13e3d",
}

export const lightTheme: AppTheme = {
  backgroundColor: "#ffffff",
  highlightColor: "grey",
  highlightTextColor: "#ffffff",
  buyButtonLink: "#ca2727",
  textColor: "#333",
  lightTextColor: "#b3b3b3",
  lightBottomColor: "#e6e6e6",
  alternateMessageBackgroundColor: '#B0E0E6',
  labelBgColor: "#000",
  activeColor: "#ec5c44",
  dangerColor: "#e13e3d",
}

// @ts-ignore
const Logo = require("../images/recraftshoping-app-logo2.png")

export const defaultConfig: ApplicationConfig = {
    theme: lightTheme,
    constants: {
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
    },
    
}
