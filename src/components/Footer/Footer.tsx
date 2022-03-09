import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";
import AllUsersIcon from "../AllUsersIcon/AllUsersIcon";
import HomeIcon from "../HomeIcon/HomeIcon";
import UserIcon from "../UserIcon/UserIcon";

const ContainerFooter = styled.div`
  background-color: ${secondary};
  height: 60px;
  border-top: 2px solid ${primary};
`;

const ListNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <ContainerFooter className="container">
        <nav>
          <ListNav>
            <ListItem>
              <Link to="/login">
                {" "}
                <UserIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/home">
                {" "}
                <HomeIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/buzzers">
                <AllUsersIcon />
              </Link>
            </ListItem>
          </ListNav>
        </nav>
      </ContainerFooter>
    </>
  );
};

export default Footer;
