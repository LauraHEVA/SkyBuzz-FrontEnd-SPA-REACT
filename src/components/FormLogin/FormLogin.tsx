import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/thunks/userThunk";

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
  return (
    <div className="container">
      <form onSubmit={formSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            placeholder="Enter Your Username"
            className="form-control"
            id="username"
            value={formData.username}
            onChange={handleForm}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleForm}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
