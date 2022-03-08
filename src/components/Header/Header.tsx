import styled from "styled-components";
import { primary } from "../../styles/globalStyles";

const TitlePage = styled.h1`
  font-size: 22px;
  color: ${primary};
`;

const Header = (): JSX.Element => {
  return (
    <>
      <TitlePage>title</TitlePage>
      <img width={"22px"} src="images/favicon.png" alt="Skybuzz logo" />
      <img
        width={"26px"}
        src="./images/burger-menu.png"
        alt="menu with 'about us' and logout options"
      />
    </>
  );
};

export default Header;
