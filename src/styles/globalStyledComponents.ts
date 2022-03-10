import styled from "styled-components";
import { greenCircleAuthor, grey, primary } from "./globalStyles";

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
  margin-top: 50px;
  margin-bottom: 100px;
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

export const PrimaryBtn = styled.button`
  background-color: ${primary};
  font-family: poppins;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1px;
  border-radius: 10px;
  width: 165px;
  height: 45px;
  color: ${greenCircleAuthor};
  border: 1px solid ${greenCircleAuthor};
  box-shadow: 0 4px 10px ${grey};
`;
