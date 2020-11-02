import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';
import Moon from '../images/moon.svg';
import Sun from '../images/sun.svg';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
      className="button-theme"
    >
      <img src={theme == 'dark' ? Sun : Moon} className="theme-icon" alt="" />
    </Button>
  );
}

export default ThemeSwitcher;
