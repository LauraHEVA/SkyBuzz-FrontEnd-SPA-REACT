import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { ListUlHorizontal } from "../../styles/globalStyledComponents";
import {
  breakpointXS,
  grey,
  primary,
  secondary,
} from "../../styles/globalStyles";
import { TitleProps } from "../../types/componentsInterfaces";
import { LoginData, UserData } from "../../types/userInterfaces";

const TitlePage = styled.h1`
  font-size: 22px;
  color: ${primary};
`;

const MainContainerHeader = styled.div`
  background-color: ${secondary};
  height: 60px;
  border-bottom: 1px solid ${primary};
  padding: 8px 15px;
  box-shadow: 0 4px 10px ${grey};
  @media (min-width: ${breakpointXS}) {
    background-color: ${secondary};
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding-left: 0;
`;

const SpanHeader = styled.span`
  font-family: nunito, sans-serif;
  font-size: 18px;
  color: ${primary};
  text-decoration: none;
`;

const Header = ({ title }: TitleProps): JSX.Element => {
  const user: UserData = useSelector((state: RootState) => state.user);
  return (
    <>
      <MainContainerHeader>
        <nav>
          <ListUlHorizontal>
            <ListItem>
              <TitlePage>{title}</TitlePage>
            </ListItem>
            <ListItem>
              <img width="40px" src="images/favicon.png" alt="Skybuzz logo" />
            </ListItem>
            <ListItem>
              {!user.loggedIn ? (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <SpanHeader>Log In</SpanHeader>
                </Link>
              ) : (
                <Link to="/logout" style={{ textDecoration: "none" }}>
                  <SpanHeader>Log Out</SpanHeader>
                </Link>
              )}
            </ListItem>
          </ListUlHorizontal>
        </nav>
      </MainContainerHeader>
    </>
  );
};

export default Header;
