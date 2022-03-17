import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

export const Spinner = (): JSX.Element => {
  return (
    <ContainerSpinner>
      <TitleLoading>Loading...</TitleLoading>
      <SpinnerDiv id="loading"></SpinnerDiv>
    </ContainerSpinner>
  );
};

const ContainerSpinner = styled.div`
  color: ${primary};
  text-align: center;
  margin: 150px auto;
`;

const TitleLoading = styled.h2`
  font-family: poppins, sans-serif;
  margin-bottom: 40px;
`;

const SpinnerDiv = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 7px solid ${primary};
  border-radius: 50%;
  border-top-color: ${secondary};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
