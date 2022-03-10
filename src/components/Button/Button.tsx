import React from "react";

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
  className: string;
}

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
