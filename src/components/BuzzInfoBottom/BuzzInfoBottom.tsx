import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NumDataIcons } from "../../styles/buzzComponentStyles";
import {
  ListItem,
  ListUlHorizontal,
} from "../../styles/globalStyledComponents";
import { BuzzProps } from "../../types/buzzInterfaces";
import { UserData } from "../../types/userInterfaces";
import CommentIcon from "../CommentIcon/CommentIcon";
import HeartIcon from "../HeartIcon/HeartIcon";
import TrashIcon from "../TrashIcon/TrashIcon";

const BuzzInfoBottom = ({ buzz, onClickHeart, onClickTrash }: BuzzProps) => {
  const user: UserData = useSelector((state: RootState) => state.user);

  return (
    <ListUlHorizontal>
      <ListItem>
        <NumDataIcons>{buzz.comments.length}</NumDataIcons>
        <CommentIcon />
      </ListItem>
      {user.loggedIn ? (
        <>
          <ListItem>
            <NumDataIcons>{buzz.likes}</NumDataIcons>
            <HeartIcon onClick={onClickHeart} />
          </ListItem>
          <ListItem>
            <TrashIcon onClick={onClickTrash} />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem>
            <NumDataIcons>{buzz.likes}</NumDataIcons>
            <HeartIcon onClick={onClickHeart} />
          </ListItem>
        </>
      )}
    </ListUlHorizontal>
  );
};

export default BuzzInfoBottom;
