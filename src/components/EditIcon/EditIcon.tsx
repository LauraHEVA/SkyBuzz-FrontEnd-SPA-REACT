import { primary } from "../../styles/globalStyles";
import { FaIcon } from "../../styles/globalStyledComponents";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditIcon = (): JSX.Element => {
  return (
    <>
      <FaIcon data-testid="edit" icon={faPen} size="lg" color={primary} />
    </>
  );
};

export default EditIcon;
