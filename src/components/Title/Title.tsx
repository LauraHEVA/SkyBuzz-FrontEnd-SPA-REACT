import { H2LogsUser, H3LogsUser } from "../../styles/globalStyledComponents";
import { TitleProps } from "../../types/componentsInterfaces";

const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <>
      <H2LogsUser>SkyBuzz</H2LogsUser>
      <H3LogsUser>{title}</H3LogsUser>
    </>
  );
};

export default Title;
