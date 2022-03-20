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
  const emptyDataForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const dispatch = useDispatch();

  const formSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await dispatch(registerUserThunk(formData));
    resetForm();
    goToLogin();
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formSubmit} autoComplete="off">
          <div className="mb-3">
            <InputForm
              name="name"
              type="text"
              placeholder="Name"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleForm}
            />
          </div>
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
          {formData.password.length > 6 &&
          formData.username.length > 2 &&
          formData.name.length > 2 ? (
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
