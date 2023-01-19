import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { MainSection } from './components/MainSection'

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Header></Header>
      <MainSection></MainSection>
    </ThemeProvider>
  )
}

export default App
