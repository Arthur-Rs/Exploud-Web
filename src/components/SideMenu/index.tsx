import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from './styles';

interface Props {
  IsOpen: boolean;
}

const SideMenu: React.FC<Props> = ({IsOpen}) => {
  return (
    <Container>
      <ul className={`side-list ${IsOpen ? 'open' : 'close'}`}>
        <li className="side-item mobile">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item mobile">
          <Link to="#">HOME</Link>
        </li>
        <li className="side-item mobile">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item mobile">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item mobile">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item mobile">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item mobile">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item ">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item ">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item ">
          <Link to="#">Oi</Link>
        </li>
        <li className="side-item ">
          <Link to="#">Oi</Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideMenu;
