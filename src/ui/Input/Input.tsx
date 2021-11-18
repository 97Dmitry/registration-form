import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

interface InputProps {
  type?: "text" | "email" | "password";
  placeholder: string;
  label: string;
  error: any;
  name: string;
  onChange: (val: any) => void;
  value: string;
}

const Input: FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  label,
  error,
  value,
  onChange,
}) => {
  return (
    <Root>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error && "Введено не корректное значение"}</ErrorMessage>
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
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  padding: 16px;
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
