import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";
import React from "react";

const TrashIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <>
      <FontAwesomeIcon
        data-testid="arrow"
        icon={faTrashCan}
        size="1x"
        color={primary}
        onClick={onClick}
      />
    </>
  );
};

export default TrashIcon;
