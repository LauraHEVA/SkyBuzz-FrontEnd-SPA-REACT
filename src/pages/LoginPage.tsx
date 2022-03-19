import { MainContainerLogsUserPage } from "../styles/globalStyledComponents";
import Title from "../components/Title/Title";
import FormLogin from "../components/FormLogin/FormLogin";

const LoginPage = () => {
  return (
    <>
      <MainContainerLogsUserPage>
        <Title title="Sign in and start buzzing" />
        <FormLogin />
      </MainContainerLogsUserPage>
    </>
  );
};

export default LoginPage;
