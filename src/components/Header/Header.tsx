import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const TitlePage = styled.h1`
  font-size: 22px;
  color: ${primary};
`;

const ContainerHeader = styled.div`
  background-color: ${secondary};
`;

interface TitleProps {
  title: string;
}

const Header = ({ title }: TitleProps): JSX.Element => {
  return (
    <>
      <ContainerHeader className="container">
        <TitlePage>{title}</TitlePage>
        <img width="40px" src="images/favicon.png" alt="Skybuzz logo" />
        <img
          width="30px"
          src="images/burger-menu.png"
          alt="menu with 'about us' and logout options"
        />
      </ContainerHeader>
    </>
  );
};

export default Header;
