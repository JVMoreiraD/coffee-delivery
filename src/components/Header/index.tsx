import { CartContainer, HeaderComponent, HeaderCornerContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart, Timer } from 'phosphor-react'
import logoCoffee from '../../assets/logo.svg'
import { DefaultText } from '../Text'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logoCoffee} alt="" />
      <HeaderCornerContainer>
        <LocationContainer >
          <MapPin size={22} weight='fill' />
          <DefaultText >
            Porto Alegre, RS
          </DefaultText>
        </LocationContainer>
        <CartContainer >
          <ShoppingCart size={22} weight='fill' />
        </CartContainer>
      </HeaderCornerContainer>
    </HeaderComponent>
  )
}
