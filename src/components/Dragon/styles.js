import styled from 'styled-components';

export const Container = styled.div``;

export const TableBodyRow = styled.div`
  background-color: white;
  box-shadow: 0 0 3px rgb(0 0 0 / 10%);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;

export const TableBodyCell = styled.div`
  width: ${props => (props.width ? `${props.width}%` : 'auto')};
  /* font-weight: ${props => (props.isBold ? `${props.width}%` : 'auto')}; */
`;
