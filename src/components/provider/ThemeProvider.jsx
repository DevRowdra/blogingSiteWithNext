"use client"
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [themeClass, setThemeClass] = useState('');

  useEffect(() => {
    
    setThemeClass(theme || 'light');
  }, [theme]);

  return (
    <div className={themeClass}>{children}</div>
  );
};

export default ThemeProvider