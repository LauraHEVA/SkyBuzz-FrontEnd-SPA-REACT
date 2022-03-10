import { PrimaryBtn } from "../../styles/globalStyledComponents";
import { ButtonProps } from "../../types/componentsInterfaces";

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
