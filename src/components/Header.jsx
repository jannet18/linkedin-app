import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <>
    <div className="header__left">
        <img src="../assets/images/linkedin.png" alt="" /> 
        <div className="header__search">
            <SearchIcon />
            <input type="text" />
        </div>
    </div>
    <div className="header__right"></div>
    </>
  )
}

export default Header