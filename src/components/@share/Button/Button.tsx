import StyledButton, { ButtonProps } from "./Button.styles";

const Button = ({
  children,
  color,
  size,
  onClick,
  withIcon,
  iconUrl,
  iconBtn,
  outlined,
}: ButtonProps) => {
  return (
    <StyledButton
      color={color}
      size={size}
      onClick={onClick}
      withIcon={withIcon}
      iconUrl={iconUrl}
      iconBtn={iconBtn}
      outlined={outlined}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
