import styled from 'styled-components'

export const HeaderComponent = styled.header`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['background']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  left: 0px;
  right: 0px;
  top: 0px;

`

export const HeaderCornerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors['purple-dark']};
  background-color: ${({ theme }) => theme.colors['purple-light']};
  padding: 0.5rem;

  border-radius: 6px;
  cursor: pointer;
  > svg {
  color: ${({ theme }) => theme.colors['purple']};
  }
`

export const CartContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

`