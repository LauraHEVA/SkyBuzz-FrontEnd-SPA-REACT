import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";
import {
  ContainerNavMenu,
  ContainerHeader,
  MainContainerPage,
} from "../styles/globalStyledComponents";
import Toastr from "../components/Toastr/Toastr";
import Footer from "../components/Footer/Footer";
import FormNewBuzz from "../components/FormNewBuzz/FormNewBuzz";

const NewBuzzPage = () => {
  return (
    <>
      <ContainerHeader>
        <Header title="Buzzs" />
      </ContainerHeader>
      <Toastr />
      <MainContainerPage>
        <FormNewBuzz />
      </MainContainerPage>
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
      <Footer />
    </>
  );
};

export default NewBuzzPage;
