import styled from "styled-components";
import { primary } from "../../styles/globalStyles";
import { ButtonProps } from "../../types/componentsInterfaces";

const PrimaryBtn = styled.button`
  background-color: ${primary};
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
