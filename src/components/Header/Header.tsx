import styled from "styled-components";
import { ListUl } from "../../styles/globalStyledComponents";
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
          <ListUl>
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
                alt="menu three lines"
              />
            </ListItem>
          </ListUl>
        </nav>
      </ContainerHeader>
    </>
  );
};

export default Header;
