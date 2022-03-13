import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";
import { FaIcon } from "../../styles/globalStyledComponents";

const CommentIcon = (): JSX.Element => {
  return (
    <>
      <FaIcon
        data-testid="comment"
        icon={faCommentDots}
        size="lg"
        color={primary}
      />
    </>
  );
};

export default CommentIcon;
