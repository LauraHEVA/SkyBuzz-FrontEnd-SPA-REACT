import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListItem, ListUlNavMenu } from "../../styles/globalStyledComponents";
import {
  backgroundSecondary,
  breakpointXS,
  grey,
  primary,
  secondary,
  widthNavMenu,
} from "../../styles/globalStyles";
import AllUsersIcon from "../AllUsersIcon/AllUsersIcon";
import HomeIcon from "../HomeIcon/HomeIcon";
import UserIcon from "../UserIcon/UserIcon";

const ContainerNavMenu = styled.nav`
  background-color: ${secondary};
  height: 60px;
  border-top: 1px solid ${primary};
  padding: 0 15px;
  box-shadow: 0 -4px 10px ${grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${breakpointXS}) {
    background-color: ${backgroundSecondary};
    bottom: 0px;
    left: 0px;
    top: 0px;
    height: 100%;
    width: ${widthNavMenu};
  }
`;

const NavMenu = (): JSX.Element => {
  return (
    <>
      <ContainerNavMenu>
        <ListUlNavMenu>
          <ListItem>
            <Link to="/login">
              <UserIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/home">
              <HomeIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/buzzers">
              <AllUsersIcon />
            </Link>
          </ListItem>
        </ListUlNavMenu>
      </ContainerNavMenu>
    </>
  );
};

export default NavMenu;
