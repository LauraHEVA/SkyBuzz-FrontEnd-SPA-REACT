import { PrimaryBtn } from "../../styles/globalStyledComponents";
import { ButtonProps } from "../../types/componentsInterfaces";

const ButtonDisabled = ({ text, className }: ButtonProps): JSX.Element => {
  return (
    <PrimaryBtn type="button" className={className} disabled>
      {text}
    </PrimaryBtn>
  );
};

export default ButtonDisabled;
