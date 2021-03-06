import React, { FC } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Button, Checkbox, Select } from "ui";

const LanguagesList = [
  { value: "rus", label: "Русский" },
  { value: "en", label: "Английский" },
  { value: "zh", label: "Китайский" },
  { value: "es", label: "Испанский" },
];

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  conditionsAgree: string;
  language: string;
}

const schema = yup
  .object({
    name: yup.string().trim().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    language: yup.string().required(),
    conditionsAgree: yup.boolean().isTrue().required(),
  })
  .required();

const RegistrationCard: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<FormValues>({ mode: "onChange", resolver: yupResolver(schema) });

  const handleRegistration: SubmitHandler<FormValues> = (data): void => {
    console.log(data);
  };

  return (
    <Root>
      <Title>Регистрация</Title>
      <LinkToLoginWrapper>
        <IsHaveAccount>Уже есть аккаунт?</IsHaveAccount>
        <IsHaveAccountLink href="/#">Войти</IsHaveAccountLink>
      </LinkToLoginWrapper>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              name="name"
              onBlur={onBlur}
              error={errors.name}
              touched={touchedFields.name}
              label="Имя"
              placeholder="Введите имя"
              onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                const targetValue = val.target.value;
                onChange(targetValue.replace(/[^a-zA-Zа-яА-Я- ]/g, ""));
              }}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              name="email"
              error={errors.email}
              onBlur={onBlur}
              touched={touchedFields.email}
              label="Email"
              placeholder="Введите email"
              onChange={(val: React.ChangeEvent<HTMLInputElement>) =>
                onChange(val.target.value)
              }
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              name="phoneNumber"
              error={errors.phoneNumber}
              onBlur={onBlur}
              touched={touchedFields.phoneNumber}
              label="Номер телефона"
              placeholder="Введите номер телефона"
              onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                const targetValue = val.target.value;
                if (targetValue.match(/[0-9]/g)?.length === 12) return;

                onChange(targetValue.replace(/[^0-9()+-]/g, ""));
              }}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="language"
          render={({ field: { onChange, value } }) => (
            <StyledSelect
              value={value}
              onChange={onChange}
              dataList={LanguagesList}
            />
          )}
        />

        <Controller
          control={control}
          name="conditionsAgree"
          render={({ field: { onChange, value } }) => (
            <StyledCheckbox
              value={value}
              onChange={onChange}
              name="conditionsAgree"
              label={
                <p>
                  Принимаю <CheckboxLink href="/#">условия</CheckboxLink>{" "}
                  использования
                </p>
              }
            />
          )}
        />
        <Button isDisabled={!isValid} text="Зарегистрироваться" />
      </form>
    </Root>
  );
};

const Root = styled.div`
  padding: 40px 30px;
  min-width: 360px;
  max-width: 650px;
  width: 100%;
  max-height: 95%;

  background: #ffffff;
  box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02),
    0 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color1};
  ${({ theme: { typography } }) =>
    typography.IBMPlexSans({ weight: 700, size: 34, lineHeight: 44 })};
  margin-bottom: 8px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 8px;
`;

const IsHaveAccount = styled.span`
  color: ${({ theme }) => theme.colors.color1};
  margin-right: 6px;
`;

const IsHaveAccountLink = styled.a`
  color: ${({ theme }) => theme.colors.color5};
`;

const LinkToLoginWrapper = styled.div`
  margin-bottom: 58px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 40px;
`;

const CheckboxLink = styled.a`
  color: ${({ theme }) => theme.colors.color5};
`;

const StyledSelect = styled(Select)`
  margin-bottom: 32px;
`;

export default RegistrationCard;
