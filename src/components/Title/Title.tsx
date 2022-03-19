import { H2Login, H3Login } from "../../styles/globalStyledComponents";
import { TitleProps } from "../../types/componentsInterfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <H2Login>SkyBuzz</H2Login>
      <H3Login>{title}</H3Login>
    </>
  );
};

export default Title;
