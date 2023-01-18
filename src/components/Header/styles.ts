import styled from 'styled-components'

export const HeaderComponent = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme['background']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 2rem 10rem;
`

export const HeaderCornerContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 0.25;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme['purple-dark']};
  background-color: ${({ theme }) => theme['purple-light']};
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
`

export const CartContainer = styled.nav`
  color: ${({ theme }) => theme['yellow-dark']};
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
`