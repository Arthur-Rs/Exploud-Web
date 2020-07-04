import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props) => props.theme.layout.HeightBody};
  bottom: 0;
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 16;

  .side-list {
    width: 24vw;
    overflow: hidden;
    background-color: #333;
    padding: 1%;
    box-shadow: 2px 1px 2px #00000047;
    box-sizing: border-box;
  }

  .open {
    transition: transform 0.24s;
    transform: translateX(0);
  }

  .close {
    transition: transform 0.24s;
    transform: translateX(-70vw);
  }

  @media screen and (max-width: 700px) {
    .side-list {
      width: 70vw;
    }
  }
`;
