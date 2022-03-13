import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";

const HeartIcon = () => {
  return (
    <>
      <FontAwesomeIcon
        data-testid="heart"
        icon={faHeart}
        size="lg"
        color={primary}
      />
    </>
  );
};

export default HeartIcon;
