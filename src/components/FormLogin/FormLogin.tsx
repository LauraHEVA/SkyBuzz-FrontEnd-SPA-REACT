import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUserThunk } from "../../redux/thunks/userThunk";
import {
  ButtonRegisterContainer,
  ButtonSubmitContainer,
  CreateAccountContainer,
} from "../../styles/globalStyledComponents";
import { background, primary } from "../../styles/globalStyles";
import ButtonDisabled from "../Buttons/ButtonDisabled";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSubmit from "../Buttons/ButtonSubmit";

const FormLogin = (): JSX.Element => {
  const emptyDataForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(event as React.ChangeEvent<HTMLInputElement>).target.id]:
        event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const dispatch = useDispatch();

  const formSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await dispatch(loginUserThunk(formData));
    resetForm();
    goToHomePage();
  };

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  const goToRegister = () => {
    navigate(`/register`);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formSubmit} autoComplete="off">
          <div className="mb-3">
            <InputForm
              name="username"
              type="text"
              placeholder="Username"
              className="form-control"
              id="username"
              value={formData.username}
              onChange={handleForm}
            />
          </div>
          <div className="mb-3">
            <InputForm
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handleForm}
            />
          </div>
          {formData.password.length > 6 && formData.username.length > 2 ? (
            <ButtonSubmitContainer>
              <ButtonSubmit className={"btn-primary"} text={"Log in"} />
            </ButtonSubmitContainer>
          ) : (
            <ButtonSubmitContainer>
              <ButtonDisabled
                className={"btn btn-outline-secondary"}
                text={"Log in"}
              />
            </ButtonSubmitContainer>
          )}
        </form>
      </div>
      <CreateAccountContainer className="createAccountContainer">
        <p>Create an account</p>
        <ButtonRegisterContainer>
          <ButtonPrimary
            actionOnClick={() => {
              goToRegister();
            }}
            className={"btn-primary"}
            text={"Register"}
          />
        </ButtonRegisterContainer>
        {/* <Button text={"Register"} actionOnClick={goToRegister}></Button> */}
      </CreateAccountContainer>
    </>
  );
};

const InputForm = styled.input`
  background-color: ${primary};
  border-radius: 10px;
  height: 45px;
  margin: 40px auto;
  color: ${background};
  ::placeholder {
    color: ${background};
    font-family: poppins, sans-serif;
  }
`;

export default FormLogin;
