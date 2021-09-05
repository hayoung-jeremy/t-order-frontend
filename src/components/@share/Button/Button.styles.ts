import styled, { css } from "styled-components";

export interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  size?: string;
  onClick?: () => void;
  withIcon?: boolean;
  iconUrl?: string;
  iconBtn?: boolean;
  outlined?: boolean;
}

const buttonStyles = css<ButtonProps>`
  ${(props) =>
    props.withIcon &&
    css`
      display: flex;
      align-items: center;
      height: 100%;

      &:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
        background: url("${props.iconUrl}") no-repeat 0 center/cover;
      }
    `}
  ${(props) =>
    props.iconBtn &&
    css`
      display: block;
      width: 42px;
      height: 42px;
      background: url("${props.iconUrl}") no-repeat 0 center/cover; ;
    `}
`;

const colorStyles = css<ButtonProps>`
  ${({ theme, color }) => {
    const selected = theme[color!];
    return css`
      color: ${selected};
    `;
  }}
  ${({ theme, color, outlined }) => {
    const selected = theme[color!];
    return (
      outlined &&
      css`
        border: 2px solid ${selected};
      `
    );
  }}
`;

const StyledButton = styled.button`
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  transition: 0.2s;

  ${colorStyles}
  ${buttonStyles}
`;

export default StyledButton;
