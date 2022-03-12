import styled from "styled-components";
import {
  breakpointXS,
  greenCircleAuthor,
  grey,
  primary,
  secondary,
  widthNavMenu,
} from "./globalStyles";

export const ListUlNavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  margin: 0;
  @media (min-width: ${breakpointXS}) {
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
`;

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

export const ContainerNavMenu = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  @media (min-width: ${breakpointXS}) {
    bottom: 0px;
    left: 0px;
    top: 0px;
    width: ${widthNavMenu};
  }
`;

export const ContainerListBuzzs = styled.div`
  margin-left: 15px;
  margin-right: 25px;
  margin-top: 50px;
  margin-bottom: 100px;
  @media (min-width: ${breakpointXS}) {
    margin-left: calc(${widthNavMenu}*1.7);
    margin-top: 110px;
  }
`;

export const ButtonContainerNewBuzz = styled.div`
  position: fixed;
  bottom: 50px;
  right: 15px;
  z-index: 2;
  @media (min-width: ${breakpointXS}) {
    top: 80px;
    right: 40px;
  }
`;

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  margin-top: 0;
  @media (min-width: ${breakpointXS}) {
    z-index: 2;
  }
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
  :hover {
    background-color: ${secondary};
    color: ${primary};
  }
`;

export const ContainerFontAwesome = styled.div`
  background-color: red;
`;
