import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const TitlePage = styled.h1`
  font-size: 22px;
  color: ${primary};
`;

const ContainerHeader = styled.div`
  background-color: ${secondary};
  height: 60px;
  border-bottom: 2px solid ${primary};
  padding: 0 15px;
`;

const ListNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
`;

const ListItem = styled.li`
  list-style: none;
  padding-left: 0;
`;

interface TitleProps {
  title: string;
}

const Header = ({ title }: TitleProps): JSX.Element => {
  return (
    <>
      <ContainerHeader className="container">
        <nav>
          <ListNav>
            <ListItem>
              <TitlePage>{title}</TitlePage>
            </ListItem>
            <ListItem>
              <img width="40px" src="images/favicon.png" alt="Skybuzz logo" />
            </ListItem>
            <ListItem>
              <img
                width="30px"
                src="images/burger-menu.png"
                alt="menu with 'about us' and logout options"
              />
            </ListItem>
          </ListNav>
        </nav>
      </ContainerHeader>
    </>
  );
};

export default Header;
