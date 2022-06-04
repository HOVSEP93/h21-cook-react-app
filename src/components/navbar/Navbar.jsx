import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import Logo from '../../assets/logo.svg';

import SearchBar from '../search-bar/SearchBar';

import './Navbar.scss';

const Navbar = () => {
  const { color } = useTheme();
  return (
    <Fragment>
      <div className="navbar" style={{ background: color }}>
        <nav>
          <Link to="/" className="brand">
            <div className="logo">
              <span>H21</span>
              <img src={Logo} alt="logo-icon" />
            </div>
          </Link>
          <SearchBar />
          <Link to="create">Create Recipe</Link>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
