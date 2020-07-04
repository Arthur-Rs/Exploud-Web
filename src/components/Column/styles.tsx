import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0.8vw;
  height: 80vh;

  .column-title {
    font-size: 4.5vh;
  }

  .column-header {
    background-color: ${(props) => props.theme.colors.primary};
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0px 0px;
  }
  .column-content {
    background-color: ${(props) => props.theme.colors.dark};
    height: 90%;
    border-radius: 0px 0px 5px 5px;
  }

  @media screen and (max-width: 700px) {
    margin: 10px 0px 10px 0px;
  }
`;
