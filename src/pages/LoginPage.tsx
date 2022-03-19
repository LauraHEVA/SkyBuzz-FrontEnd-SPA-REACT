import { MainContainerPage } from "../styles/globalStyledComponents";
import Title from "../components/Title/Title";
import FormLogin from "../components/FormLogin/FormLogin";

const LoginPage = () => {
  return (
    <>
      <MainContainerPage>
        <Title title="Sign in and start buzzing" />
        <FormLogin />
      </MainContainerPage>
    </>
  );
};

export default LoginPage;
