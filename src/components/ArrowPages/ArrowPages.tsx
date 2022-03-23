import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { background, greyLight, primary } from "../../styles/globalStyles";
import { ArrowPagesProps } from "../../types/componentsInterfaces";

const ArrowPages = ({
  actionOnClick,
  disabled,
  showSide,
}: ArrowPagesProps): JSX.Element => {
  return (
    <ArrowPagesBtn onClick={actionOnClick} disabled={disabled}>
      <FontAwesomeIcon
        title="pageArrow"
        data-testid="pageArrow"
        icon={showSide ? faAngleLeft : faAngleRight}
        size="2x"
        color={disabled ? greyLight : primary}
      />
    </ArrowPagesBtn>
  );
};
const ArrowPagesBtn = styled.button`
  background-color: ${background};
  border: none;
`;
export default ArrowPages;
