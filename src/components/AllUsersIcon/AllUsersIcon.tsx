import { IconLookup, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primary } from "../../styles/globalStyles";

library.add(fas);

const allUsersLookUp: IconLookup = {
  prefix: "fas",
  iconName: "users",
};

const AllUsersIcon = (): JSX.Element => {
  return (
    <FontAwesomeIcon
      data-testid="all-users"
      icon={allUsersLookUp}
      size="lg"
      color={primary}
    />
  );
};

export default AllUsersIcon;
