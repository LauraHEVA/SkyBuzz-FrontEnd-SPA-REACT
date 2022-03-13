import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FaIcon } from "../../styles/globalStyledComponents";
import { primary } from "../../styles/globalStyles";

const HeartIcon = () => {
  return (
    <>
      <FaIcon data-testid="heart" icon={faHeart} size="lg" color={primary} />
    </>
  );
};

export default HeartIcon;
