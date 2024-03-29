import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { MainSection } from './components/MainSection'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeSection } from './components/CoffeeSection'

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Header></Header>
      <MainSection></MainSection>
      <CoffeeSection></CoffeeSection>
    </ThemeProvider>
  )
}

export default App
