import styled from 'styled-components';

export const Container = styled.div`
  .table {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2vh 3.5vw 2vh 3.5vw;
  }

  @media screen and (max-width: 700px) {
    .table {
      flex-direction: column;
    }
  }
`;
