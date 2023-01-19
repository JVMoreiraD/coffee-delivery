import { CartContainer, HeaderComponent, HeaderCornerContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart, Timer } from 'phosphor-react'
import logoCoffee from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logoCoffee} alt="" />
      <HeaderCornerContainer>
        <LocationContainer >
          <MapPin size={22} weight='fill' />
          Porto Alegre, RS
        </LocationContainer>
        <CartContainer >
          <ShoppingCart size={22} weight='fill' />
        </CartContainer>
      </HeaderCornerContainer>
    </HeaderComponent>
  )
}
