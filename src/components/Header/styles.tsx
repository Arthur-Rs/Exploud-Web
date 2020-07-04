import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: ${(props) => props.theme.layout.HeightHeader};
  width: 100%;

  background-color: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px #2222228c;

  & * {
    user-select: none;
  }

  .header-title {
    font-size: 7vh;
  }

  .header-content {
    display: flex;

    align-items: center;
    justify-content: space-between;
  }

  .header-icon {
    width: 7vh;
    height: 7vh;

    margin: 0 2vw 0 2vw;
  }

  .header-icon svg,
  path,
  g {
    transition: filter 0.2s;
    fill: ${(props) => props.theme.colors.content};
    stroke: ${(props) => props.theme.colors.content};
  }

  .header-button {
    cursor: pointer;
  }
  .header-button:hover svg,
  path,
  g {
    filter: brightness(0.9);
  }

  .header-navigation {
    display: flex;
    height: ${(props) => props.theme.layout.HeightHeader};
  }

  .nav-button::before {
    content: '';
    position: absolute;
    width: 101%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.content};
    transform: skewX(-10deg);
    z-index: -1;
    transition: filter 0.2s;
  }

  .nav-button:hover::before {
    filter: brightness(0.8);
  }

  .nav-button {
    position: relative;
    height: 100%;
    width: 6vw;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2.5vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    .header-content {
      width: 100%;
    }
  }
`;
