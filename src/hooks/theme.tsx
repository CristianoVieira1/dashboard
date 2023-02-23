import React, { createContext, useContext, useState } from 'react';
import dark from '../styles/dark';
import light from '../styles/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@travel:theme');

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@travel:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@travel:theme', JSON.stringify(dark));
    }
  };

  return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
