import styled, { css } from "styled-components";
import background from '../../assets/background.svg'
export const MainSectionContainer = styled.section`
    width: 100%;
    height: 34rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${() => `url(${background})`} no-repeat center;
    background-size: cover;
    padding: 2rem 10rem;


  `
export const BenefitsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 4.125rem;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    > div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`

interface IconProps {
    variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const IconContainer = styled.div<IconProps>`
    color: ${({ theme }) => theme.colors['white']};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    width: 32px;
    height: 32px;
    border-radius: 1000px;

    ${(props) =>
        css`
        background: ${props.theme.colors[`${props.variant}`]};
        `}
`
export const MainTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 36.75rem;
    height: 12rem;
    left: calc(50% - 36.75rem/2 - 16.625rem);
    top: calc(50% - 12rem/2 - 5.125rem);

`