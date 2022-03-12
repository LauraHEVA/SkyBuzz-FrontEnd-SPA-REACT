import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";
import React from "react";

const TrashIcon = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler;
}): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon
        data-testid="trash-can"
        icon={faTrashCan}
        size="1x"
        color={primary}
        onClick={onClick}
      />
    </>
  );
};

export default TrashIcon;
