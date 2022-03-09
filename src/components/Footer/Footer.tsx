import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListItem, ListUl } from "../../styles/globalStyledComponents";
import { primary, secondary } from "../../styles/globalStyles";
import AllUsersIcon from "../AllUsersIcon/AllUsersIcon";
import HomeIcon from "../HomeIcon/HomeIcon";
import UserIcon from "../UserIcon/UserIcon";

const ContainerFooter = styled.div`
  background-color: ${secondary};
  height: 60px;
  border-top: 2px solid ${primary};
  padding: 0 15px;
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <ContainerFooter className="container">
        <nav>
          <ListUl>
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
          </ListUl>
        </nav>
      </ContainerFooter>
    </>
  );
};

export default Footer;
