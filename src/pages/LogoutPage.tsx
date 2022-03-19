import { MainContainerPage } from "../styles/globalStyledComponents";
import FormLogin from "../components/FormLogin/FormLogin";
import Title from "../components/Title/Title";

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
