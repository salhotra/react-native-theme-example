import React, { useContext, useState, useEffect } from "react";
import { AsyncStorage, StatusBar } from "react-native";

import themes from "./themes";

const ThemeContext = React.createContext();

const ASYNC_STORAGE_THEME_KEY = "ASYNC_STORAGE_THEME_KEY";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    (async () => {
      const persistedThemeId = await AsyncStorage.getItem(
        ASYNC_STORAGE_THEME_KEY
      );
      if (persistedThemeId && persistedThemeId !== theme.id) {
        setTheme(themes[persistedThemeId]);
      }
    })();
  });

  const contextValue = {
    theme: theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const withTheme = Component => props => {
  const { theme, setTheme } = useContext(ThemeContext);
  const setThemeAndPersist = theme => {
    AsyncStorage.setItem(ASYNC_STORAGE_THEME_KEY, theme.id);
    StatusBar.setBarStyle(theme.statusBarStyleIOS);
    setTheme(theme);
  };

  const toggleDarkTheme = () => setThemeAndPersist(theme.id === 'dark' ? themes.light : themes.dark);

  return (
    <Component
      {...props}
      themes={themes}
      theme={theme}
      setTheme={setThemeAndPersist}
      toggleDarkTheme={toggleDarkTheme}
    />
  );
};
