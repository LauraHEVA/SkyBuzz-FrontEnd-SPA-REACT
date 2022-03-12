import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ListItem,
  ListUlHorizontal,
} from "../../styles/globalStyledComponents";
import { grey, primary, secondary } from "../../styles/globalStyles";
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
`;

const NavMenu = (): JSX.Element => {
  return (
    <>
      <ContainerNavMenu>
        <ListUlHorizontal>
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
        </ListUlHorizontal>
      </ContainerNavMenu>
    </>
  );
};

export default NavMenu;
