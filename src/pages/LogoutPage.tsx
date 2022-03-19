import {
  ButtonLogoutContainer,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import Title from "../components/Title/Title";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserAction } from "../redux/actions/actionsCreator";

const LogoutPage = () => {
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
      <MainContainerPage>
        <Title title="Are you sure you want to log out?" />
        <ButtonLogoutContainer>
          <ButtonPrimary
            text="Log out"
            className="btn-primary"
            actionOnClick={logOut}
          ></ButtonPrimary>
        </ButtonLogoutContainer>
      </MainContainerPage>
    </>
  );
};

export default LogoutPage;
