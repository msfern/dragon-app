import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Container, TableBodyCell, TableBodyRow } from './styles';

const Dragon = () => {
  return (
    <Container>
      <TableBodyRow>
        <TableBodyCell width="5">1</TableBodyCell>
        <TableBodyCell width="35">Naruto</TableBodyCell>
        <TableBodyCell width="30">Norwegian Buckleback</TableBodyCell>
        <TableBodyCell width="20">20/01/2021</TableBodyCell>
        <TableBodyCell width="5">
          <AiFillEdit color="#44af69" />
        </TableBodyCell>
        <TableBodyCell width="5">
          <AiFillDelete color="#ef3e36" />
        </TableBodyCell>
      </TableBodyRow>
    </Container>
  );
};

export default Dragon;
