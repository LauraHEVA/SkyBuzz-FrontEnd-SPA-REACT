import styled from "styled-components";

export const Spinner = (): JSX.Element => {
  return (
    <ContainerSpinner>
      <TitleLoading>Loading...</TitleLoading>
      <SpinnerDiv id="loading"></SpinnerDiv>
    </ContainerSpinner>
  );
};

const ContainerSpinner = styled.div`
  margin-top: 100px;
  background-color: #137b85;
  color: #fff;
  text-align: center;
`;

const TitleLoading = styled.h2`
  font-family: "permanent marker", sans-serif;
  margin-bottom: 40px;
`;

const SpinnerDiv = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
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
