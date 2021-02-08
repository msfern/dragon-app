import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  max-width: 940px;
  margin: 10vh auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  margin-bottom: 30px;
  align-items: center;

  @media (max-width: 940px) {
    flex-direction: column;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      margin-bottom: 10px;
    }
  }
`;
