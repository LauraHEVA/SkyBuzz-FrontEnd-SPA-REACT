import styled from "styled-components";
import { primary } from "../../styles/globalStyles";
import { TitleProps } from "../../types/componentsInterfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <H2Login>SkyBuzz</H2Login>
      <H3Login>{title}</H3Login>
    </>
  );
};

const H2Login = styled.h2`
  color: ${primary};
  font-size: 64px;
  font-family: Mukta, nunito, sans-serif;
  text-align: center;
`;

const H3Login = styled.h3`
  color: ${primary};
  font-size: 16px;
  font-family: poppins, nunito, sans-serif;
  text-align: center;
  padding: 20px 10px;
`;

export default Title;
