import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 940px) {
    overflow-x: auto;
    width: 100%;
  }
`;

export const TableHeader = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 940px) {
    width: 665px;
  }
`;

export const TableHeaderCell = styled.div`
  width: ${props => (props.width ? `${props.width}%` : 'auto')};
`;
