export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
}

export interface AppConstants {
    title: string,
    recraftLogo: string,
    labelLogin: string,
    createAccountLabel: string,
}

export interface ApplicationConfig {
    theme?: AppTheme,
    constants?: AppConstants
}

export const darkTheme: AppTheme = {
  backgroundColor: "#000000",
  highlightColor: "grey",
  highlightTextColor: "#ffffff",
  textColor: "#fff",
  lightTextColor: "#b3b3b3",
  lightBottomColor: "#666666",
  alternateMessageBackgroundColor: '#4682b4',
}

export const lightTheme: AppTheme = {
  backgroundColor: "#ffffff",
  highlightColor: "green",
  highlightTextColor: "#ffffff",
  textColor: "#333",
  lightTextColor: "#b3b3b3",
  lightBottomColor: "#e6e6e6",
  alternateMessageBackgroundColor: '#B0E0E6',
}

export const defaultConfig: ApplicationConfig = {
    theme: lightTheme,
    constants: {
      title: "RecraftShoppify App",
      recraftLogo: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png",
      labelLogin: "Login",
      createAccountLabel: "Create your Account"
    },
    
}
