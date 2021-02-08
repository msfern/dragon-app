import React from 'react';
import Dragon from '../Dragon';
import { Container, TableHeader, TableHeaderCell } from './styles';

const DragonList = ({ dragons, removeDragon }) => {
  return (
    <Container>
      <TableHeader>
        <TableHeaderCell width="5">ID</TableHeaderCell>
        <TableHeaderCell width="35">Name</TableHeaderCell>
        <TableHeaderCell width="30">Type</TableHeaderCell>
        <TableHeaderCell width="20">Creation Date</TableHeaderCell>
        <TableHeaderCell width="5" />
        <TableHeaderCell width="5" />
      </TableHeader>
      {dragons.map(dragon => (
        <Dragon key={dragon.id} details={dragon} removeDragon={removeDragon} />
      ))}
    </Container>
  );
};

export default DragonList;
