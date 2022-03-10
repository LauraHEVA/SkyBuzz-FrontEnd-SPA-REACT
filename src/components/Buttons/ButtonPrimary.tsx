import styled from "styled-components";
import { greenCircleAuthor, grey, primary } from "../../styles/globalStyles";
import { ButtonProps } from "../../types/componentsInterfaces";

const PrimaryBtn = styled.button`
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

const ButtonPrimary = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <PrimaryBtn type="button" className={className} onClick={actionOnClick}>
      {text}
    </PrimaryBtn>
  );
};

export default ButtonPrimary;
