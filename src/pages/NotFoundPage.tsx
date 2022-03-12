import styled from "styled-components";
import NavMenu from "../components/NavMenu/NavMenu";
import Header from "../components/Header/Header";
import {
  ContainerNavMenu,
  ContainerHeader,
} from "../styles/globalStyledComponents";
import { grey, primary } from "../styles/globalStyles";

const MainContainerNav = styled.div`
  height: 80vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${primary};
`;

const AnchorHome = styled.a`
  text-decoration: none;
  color: ${grey};
`;

const TitleCentered = styled.h2`
  text-align: center;
  font-family: "permanent marker";
`;

const NotFoundPage = () => {
  return (
    <>
      <ContainerHeader>
        <Header title="Not Found" />
      </ContainerHeader>
      <MainContainerNav>
        <TitleCentered>Ups...There is nothing in this page.</TitleCentered>
        <p>
          Please go to
          <AnchorHome href="/home"> Home Page</AnchorHome>
        </p>
      </MainContainerNav>
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
    </>
  );
};

export default NotFoundPage;
