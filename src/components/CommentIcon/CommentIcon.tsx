import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";

const CommentIcon = () => {
  return (
    <>
      <FontAwesomeIcon
        data-testid="arrow"
        icon={faCommentDots}
        size="1x"
        color={primary}
      />
    </>
  );
};

export default CommentIcon;
