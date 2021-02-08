import React, { useEffect, useState } from 'react';
import DragonList from '../../components/DragonList';
import Button from '../../components/Button';
import { Container, Header } from './styles';

const Dashboard = () => {
  const [dragons, setDragons] = useState([]);
  const [removed, setRemoved] = useState(null);

  useEffect(() => {
    const getDragons = async () => {
      const data = await fetch(
        'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
      ).then(response => response.json());
      const organizedArray = data.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : b.name.toLowerCase() > a.name.toLowerCase()
          ? -1
          : 0
      );
      setDragons(organizedArray);
    };
    getDragons();
  }, [removed]);

  const removeDragon = async id => {
    await fetch(
      `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
      {
        method: 'DELETE',
      }
    );
    setRemoved(id);
  };

  return (
    <Container>
      <Header>
        <h1>Dragons</h1>
        <Button to={{ pathname: '/dragons/new' }}>Add Dragon</Button>
      </Header>
      <DragonList dragons={dragons} removeDragon={removeDragon} />
    </Container>
  );
};

export default Dashboard;
