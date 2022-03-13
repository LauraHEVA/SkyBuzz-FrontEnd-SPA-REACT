import { IconLookup, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primary } from "../../styles/globalStyles";

library.add(fas);

const userLookUp: IconLookup = {
  prefix: "fas",
  iconName: "user",
};

const UserIcon = (): JSX.Element => {
  return (
    <FontAwesomeIcon
      data-testid="user"
      icon={userLookUp}
      size="lg"
      color={primary}
    />
  );
};

export default UserIcon;
