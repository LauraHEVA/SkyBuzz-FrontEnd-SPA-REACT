import styled from "styled-components";
import { ListUlHorizontal } from "../../styles/globalStyledComponents";
import { grey, primary, secondary } from "../../styles/globalStyles";

const TitlePage = styled.h1`
  font-size: 22px;
  color: ${primary};
`;

const ContainerHeader = styled.div`
  background-color: ${secondary};
  height: 60px;
  border-bottom: 1px solid ${primary};
  padding: 0 15px;
  box-shadow: 0 4px 10px ${grey};
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
      <ContainerHeader>
        <nav>
          <ListUlHorizontal>
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
          </ListUlHorizontal>
        </nav>
      </ContainerHeader>
    </>
  );
};

export default Header;