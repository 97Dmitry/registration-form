import React, { FC } from "react";
import styled from "styled-components";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  error: any;
  name: string;
  onChange?: (val: any) => void;
  className?: string;
  touched?: any;
  value?: string;
  onBlur?: () => void;
}

const Input: FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  label,
  error,
  value,
  onChange,
  onBlur,
  className,
  touched,
  ...props
}) => {
  return (
    <Root className={className}>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        {...props}
        onBlur={onBlur}
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>
        {error && touched && "Введено не корректное значение"}
      </ErrorMessage>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 106px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.color3};
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  padding: 16px;
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.color10};
  }

  &:focus {
    outline: 2px solid ${({ theme: { colors } }) => colors.color5};
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 12px;
  color: ${({ theme: { colors } }) => colors.color2};
  ${({ theme: { typography } }) => typography.IBMPlexSans({ weight: 500 })};
`;

const ErrorMessage = styled.p`
  color: ${({ theme: { colors } }) => colors.color4};
  ${({ theme: { typography } }) =>
    typography.IBMPlexSans({ size: 14, lineHeight: 18 })};
`;

export default Input;
