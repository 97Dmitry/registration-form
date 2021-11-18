import React, { FC } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "ui";

enum Languages {
  "Русский",
  "Английский",
  "Китайский",
  "Испанский",
}

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  language: Languages;
}

const schema = yup
  .object({
    name: yup.string().trim().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
  })
  .required();

const RegistrationCard: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange", resolver: yupResolver(schema) });

  const handleRegistration: SubmitHandler<FormValues> = (data): void => {
    console.log(data);
  };

  return (
    <Root>
      <Title>Регистрация</Title>
      <LinkToLoginWrapper>
        <IsHaveAccount>Уже есть аккаунт?</IsHaveAccount>
        <a href="/#">Войти</a>
      </LinkToLoginWrapper>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              name="name"
              error={errors.name}
              label="Имя"
              placeholder="Введите имя"
              onChange={(val) => {
                if (
                  val.nativeEvent.data &&
                  val.nativeEvent.data !== "-" &&
                  val.nativeEvent.data !== " " &&
                  val.nativeEvent.data?.match(/[0-9_\W]/)
                ) {
                  return;
                } else onChange(val.target.value);
              }}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              name="email"
              error={errors.email}
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
          render={({ field: { onChange, value } }) => (
            <Input
              name="phoneNumber"
              error={errors.phoneNumber}
              label="Номер телефона"
              placeholder="Введите номер телефона"
              onChange={(val: React.ChangeEvent<HTMLInputElement>) =>
                onChange(val.target.value)
              }
              value={value}
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Root>
  );
};

const Root = styled.div`
  padding: 40px 30px;
  min-width: 360px;

  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.color1};
  ${({ theme: { typography } }) =>
    typography.IBMPlexSans({ weight: 700, size: 34, lineHeight: 44 })};
  margin-bottom: 8px;
`;

const IsHaveAccount = styled.span`
  color: ${({ theme }) => theme.colors.color1};
  ${({ theme: { typography } }) =>
    typography.IBMPlexSans({ size: 16, lineHeight: 22 })};
  margin-right: 6px;
`;

const LinkToLoginWrapper = styled.div`
  margin-bottom: 58px;
`;

export default RegistrationCard;
