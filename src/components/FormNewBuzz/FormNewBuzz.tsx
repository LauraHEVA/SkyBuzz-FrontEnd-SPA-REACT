import { ChangeEvent, SyntheticEvent, useState } from "react";
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

  const [topicValue, setTopicValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  const resetForm = () => {
    setTopicValue("");
    setMessageValue("");
  };

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    resetForm();
    navigate(`/home`);
  };

  return (
    <ContainerFormNewBuzz className="container">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="topicBuzz">
            Topic
          </label>
          <select
            className="form-select"
            id="topicBuzz"
            value={topicValue}
            onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
              setTopicValue(ev.target.value)
            }
          >
            <option value="1">General</option>
            <option value="2">Resources</option>
            <option value="3">PlayTime</option>
            <option value="4">Events</option>
          </select>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Leave a comment here"
            id="messageBuzz"
            type="text"
            value={messageValue}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setMessageValue(ev.target.value)
            }
          ></input>
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
