import styled from "styled-components";

export const ListUlHorizontal = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0;
`;

export const ListUlVert = styled.ul`
  padding-left: 0;
`;

export const ContainerListBuzzs = styled.div`
  margin-left: 15px;
  margin-right: 20px;
`;

export const ContainerFooter = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  margin-top: 0px;
`;
