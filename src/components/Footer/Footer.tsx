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

const TextFooter = styled.p`
  font-family: "permanent marker";
  color: ${primary};
  margin-top: 0;
  margin-bottom: 0;
`;

const Footer = (): JSX.Element => {
  return (
    <ContainerFooter>
      <TextFooter>SkyBuzz by Laura Hernandez</TextFooter>
    </ContainerFooter>
  );
};

export default Footer;
