import React, { Fragment } from 'react';
import { useTheme } from '../../hooks/useTheme';
import modeIcons from '../../assets/mode-icon.svg';

import './themeSelector.scss';

const selectColor = ['#8093f1', '#118ab2', '#bc4749', '#5e6472'];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  console.log(mode);

  return (
    <Fragment>
      <div className="theme-selector">
        <div className="mode-toggle">
          <img
            src={modeIcons}
            onClick={toggleMode}
            alt="light/dark icon toggle"
            style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
          />
        </div>
        <div className="theme-buttons">
          {selectColor.map(color => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeSelector;
