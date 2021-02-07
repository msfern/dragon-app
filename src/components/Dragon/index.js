import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import convertDate from '../../utils/convertDate';
import { Container, TableBodyCell, TableBodyRow } from './styles';

const Dragon = ({ details }) => {
  return (
    <Container>
      <TableBodyRow>
        <TableBodyCell width="5">{details.id}</TableBodyCell>
        <TableBodyCell width="35">{details.name}</TableBodyCell>
        <TableBodyCell width="30">{details.type}</TableBodyCell>
        <TableBodyCell width="20">
          {convertDate(details.createdAt)}
        </TableBodyCell>
        <TableBodyCell width="5">
          <Link to={{ pathname: `/dragons/${details.id}` }}>
            <AiFillEdit color="#44af69" />
          </Link>
        </TableBodyCell>
        <TableBodyCell width="5">
          <AiFillDelete color="#ef3e36" />
        </TableBodyCell>
      </TableBodyRow>
    </Container>
  );
};

export default Dragon;
