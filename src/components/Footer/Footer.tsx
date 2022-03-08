import styled from "styled-components";
import { secondary } from "../../styles/globalStyles";
import UserIcon from "../UserIcon/UserIcon";

const ContainerFooter = styled.div`
  background-color: ${secondary};
  height: 60px;
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <ContainerFooter className="container">
        <UserIcon />
      </ContainerFooter>
    </>
  );
};

export default Footer;
