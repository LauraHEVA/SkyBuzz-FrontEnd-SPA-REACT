import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ButtonSubmitForm,
  ContainerFormNewBuzz,
} from "../../styles/globalStyledComponents";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const FormNewBuzz = (): JSX.Element => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

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

        <ButtonSubmitForm>
          <ButtonPrimary
            actionOnClick={() => {
              toast.success("Buzz published correctly");
            }}
            className={"btn-primary"}
            text={"Buzz It!"}
          />
        </ButtonSubmitForm>
      </form>
    </ContainerFormNewBuzz>
  );
};

export default FormNewBuzz;
