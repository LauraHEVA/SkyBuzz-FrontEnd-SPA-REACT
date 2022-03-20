import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";
import { ArrowPagesProps } from "../../types/componentsInterfaces";

const ArrowPages = ({
  actionOnClick,
  disabled,
  showSide,
}: ArrowPagesProps): JSX.Element => {
  const ArrowPages = styled.button`
    background-color: ${primary};
    border: none;
  `;

  return (
    <ArrowPages onClick={actionOnClick} disabled={disabled}>
      <FontAwesomeIcon
        data-testid="pageArrow"
        icon={showSide ? faAngleLeft : faAngleRight}
        size="3x"
        color={disabled ? "dimgray" : secondary}
      />
    </ArrowPages>
  );
};

export default ArrowPages;
