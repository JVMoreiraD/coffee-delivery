import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

    outline: none;


  }

  :focus {

    outline: none;

    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['white']};

  }

  body {

    background: ${(props) => props.theme.colors['background']};
    
    color: ${(props) => props.theme.colors['base-text']};

    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {

    font-family: ${({ theme }) => theme.fonts.regular};

    font-weight: 400;

    font-size: ${({ theme }) => theme.defaultTextSize['md']}

  }

`
