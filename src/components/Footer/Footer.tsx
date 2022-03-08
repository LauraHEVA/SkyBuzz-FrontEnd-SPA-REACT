import styled from "styled-components";
import { secondary } from "../../styles/globalStyles";

const ContainerFooter = styled.div`
  background-color: ${secondary};
  height: 60px;
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <ContainerFooter className="container"></ContainerFooter>
    </>
  );
};

export default Footer;
