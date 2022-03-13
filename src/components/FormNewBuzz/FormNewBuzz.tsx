import {
  ButtonContainerNewBuzz,
  ButtonSubmitForm,
} from "../../styles/globalStyledComponents";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const FormNewBuzz = (): JSX.Element => {
  return (
    <>
      <div className="container">
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
          <label htmlFor="messageBuzz">Writte your buzz...</label>
        </div>
        <ButtonSubmitForm>
          <ButtonPrimary
            actionOnClick={() => console.log("Form")}
            className={"btn-primary"}
            text={"Buzz It!"}
          />
        </ButtonSubmitForm>
      </div>
    </>
  );
};

export default FormNewBuzz;
