import React from 'react';

import {Container} from './styles';

interface Column {
  title: string;
}

const Column: React.FC<Column> = ({title, children}) => {
  return (
    <Container>
      <div className="column-header">
        <span className="column-title">{title}</span>
      </div>
      <div className="column-content">
        <ul className="column-list">{children}</ul>
      </div>
    </Container>
  );
};

export default Column;
