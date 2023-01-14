import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

import Search from '../Search/SearchC';
import HeaderStack from './HeaderStack';

import headerLogoIco from '../../assets/img/pizza-logo.svg';
import './header.scss';

const Header: React.FC = () => {
  const [navbar, setNavbar] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const headerSearchMobile = useMediaQuery('(max-width: 576px)');

  const changeBackground = () => (window.scrollY >= 30 ? setNavbar(true) : setNavbar(false));
  React.useEffect(() => window.addEventListener('scroll', changeBackground), []);
  return (
    <header className={`header ${navbar && 'active'}`}>
      <div className="container">
        <div className="d-flex justify-between align-center">
          <div className="d-flex">
            <div
              className="header__logo d-flex align-center mr-15 cu-p"
              onClick={() => navigate('')}>
              <img width={38} height={38} src={headerLogoIco} alt="logo" />
              <div className="header__logo-text">
                <h2>REACT&nbsp;PIZZA</h2>
                <p>Есть&nbsp;то,&nbsp;что&nbsp;нас&nbsp;объединяет</p>
              </div>
            </div>
            {pathname !== '/cart' && pathname !== '/favorite' && !headerSearchMobile && <Search />}
          </div>
          {headerSearchMobile && <Search />}
          <HeaderStack navbar={navbar} />
        </div>
      </div>
    </header>
  );
};
export default Header;
