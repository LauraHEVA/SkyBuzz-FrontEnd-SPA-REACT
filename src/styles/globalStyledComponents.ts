import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  background,
  backgroundSecondary,
  breakpointXS,
  grey,
  greyCyan,
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
  padding-left: 0;
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

export const MainContainerPage = styled.div`
  margin-left: 15px;
  margin-right: 25px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (min-width: ${breakpointXS}) {
    margin-left: calc(${widthNavMenu}*1.7);
    margin-top: 140px;
  }
`;

export const MainContainerLogsUserPage = styled.div`
  margin-left: 15px;
  margin-right: 25px;
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 370px;
  @media (min-width: ${breakpointXS}) {
    margin-left: calc(${widthNavMenu}*1.7);
    margin-top: 140px;
  }
`;

export const ButtonContainerNewBuzz = styled.div`
  position: fixed;
  bottom: 50px;
  right: 15px;
  z-index: 2;
`;

export const ButtonRegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonSubmitContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonLogoutContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
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
  color: ${backgroundSecondary};
  border: 1px solid ${backgroundSecondary};
  box-shadow: 0 4px 10px ${grey};
  :hover {
    background-color: ${secondary};
    color: ${primary};
  }
`;

export const SecondaryBtn = styled.button`
  background-color: ${background};
  font-family: poppins;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1px;
  border-radius: 10px;
  width: 165px;
  height: 45px;
  color: ${primary};
  border: 1px solid ${primary};
  :hover {
    background-color: ${secondary};
    color: ${primary};
  }
`;

export const ContainerFontAwesome = styled.div`
  background-color: red;
`;

export const FaIcon = styled(FontAwesomeIcon)`
  :hover {
    box-shadow: 0 0 10px ${secondary}, 0 0 5px ${greyCyan};
    background-color: ${secondary};
    cursor: pointer;
  }
`;

export const ContainerFormNewBuzz = styled.div`
  font-family: nunito, sans-serif;
  color: ${primary};
  @media (min-width: ${breakpointXS}) {
    margin-top: 200px;
  }
`;

export const ContainerFormComment = styled.div`
  font-family: nunito, sans-serif;
  color: ${primary};
  max-width: 500px;
  @media (min-width: ${breakpointXS}) {
    margin-top: 60px;
  }
`;

export const H2LogsUser = styled.h2`
  display: none;
  @media (min-width: ${breakpointXS}) {
    display: block;
    color: ${primary};
    font-size: 64px;
    font-family: Mukta, nunito, sans-serif;
    text-align: center;
  }
`;

export const H3LogsUser = styled.h3`
  font-size: 20px;
  color: ${primary};
  font-family: poppins, nunito, sans-serif;
  text-align: center;
  padding: 20px 10px;
  @media (min-width: ${breakpointXS}) {
    font-size: 16px;
  }
`;

export const TitlePage = styled.h1`
  font-size: 22px;
  color: ${primary};
`;

export const MainContainerHeader = styled.div`
  background-color: ${secondary};
  height: 60px;
  border-bottom: 1px solid ${primary};
  padding: 8px 15px;
  box-shadow: 0 4px 10px ${grey};
  @media (min-width: ${breakpointXS}) {
    background-color: ${secondary};
  }
`;

export const SpanHeader = styled.span`
  font-family: nunito, sans-serif;
  font-size: 18px;
  color: ${primary};
  text-decoration: none;
`;

export const CreateAccountContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-top: 1px solid black;
  padding: 20px;
  width: 100%;
`;

export const SecondaryText = styled.p`
  color: ${primary};
`;

export const ContainerUserNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`;

export const ContainerUserNamesBuzz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
