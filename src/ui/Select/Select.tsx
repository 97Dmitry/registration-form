import { FC, useState } from "react";
import styled, { css } from "styled-components";
import Arrow from "assets/svg/arrow.svg";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  dataList: Array<{ value: string; label: string }>;
  className?: string;
}

const Select: FC<SelectProps> = ({ value, dataList, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Root className={className} $isOpen={isOpen}>
      <Selector
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        $isOpen={isOpen}
        $value={!!value}
      >
        {value ? dataList.find((data) => data.value === value)?.label : "Язык"}
      </Selector>
      {isOpen && (
        <OptionList>
          {dataList.map((data) => (
            <OptionItem
              key={data.value}
              onClick={() => {
                onChange(data.value);
                setIsOpen(false);
              }}
            >
              {data.label}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </Root>
  );
};

const Root = styled.div<{ $isOpen: boolean }>`
  position: relative;
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
  border: 1px solid ${({ theme: { colors } }) => colors.color3};
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      outline: 2px solid ${({ theme: { colors } }) => colors.color5};
    `}
  border-radius: 6px;
`;

const Selector = styled.div<{ $isOpen: boolean; $value: boolean }>`
  position: relative;
  margin-bottom: 4px;
  padding: 16px 32px 16px 16px;
  width: 100%;
  color: ${({ $isOpen, $value, theme: { colors } }) =>
    $isOpen || $value ? colors.color1 : colors.color10};

  &:after {
    position: absolute;
    content: "";
    background: url(${Arrow}) no-repeat 50%;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    width: 30px;

    pointer-events: none;
  }
`;

const OptionList = styled.div`
  background: ${({ theme: { colors } }) => colors.color9};
  position: absolute;
  z-index: 10;
  top: 64px;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.color3};
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04),
    0 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
`;

const OptionItem = styled.div`
  padding: 16px;

  &:hover {
    background: ${({ theme: { colors } }) => colors.color6};
  }
`;

export default Select;
