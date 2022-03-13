import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";
import React from "react";
import { FaIcon } from "../../styles/globalStyledComponents";

const TrashIcon = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler;
}): JSX.Element => {
  return (
    <>
      <FaIcon
        data-testid="trash-can"
        icon={faTrashCan}
        size="lg"
        color={primary}
        onClick={onClick}
      />
    </>
  );
};

export default TrashIcon;
