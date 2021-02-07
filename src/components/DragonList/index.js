import React from 'react';
import Dragon from '../Dragon';
import { Container, TableHeader, TableHeaderCell } from './styles';

const DragonList = () => {
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
      <Dragon />
      <Dragon />
      <Dragon />
      <Dragon />
      <Dragon />
      <Dragon />
    </Container>
  );
};

export default DragonList;
