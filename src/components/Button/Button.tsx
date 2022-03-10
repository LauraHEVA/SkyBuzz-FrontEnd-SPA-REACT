import { ButtonProps } from "../../types/componentsInterfaces";

const Button = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button type="button" className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
