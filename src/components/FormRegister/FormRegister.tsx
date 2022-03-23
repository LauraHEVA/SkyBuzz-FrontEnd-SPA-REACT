import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUserThunk } from "../../redux/thunks/userThunk";
import {
  ButtonLogoutContainer,
  CreateAccountContainer,
  SecondaryText,
} from "../../styles/globalStyledComponents";
import { background, primary } from "../../styles/globalStyles";
import ButtonDisabled from "../Buttons/ButtonDisabled";
import ButtonSubmit from "../Buttons/ButtonSubmit";

const FormRegister = (): JSX.Element => {
  const emptyDataFormRegister = {
    name: "",
    username: "",
    password: "",
  };

  const [formDataRegister, setFormDataRegister] = useState(
    emptyDataFormRegister
  );

  const handleFormRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDataRegister({
      ...formDataRegister,
      [event.target.id]: event.target.value,
    });
  };

  const resetFormRegister = () => {
    setFormDataRegister(emptyDataFormRegister);
  };

  const dispatch = useDispatch();

  const formSubmitRegister = async (event: SyntheticEvent) => {
    event.preventDefault();
    await dispatch(registerUserThunk(formDataRegister));
    resetFormRegister();
    goToLogin();
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formSubmitRegister} autoComplete="off">
          <div className="mb-3">
            <InputForm
              data-testid="inputName"
              name="name"
              type="text"
              placeholder="Name"
              className="form-control"
              id="name"
              value={formDataRegister.name}
              onChange={handleFormRegister}
            />
          </div>
          <div className="mb-3">
            <InputForm
              data-testid="inputUsername"
              name="username"
              type="text"
              placeholder="Username"
              className="form-control"
              id="username"
              value={formDataRegister.username}
              onChange={handleFormRegister}
            />
          </div>
          <div className="mb-3">
            <InputForm
              data-testid="inputPassword"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={formDataRegister.password}
              onChange={handleFormRegister}
            />
          </div>
          {formDataRegister.password.length > 6 &&
          formDataRegister.username.length > 2 &&
          formDataRegister.name.length > 2 ? (
            <ButtonLogoutContainer>
              <ButtonSubmit className={"btn-primary"} text={"Register"} />
            </ButtonLogoutContainer>
          ) : (
            <ButtonLogoutContainer>
              <ButtonDisabled
                className={"btn btn-outline-secondary"}
                text={"Register"}
              />
            </ButtonLogoutContainer>
          )}
        </form>
        <CreateAccountContainer className="createAccountContainer">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <SecondaryText>Log In</SecondaryText>
          </Link>
        </CreateAccountContainer>
      </div>
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

export default FormRegister;
