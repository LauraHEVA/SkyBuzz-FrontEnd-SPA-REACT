import { PrimaryBtn } from "../../styles/globalStyledComponents";
import { ButtonProps } from "../../types/componentsInterfaces";

const ButtonSubmit = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <PrimaryBtn type="submit" className={className} onClick={actionOnClick}>
      {text}
    </PrimaryBtn>
  );
};

export default ButtonSubmit;
