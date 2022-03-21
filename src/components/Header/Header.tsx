import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import {
  ListItem,
  ListUlHorizontal,
  MainContainerHeader,
  SpanHeader,
  TitlePage,
} from "../../styles/globalStyledComponents";
import { TitleProps } from "../../types/componentsInterfaces";
import { UserData } from "../../types/userInterfaces";

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
              <img
                width="40px"
                height="40px"
                src="images/favicon.png"
                alt="Skybuzz logo"
              />
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
