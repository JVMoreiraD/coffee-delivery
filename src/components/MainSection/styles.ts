import styled, { css } from "styled-components";

export const MainSectionContainer = styled.section`
    width: 100%;
    height: 34rem;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
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
        gap: 0.75rem;
    }
`

interface IconProps {
    variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const IconContainer = styled.div<IconProps>`
    color: ${({ theme }) => theme['white']};
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
        background: ${props.theme[`${props.variant}`]};
        `}
` 