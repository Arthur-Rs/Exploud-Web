import React from 'react';

import Header from '../../components/Header';
import Column from '../../components/Column';
import {Container} from './styles';

const Index: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="table">
        <Column title="TOP HORA"></Column>
        <Column title="TOP RODADA"></Column>
        <Column title="TOP TEMPORADA"></Column>
      </div>
    </Container>
  );
};

export default Index;
