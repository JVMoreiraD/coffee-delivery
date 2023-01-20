import styled from "styled-components";
import { DefaultText, Headers } from "../Text";

export const CoffeeCardBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 16rem;
    height: 19.375rem;
    background: ${({ theme }) => theme['base-card']};
    border-radius: 6px 36px;
`

export const CoffeeAvatar = styled.img`
    display: flex;
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: calc(50% - 7.5rem/2);
    top: -1.25rem;
`

export const CoffeeTag = styled.div`
    color: ${({ theme }) => theme["yellow-dark"]};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    gap: 4px;
    padding: 0;
    width: 5.063rem;
    height: 1.313rem;
    background: ${({ theme }) => theme["yellow-light"]};
    border-radius: 100px;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const CoffeeName = styled.div`
    position: absolute;
    height: 1.625rem;
    left: 1.25rem;
    right: 1.25rem;
    top: 9.313rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    

`

export const CoffeeInfo = styled.div`
    position: absolute;
    height: 2.25rem;
    left: 1.25rem;
    right: 1.25rem;
    top: 11.438rem;
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;

    padding: 1.25rem;
`

export const BuyInfo = styled.div`
   /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 118px;
    height: 38px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['white']};
  background-color: ${({ theme }) => theme['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`
export const QuantityController = styled.div`
    flex: inherit;
    padding: 0.5rem;
    gap: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme['base-button']};
`
export const MathOperators = styled.div`
    color: ${({ theme }) => theme['purple']};

`