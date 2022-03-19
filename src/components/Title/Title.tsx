import { TitleProps } from "../../types/componentsInterfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <h2>SkyBuzz</h2>
      <h3>{title}</h3>
    </>
  );
};

export default Title;
