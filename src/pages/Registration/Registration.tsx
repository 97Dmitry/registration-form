import { FC } from "react";
import styled from "styled-components";
import { RegistrationCard } from "./components";

const Registration: FC = () => {
  return (
    <Root>
      <RegistrationCard />
    </Root>
  );
};

export default Registration;

const Root = styled.section`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
