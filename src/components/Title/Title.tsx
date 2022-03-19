import styled from "styled-components";
import { primary } from "../../styles/globalStyles";
import { TitleProps } from "../../types/componentsInterfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <H2Login>SkyBuzz</H2Login>
      <h3>{title}</h3>
    </>
  );
};

const H2Login = styled.h2`
  color: ${primary};
  font-size: 64px;
  font-family: Mukta, nunito, sans-serif;
`;

export default Title;
