import styled from "styled-components";
import {
  breakpointXS,
  grey,
  primary,
  secondary,
} from "../../styles/globalStyles";

const ContainerFooter = styled.nav`
  display: none;
  @media (min-width: ${breakpointXS}) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    border-top: 1px solid ${primary};
    padding: 0 15px;
    box-shadow: 0 -4px 10px ${grey};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${secondary};
  }
`;

const SpanSkybuzz = styled.span`
  font-family: nunito;
  color: ${primary};
  font-size: 18px;
  font-weight: 900;
  margin: 5px;
`;

const SpanBy = styled.span`
  font-family: nunito;
  color: ${primary};
  font-size: 14px;
  margin: 5px;
`;

const SpanFooter = styled.span`
  font-family: "Shadows Into Light";
  color: ${primary};
  margin-top: 0;
  margin-bottom: 0;
  margin: 5px;
`;

const Footer = (): JSX.Element => {
  return (
    <ContainerFooter>
      <SpanSkybuzz>SkyBuzz </SpanSkybuzz>
      <SpanBy>by </SpanBy>
      <SpanFooter>Laura Hernandez | ISDI Coders</SpanFooter>
    </ContainerFooter>
  );
};

export default Footer;
