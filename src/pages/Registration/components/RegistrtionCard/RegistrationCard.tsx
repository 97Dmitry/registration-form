import { FC } from "react";
import styled from "styled-components";

const RegistrationCard: FC = () => {
  return (
    <Root>
      <Title>Регистрация</Title>
      <LinkToLoginWrapper>
        <IsHaveAccount>Уже есть аккаунт?</IsHaveAccount>
        <a href="/#">Войти</a>
      </LinkToLoginWrapper>
    </Root>
  );
};

const Root = styled.div`
  padding: 40px 30px;

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
    typography.IBMPlexSans({ weight: 400, size: 16, lineHeight: 22 })};
  margin-right: 6px;
`;

const LinkToLoginWrapper = styled.div``;

export default RegistrationCard;
