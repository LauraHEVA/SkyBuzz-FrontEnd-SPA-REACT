import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";

import {
  ContainerNavMenu,
  ContainerHeader,
  ButtonContainerNewBuzz,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import Toastr from "../components/Toastr/Toastr";
import Footer from "../components/Footer/Footer";
import ListBuzzs from "../components/ListBuzzs/ListBuzzs";

const DetailBuzzPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  return (
    <>
      <ContainerHeader>
        <Header title="Buzz Detail" />
      </ContainerHeader>
      <Toastr />
      <MainContainerPage>
        <ListBuzzs />
        <ButtonContainerNewBuzz>
          <ButtonPrimary
            actionOnClick={() => {
              goToHomePage();
            }}
            className={"btn-primary"}
            text={"Home Page"}
          />
        </ButtonContainerNewBuzz>
      </MainContainerPage>
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
      <Footer />
    </>
  );
};

export default DetailBuzzPage;
