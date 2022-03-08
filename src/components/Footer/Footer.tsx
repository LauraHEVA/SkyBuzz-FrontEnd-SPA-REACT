import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";
import AllUsersIcon from "../AllUsersIcon/AllUsersIcon";
import HomeIcon from "../HomeIcon/HomeIcon";
import UserIcon from "../UserIcon/UserIcon";

const ContainerFooter = styled.div`
  background-color: ${secondary};
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid ${primary};
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <ContainerFooter className="container">
        <UserIcon />
        <HomeIcon />
        <AllUsersIcon />
      </ContainerFooter>
    </>
  );
};

export default Footer;
