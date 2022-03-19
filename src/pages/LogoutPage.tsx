import {
  ButtonLogoutContainer,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import Title from "../components/Title/Title";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserAction } from "../redux/actions/actionsCreator";
import { UserData } from "../types/userInterfaces";
import { RootState } from "../redux/store";
import LoginPage from "./LoginPage";

const LogoutPage = () => {
  const user: UserData = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  const logOut = () => {
    localStorage.setItem("UserToken", "");
    dispatch(logoutUserAction());
    goToHomePage();
  };

  return (
    <>
      {user.loggedIn ? (
        <MainContainerPage>
          <Title title="Are you sure you want to log out?" />
          <ButtonLogoutContainer>
            <ButtonPrimary
              text="Yes, Log out"
              className="btn-primary"
              actionOnClick={logOut}
            ></ButtonPrimary>
          </ButtonLogoutContainer>
        </MainContainerPage>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default LogoutPage;
