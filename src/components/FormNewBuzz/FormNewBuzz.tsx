import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ButtonSubmitContainer,
  ContainerFormNewBuzz,
} from "../../styles/globalStyledComponents";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import Toastr from "../Toastr/Toastr";

const FormNewBuzz = (): JSX.Element => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  const emptyDataForm = {
    topicBuzz: "",
    messageBuzz: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // dispatch(registerUserThunk(formData));
    // resetForm();
    goToHomePage();
  };

  return (
    <ContainerFormNewBuzz className="container">
      <form onSubmit={formSubmit} autoComplete="off">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="topicBuzz">
            Topic
          </label>
          <select className="form-select" id="topicBuzz">
            <option selected>General</option>
            <option value="1">Resources</option>
            <option value="2">PlayTime</option>
            <option value="3">Events</option>
          </select>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="messageBuzz"
          ></textarea>
          <label htmlFor="messageBuzz">Writte your buzz here...</label>
        </div>

        <ButtonSubmitContainer>
          <ButtonSubmit
            actionOnClick={() => {
              toast.success("Buzz published correctly");
            }}
            className={"btn-primary"}
            text={"Buzz It!"}
          />
          <Toastr />
        </ButtonSubmitContainer>
      </form>
    </ContainerFormNewBuzz>
  );
};

export default FormNewBuzz;
