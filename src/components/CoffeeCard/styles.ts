import styled from "styled-components";
import { DefaultText, Headers } from "../Text";

export const CoffeeCardBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 16rem;
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px 36px;
`

export const CoffeeAvatar = styled.img`
    margin-top: -1.25rem;
`

export const CoffeeTag = styled.div`
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: ${({ theme }) => theme.colors["yellow-light"]};
    border-radius: 100px;
    text-transform: uppercase;
`
export const CoffeeTagGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;

`

export const CoffeeName = styled.div`
    display: flex;
    align-items: flex-end;
    text-align: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-top: 1rem;
`

export const CoffeeInfo = styled.div`
    display: flex;
    text-align: center;
    padding: 1.25rem;
`

export const BuyInfo = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 8px;
  
    margin-bottom: 1.25rem;

`

export const Cart = styled.div`
    /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['white']};
  background-color: ${({ theme }) => theme.colors['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`
export const QuantityController = styled.div`
    display: flex;
    padding: 0.5rem;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-button']};
`
export const MathOperators = styled.button`
    
    color: ${({ theme }) => theme.colors['purple-dark']};

`