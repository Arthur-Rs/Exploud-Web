import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// ==> Components
import SideMenu from '../SideMenu';

// ==> Icons
import {ReactComponent as GridIcon} from '../../content/svg/menu-icon.svg';
import {ReactComponent as UserIcon} from '../../content/svg/user-icon.svg';

import {Container} from './styles';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const HandlerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <SideMenu IsOpen={menuOpen} />
      <Container>
        <div className="header-content">
          <div className="header-button">
            <GridIcon onClick={HandlerMenu} className="header-icon" />
          </div>
          <h1 className="header-title">EXPLOUD</h1>
          <div className="header-button mobile">
            <UserIcon className="header-icon" />
          </div>
        </div>
        <div className="header-content desktop">
          <nav className="header-navigation">
            <Link className="nav-button" to="#">
              HOME
            </Link>
            <Link className="nav-button" to="#">
              HOME
            </Link>
            <Link className="nav-button" to="#">
              HOME
            </Link>
            <Link className="nav-button" to="#">
              HOME
            </Link>
            <Link className="nav-button" to="#">
              HOME
            </Link>
            <Link className="nav-button" to="#">
              HOME
            </Link>
            <Link className="nav-button" to="#">
              HOME
            </Link>
          </nav>
          <div className="header-button">
            <UserIcon className="header-icon" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
