import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header></Header>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
