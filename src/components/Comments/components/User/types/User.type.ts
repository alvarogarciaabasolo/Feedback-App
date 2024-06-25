import {
  CommentInterface,
  ReplyInterface,
  DataInterface,
  UserInterface,
} from '../../../../../types/FetchGetValue.type';

export interface Iuser  {
  res?: CommentInterface;
  item?: ReplyInterface;
  valueFetch?: DataInterface;
  handleClickReply?: (id: number |UserInterface) => void;
  handleClickReplies?: (username: string | UserInterface) => void;
}