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
  font-size: 22px;
  height: 50px;
  border-top: 1px solid ${primary};
  padding: 0 15px;
  box-shadow: 0 -4px 10px ${grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${breakpointXS}) {
    background-color: ${backgroundSecondary};
    font-size: 30px;
    bottom: 0px;
    left: 0px;
    top: 0px;
    height: 100%;
    width: ${widthNavMenu};
  }
`;

const ContainerIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    font-size: 28px;
  }

  @media (min-width: ${breakpointXS}) {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      border: 2px solid ${primary};
      font-size: 36px;
    }
  }
`;

const NavMenu = (): JSX.Element => {
  return (
    <>
      <ContainerNavMenu>
        <ListUlNavMenu>
          <ListItem>
            <Link to="/login">
              <ContainerIcon>
                <UserIcon />
              </ContainerIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/home">
              <ContainerIcon>
                <HomeIcon />
              </ContainerIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/buzzers">
              <ContainerIcon>
                <AllUsersIcon />
              </ContainerIcon>
            </Link>
          </ListItem>
        </ListUlNavMenu>
      </ContainerNavMenu>
    </>
  );
};

export default NavMenu;
