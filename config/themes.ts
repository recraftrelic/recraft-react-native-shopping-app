import { AppTheme } from "./DefaultConfig"

export enum ThemeKey {
    light = "light",
    dark = "dark"
}

export interface ThemesMap {
    [key: string]: AppTheme;
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
    appColor: "#ec5c44",
    facebookColor: '#39579a',
    googleColor: '#e3384c',
    inputColor: "#aaaaaa",
    inputBorderColor: "#dadada",
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
    appColor: "#ec5c44",
    facebookColor: '#39579a',
    googleColor: '#e3384c',
    inputColor: "#aaaaaa",
    inputBorderColor: "#dadada",
}

export const themes: ThemesMap = {
    [ThemeKey.light]: lightTheme,
    [ThemeKey.dark]: darkTheme
}
