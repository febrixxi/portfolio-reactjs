import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Switch = () => {
  const context = useContext(ThemeContext);
  // eslint-disable-next-line no-unused-vars
  const { toggle, setToggle } = context;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="switch">
      <input checked={toggle} type="checkbox" />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
