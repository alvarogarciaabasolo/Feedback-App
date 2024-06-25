import {
  ContainerSuggestions,
  Upvotes,
  UpvotesText,
  Description,
  Comments,
  TitleDescription,
  Details,
  Select,
  SelectText,
  CommentsText,
  UpVotesImg,
} from '../../style/SuggestionItem.styled';
import IconComment from '../../../../assets/shared/icon-comments.svg';
import {
  NUMBER_UP_VOTES,
  NUMBER_COMMENTS,
} from '../NewSuggestion/constants/NewSuggestion.constants';
import { Isuggestions } from './types/SuggestionItem.types';
import { useHoverSuggestionItem } from '../../../../hooks/useHoverSuggestionItem';

export const SuggestionItem = ({ suggestion }: Isuggestions) => {
  const { conditionImg, handleHover, handleRouter } =
    useHoverSuggestionItem(suggestion);

  const {
    upvotes = NUMBER_UP_VOTES,
    title,
    description,
    category,
    comments = [],
  } = suggestion || {};

  return (
    <ContainerSuggestions onClick={handleRouter}>
      <Upvotes onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <UpVotesImg src={conditionImg} alt="Arrow up" />
        <UpvotesText>{upvotes}</UpvotesText>
      </Upvotes>
      <Description>
        <TitleDescription>{title}</TitleDescription>
        <Details>{description}</Details>
        <Select>
          <SelectText>{category}</SelectText>
        </Select>
      </Description>
      <Comments>
        <img src={IconComment} alt="Comment" />
        <CommentsText>{comments.length || NUMBER_COMMENTS}</CommentsText>
      </Comments>
    </ContainerSuggestions>
  );
};
