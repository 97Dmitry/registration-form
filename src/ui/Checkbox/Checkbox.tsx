import { FC } from "react";
import styled from "styled-components";
import { RadioButtonIndicator } from "../../icons";

interface CheckboxProps {
  label: string | React.ReactNode;
  onChange?: (val: any) => void;
  value?: string;
  name: string;
  className?: string;
  initialChecked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  value,
  initialChecked = false,
  name,
  onChange,
  className,
}) => {
  return (
    <Root className={className}>
      <RadioInput
        id={name}
        value={value}
        type="checkbox"
        onChange={onChange}
        defaultChecked={initialChecked}
      />
      <Control>
        <Indicator />
      </Control>
      <Label htmlFor={name}>{label}</Label>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: inline-block;
  margin-left: 36px;
  ${({ theme: { typography } }) => typography.IBMPlexSans({ weight: 500 })};
  color: ${({ theme }) => theme.colors.color1};
`;

const Control = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.color3};
  border-radius: 4px;

  transition: 0.1s;
`;

const Indicator = styled(RadioButtonIndicator)`
  position: absolute;
  opacity: 0;
  transition: 0.1s;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
`;

const RadioInput = styled.input`
  position: absolute;
  appearance: none;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  z-index: 1;

  &:checked ~ ${Control} {
    border: 2px solid #0880ae;
    ${Indicator} {
      opacity: 1;
    }
  }
`;

export default Checkbox;
