import React, { useEffect, useState } from 'react';
import DragonList from '../../components/DragonList';
import Button from '../../components/Button';
import { Container, Header } from './styles';

const Dashboard = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    const getDragons = async () => {
      const data = await fetch(
        'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
      ).then(response => response.json());
      const organizedArray = data.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setDragons(organizedArray);
    };

    getDragons();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Dragons</h1>
        <Button to={{ pathname: '/dragons/new' }}>Add Dragon</Button>
      </Header>
      <DragonList dragons={dragons} />
    </Container>
  );
};

export default Dashboard;
