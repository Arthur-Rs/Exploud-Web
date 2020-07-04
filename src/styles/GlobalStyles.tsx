import {createGlobalStyle} from 'styled-components';

const globalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4,span,a{
    font-family: ${(props) => props.theme.fonts.detach};
    color: ${(props) => props.theme.colors.content};
    letter-spacing: 2px;
  }

  a{
    text-decoration: none;
  }

  body{
    background-color: ${(props) => props.theme.colors.secondary};
    margin-top: ${(props) => props.theme.layout.HeightHeader};
    display: flex;
    flex-direction: column;
  }

  .mobile{
    display: none;
  }

  ul,li{
    list-style: none;
  }

  @media screen and (max-width: 700px) {
    .desktop {
      display: none !important;
    }

    .mobile{
      display: flex;
    }
  }
`;

export default globalStyle;
