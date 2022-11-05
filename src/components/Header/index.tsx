import { HeaderComponent } from './styles'
import { Scroll, Timer } from 'phosphor-react'
import logoCoffee from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logoCoffee} alt="" />

      <nav>
        <nav >
          <Timer size={24} />
        </nav>
        <nav >
          <Scroll size={24} />
        </nav>
      </nav>
    </HeaderComponent>
  )
}
