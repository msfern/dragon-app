import styled from 'styled-components';

export const Container = styled.div``;

export const TableHeader = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;

export const TableHeaderCell = styled.div`
  width: ${props => (props.width ? `${props.width}%` : 'auto')};
`;
