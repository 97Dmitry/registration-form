import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit";
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  type = "submit",
  isDisabled = false,
}) => {
  return (
    <Root
      className={className}
      type={type}
      $isDisabled={isDisabled}
      disabled={isDisabled}
    >
      {text}
    </Root>
  );
};

const Root = styled.button<{ $isDisabled: boolean }>`
  height: 56px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  background: ${({ $isDisabled, theme: { colors } }) =>
    $isDisabled ? colors.color3 : colors.color5};
  color: ${({ $isDisabled, theme: { colors } }) =>
    $isDisabled ? colors.color8 : colors.color6};
  ${({ theme: { typography } }) => typography.IBMPlexSans({ weight: 500 })};

  &:hover:enabled {
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08),
      0 24px 48px rgba(44, 39, 56, 0.16);
  }

  &:active:enabled {
    border: 2px solid rgba(44, 39, 56, 0.86);
    box-shadow: 0 2px 4px rgba(44, 39, 56, 0.0001),
      0 4px 8px rgba(44, 39, 56, 0.08);
  }

  &:disabled {
    cursor: auto;
  }
`;

export default Button;
