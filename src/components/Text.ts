import styled, { css } from "styled-components";

interface DefaultTextProps {
    fontSize: "10px" | "14px" | "16px" | "18px" | "20px" | "24px"
    fontWeight: "normal" | "Bold"
    lineHeight?: 130 | 160
    uppercase?: true
}

export const DefaultText = styled.p<DefaultTextProps>`
    font-family: Roboto;
    font-style: normal;
       ${(props) =>
        css`
        font-weight: ${props.fontWeight};
        font-size: ${props.fontSize};
        `}
    color: ${({ theme }) => theme['base-subtitle']};
    &:uppercase {
     text-transform: uppercase;
    }

`

interface HeadersProps {
    fontWeight: 'Bold' | 'Bolder'
    fontSize: "18px" | "20px" | "32px" | "48px"
}

export const Headers = styled.h1<HeadersProps>`
    font-family: 'Baloo 2';
    font-style: normal;
    line-height: 130%;
     ${(props) =>
        css`
        font-weight: ${props.fontWeight};
        font-size: ${props.fontSize};
        `}
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
      color: ${({ theme }) => theme['base-title']};

`
