import { PrimaryBtn } from "../../styles/globalStyledComponents";
import { ButtonProps } from "../../types/componentsInterfaces";

const ButtonSubmit = ({ text, className }: ButtonProps): JSX.Element => {
  return (
    <PrimaryBtn type="submit" className={className}>
      {text}
    </PrimaryBtn>
  );
};

export default ButtonSubmit;
