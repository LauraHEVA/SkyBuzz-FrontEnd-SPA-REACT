import { SecondaryBtn } from "../../styles/globalStyledComponents";
import { ButtonProps } from "../../types/componentsInterfaces";

const ButtonSecondary = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <SecondaryBtn type="button" className={className} onClick={actionOnClick}>
      {text}
    </SecondaryBtn>
  );
};

export default ButtonSecondary;
