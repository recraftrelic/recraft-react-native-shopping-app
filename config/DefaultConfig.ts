export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
}

export interface AppDateFormats {
  chatDateFormat: string,
  chatHourDisplayFormat: string,
  chatYesterdayText: string,
}

export interface AppConstants {
    dateFormats?: AppDateFormats,
    searchPlacerHolder: string,
    messagePlacerHolder: string,
    chatTitle: string,
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
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      },
      searchPlacerHolder: "Search Chats",
      messagePlacerHolder: "Type Text here for message...",
      chatTitle: "Base App"
    }
}
