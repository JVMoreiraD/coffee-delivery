import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <div>Coffee-delivery</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
