import React from 'react';
import DragonList from '../../components/DragonList';
import Button from '../../components/Button';
import { Container, Header } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <h1>Dragons</h1>
        <Button onClick={() => console.log('add new dragon')}>
          Add Dragon
        </Button>
      </Header>
      <DragonList />
    </Container>
  );
};

export default Dashboard;
