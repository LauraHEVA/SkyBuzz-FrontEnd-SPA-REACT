import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { background, primary } from "../../styles/globalStyles";
import { ArrowPagesProps } from "../../types/componentsInterfaces";

const ArrowPages = ({
  actionOnClick,
  disabled,
  showSide,
}: ArrowPagesProps): JSX.Element => {
  const ArrowPages = styled.button`
    background-color: ${background};
    border: none;
  `;

  return (
    <ArrowPages onClick={actionOnClick} disabled={disabled}>
      <FontAwesomeIcon
        data-testid="pageArrow"
        icon={showSide ? faAngleLeft : faAngleRight}
        size="2x"
        color={disabled ? "dimgray" : primary}
      />
    </ArrowPages>
  );
};

export default ArrowPages;
