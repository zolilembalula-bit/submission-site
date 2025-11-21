import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme(){ return useContext(ThemeContext); }

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
  },[theme]);

  const toggle = ()=> setTheme(t=> t==='light' ? 'dark' : 'light');

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}