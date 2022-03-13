import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";
import {
  ContainerNavMenu,
  ContainerHeader,
  ContainerListBuzzs,
} from "../styles/globalStyledComponents";
import Toastr from "../components/Toastr/Toastr";
import Footer from "../components/Footer/Footer";

const NewBuzzPage = () => {
  return (
    <>
      <ContainerHeader>
        <Header title="Buzzs" />
      </ContainerHeader>
      <Toastr />
      <ContainerListBuzzs></ContainerListBuzzs>
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
      <Footer />
    </>
  );
};

export default NewBuzzPage;
