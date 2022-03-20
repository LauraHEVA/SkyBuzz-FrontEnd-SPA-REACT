import NavMenu from "../components/NavMenu/NavMenu";
import {
  ContainerNavMenu,
  ButtonContainerNewBuzz,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Footer from "../components/Footer/Footer";
import ListBuzzs from "../components/ListBuzzs/ListBuzzs";
import { UserData } from "../types/userInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HomePage = () => {
  const user: UserData = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const goToNewBuzz = () => {
    navigate(`/newbuzz`);
  };

  return (
    <>
      <MainContainerPage>
        <ListBuzzs />
        {user.loggedIn && (
          <ButtonContainerNewBuzz>
            <ButtonPrimary
              actionOnClick={() => {
                goToNewBuzz();
              }}
              className={"btn-primary"}
              text={"New Buzz"}
            />
          </ButtonContainerNewBuzz>
        )}
      </MainContainerPage>
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
      <Footer />
    </>
  );
};

export default HomePage;
