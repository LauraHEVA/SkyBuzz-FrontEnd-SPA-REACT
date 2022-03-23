import styled from "styled-components";
import {
  breakpointXS,
  grey,
  greyLight,
  primary,
  secondary,
} from "./globalStyles";

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${greyLight};
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: ${breakpointXS}) {
    max-width: 500px;
  }
`;

export const BuzzCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${greyLight};
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: ${breakpointXS}) {
    max-width: 500px;
  }
`;

export const ProfileContainer = styled.div`
  padding-right: 5px;
`;

export const ProfileCircle = styled.div`
  font-family: "Permanent Marker";
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.div`
  padding-left: 8px;
  width: 100%;
`;

export const TextAuthor = styled.p`
  color: ${primary};
  font-weight: 900;
  font-size: 14px;
  text-shadow: 0 3px 3px ${grey};
  margin-top: 0;
  margin-bottom: 10px;
`;

export const TextAuthorDetail = styled.p`
  color: ${primary};
  font-weight: 900;
  font-size: 16px;
  text-shadow: 0 3px 3px ${grey};
  margin-top: 0;
  margin-bottom: 10px;
`;

export const TextAuthorNormal = styled.p`
  color: ${primary};
  font-weight: 300;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const TextAuthorNormalDetail = styled.p`
  color: ${primary};
  font-weight: 300;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const TextAuthorInLine = styled.span`
  color: ${primary};
  font-weight: 900;
  font-size: 14px;
  text-shadow: 0 3px 3px ${grey};
  margin-top: 0;
  padding-bottom: 10px;
`;

export const TextBuzz = styled.p`
  color: ${primary};
  font-size: 14px;
  cursor: pointer;
`;

export const TextBuzzDetail = styled.p`
  color: ${primary};
  font-size: 14px;
`;

export const TextTopic = styled.p`
  color: ${primary};
  font-weight: 900;
  font-size: 12px;
`;

export const TextTimeAgo = styled.span`
  color: ${primary};
  font-size: 12px;
`;

export const ContainerSuperior = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumDataIcons = styled.span`
  color: ${primary};
  font-size: 12px;
  padding: 5px;
`;
