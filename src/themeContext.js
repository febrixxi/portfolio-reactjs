import React, { useState } from 'react';

export const ThemeContext = React.createContext({});

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
