import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addNewBuzzThunk } from "../../redux/thunks/buzzsThunk";
import {
  ButtonSubmitContainer,
  ContainerFormNewBuzz,
} from "../../styles/globalStyledComponents";
import { BuzzBasic } from "../../types/buzzInterfaces";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import Toastr from "../Toastr/Toastr";

const FormNewBuzz = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [topicValue, setTopicValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  const resetForm = () => {
    setTopicValue("");
    setMessageValue("");
  };

  const buzzToCreate: BuzzBasic = {
    topic: topicValue,
    text: messageValue,
    author: "SomeAuthor",
  };

  const onSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addNewBuzzThunk(buzzToCreate));
    toast.success("Buzz published correctly");
    resetForm();
    navigate(`/home`);
  };

  return (
    <ContainerFormNewBuzz className="container">
      <form onSubmit={onSubmitForm} autoComplete="off">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="topicBuzz">
            Topic
          </label>
          <select
            className="form-select"
            id="topicBuzz"
            value={topicValue}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setTopicValue(event.target.value)
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setMessageValue(event.target.value)
            }
          ></input>
          <label htmlFor="messageBuzz">Writte your buzz here...</label>
        </div>

        <ButtonSubmitContainer>
          <ButtonSubmit className={"btn-primary"} text={"Buzz It!"} />
          <Toastr />
        </ButtonSubmitContainer>
      </form>
    </ContainerFormNewBuzz>
  );
};

export default FormNewBuzz;
