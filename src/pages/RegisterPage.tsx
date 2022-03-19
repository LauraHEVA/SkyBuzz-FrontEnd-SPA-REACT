import { MainContainerLogsUserPage } from "../styles/globalStyledComponents";
import Title from "../components/Title/Title";
import FormRegister from "../components/FormRegister/FormRegister";

const RegisterPage = () => {
  return (
    <>
      <MainContainerLogsUserPage>
        <Title title="Create an account" />
        <FormRegister />
      </MainContainerLogsUserPage>
    </>
  );
};

export default RegisterPage;
